import { useState, useRef, useEffect, useCallback } from 'react';
import Bar from '../components/Bar';

const ALGO_INFO = {
    bubble: { name: 'Bubble Sort', time: 'O(n²)', best: 'O(n)', space: 'O(1)', stable: true },
    selection: { name: 'Selection Sort', time: 'O(n²)', best: 'O(n²)', space: 'O(1)', stable: false },
    insertion: { name: 'Insertion Sort', time: 'O(n²)', best: 'O(n)', space: 'O(1)', stable: true },
    merge: { name: 'Merge Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(n)', stable: true },
    quick: { name: 'Quick Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(log n)', stable: false },
    heap: { name: 'Heap Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(1)', stable: false },
    radix: { name: 'Radix Sort', time: 'O(nk)', best: 'O(nk)', space: 'O(n+k)', stable: true },
};

const ALGO_META = {
    bubble: { emoji: '🫧', color: '#6366f1' },
    selection: { emoji: '🎯', color: '#7c3aed' },
    insertion: { emoji: '🃏', color: '#0891b2' },
    merge: { emoji: '⚡', color: '#ea580c' },
    quick: { emoji: '🚀', color: '#dc2626' },
    heap: { emoji: '🏔️', color: '#db2777' },
    radix: { emoji: '🔢', color: '#65a30d' },
};

const LEGEND = [
    { cls: 'bar-default', label: 'Unsorted' },
    { cls: 'bar-compare', label: 'Comparing' },
    { cls: 'bar-swap', label: 'Swapping' },
    { cls: 'bar-sorted', label: 'Sorted' },
    { cls: 'bar-pivot', label: 'Pivot' },
];

/* ── Box colour map ── */
const BOX_COLOUR = {
    'bar-default': { bg: 'rgba(79,70,229,0.12)', border: 'rgba(99,102,241,0.35)', text: '#a5b4fc', glow: '' },
    'bar-compare': { bg: 'rgba(220,38,38,0.18)', border: '#ef4444', text: '#fca5a5', glow: '0 0 12px #ef444466' },
    'bar-swap': { bg: 'rgba(217,119,6,0.2)', border: '#f59e0b', text: '#fcd34d', glow: '0 0 12px #f59e0b66' },
    'bar-sorted': { bg: 'rgba(5,150,105,0.18)', border: '#10b981', text: '#6ee7b7', glow: '0 0 10px #10b98155' },
    'bar-pivot': { bg: 'rgba(124,58,237,0.22)', border: '#a855f7', text: '#d8b4fe', glow: '0 0 12px #a855f766' },
};

export default function VisualizationPage({ selectedAlgo, initialArray, speed, onBack, onDone }) {
    const info = ALGO_INFO[selectedAlgo];
    const meta = ALGO_META[selectedAlgo];

    /* ── View mode: 'bars' | 'array' ── */
    const [viewMode, setViewMode] = useState('bars');

    /* ── Animation state ── */
    const [displayArray, setDisplayArray] = useState([...initialArray]);
    const [highlights, setHighlights] = useState({});
    const [sortedSet, setSortedSet] = useState(new Set());
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const [elapsedMs, setElapsedMs] = useState(0);

    const animRef = useRef(null);
    const timerRef = useRef(null);
    const startRef = useRef(null);
    const abortRef = useRef(false);

    useEffect(() => () => {
        abortRef.current = true;
        clearTimeout(animRef.current);
        clearInterval(timerRef.current);
    }, []);

    const getDelay = useCallback(() => Math.max(1, Math.round(600 - speed * 5.99)), [speed]);

    /* ── Reset ── */
    function handleReset() {
        abortRef.current = true;
        clearTimeout(animRef.current);
        clearInterval(timerRef.current);
        setDisplayArray([...initialArray]);
        setHighlights({});
        setSortedSet(new Set());
        setIsSorting(false);
        setIsSorted(false);
        setComparisons(0);
        setSwaps(0);
        setElapsedMs(0);
    }

    /* ── Sort ── */
    async function handleSort() {
        if (isSorting || isSorted) return;

        let sortFn;
        try {
            switch (selectedAlgo) {
                case 'bubble': sortFn = (await import('../algorithms/bubbleSort')).bubbleSort; break;
                case 'selection': sortFn = (await import('../algorithms/selectionSort')).selectionSort; break;
                case 'insertion': sortFn = (await import('../algorithms/insertionSort')).insertionSort; break;
                case 'merge': sortFn = (await import('../algorithms/mergeSort')).mergeSort; break;
                case 'quick': sortFn = (await import('../algorithms/quickSort')).quickSort; break;
                case 'heap': sortFn = (await import('../algorithms/heapSort')).heapSort; break;
                case 'radix': sortFn = (await import('../algorithms/radixSort')).radixSort; break;
                default: return;
            }
        } catch { return; }

        const { steps } = sortFn([...displayArray]);
        abortRef.current = false;
        setIsSorting(true);
        setComparisons(0); setSwaps(0);
        setSortedSet(new Set()); setHighlights({});

        startRef.current = Date.now();
        timerRef.current = setInterval(() => setElapsedMs(Date.now() - startRef.current), 100);

        let stepComp = 0, stepSwaps = 0;
        const localSorted = new Set();

        for (const step of steps) {
            if (abortRef.current) break;
            await new Promise((res) => { animRef.current = setTimeout(res, getDelay()); });
            if (abortRef.current) break;

            if (step.type === 'compare') {
                stepComp++;
                setComparisons(stepComp);
                setDisplayArray([...step.array]);
                const h = {}; step.indices.forEach((i) => { h[i] = 'bar-compare'; });
                setHighlights(h);
            } else if (step.type === 'swap') {
                stepSwaps++;
                setSwaps(stepSwaps);
                setDisplayArray([...step.array]);
                const h = {}; step.indices.forEach((i) => { h[i] = 'bar-swap'; });
                setHighlights(h);
            } else if (step.type === 'pivot') {
                setDisplayArray([...step.array]);
                const h = {}; step.indices.forEach((i) => { h[i] = 'bar-pivot'; });
                setHighlights(h);
            } else if (step.type === 'sorted') {
                setDisplayArray([...step.array]);
                step.indices.forEach((i) => localSorted.add(i));
                setSortedSet(new Set(localSorted)); setHighlights({});
            } else if (step.type === 'done') {
                setSortedSet(new Set(step.array.map((_, i) => i)));
                setHighlights({});
                setDisplayArray([...step.array]);
            }
        }

        clearInterval(timerRef.current);
        setIsSorting(false);
        if (!abortRef.current) setIsSorted(true);
    }

    function colourOf(i) {
        if (sortedSet.has(i)) return 'bar-sorted';
        if (highlights[i]) return highlights[i];
        return 'bar-default';
    }

    const maxVal = Math.max(...displayArray, 1);
    const showVals = displayArray.length <= 28;

    return (
        <div className="min-h-screen pb-16" style={{
            background: `radial-gradient(ellipse at 50% 0%, ${meta.color}18 0%, transparent 55%), #020617`
        }}>
            {/* ── Page header ── */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-3 text-xs text-slate-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        Step 3 of 4 — Visualization
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        <span className="text-3xl mr-2">{meta.emoji}</span>
                        <span style={{ color: meta.color }}>{info.name}</span>
                        {isSorting && <span className="text-slate-400 text-xl font-normal ml-3 animate-pulse">sorting…</span>}
                        {isSorted && <span className="text-emerald-400 text-xl font-normal ml-3">✓ done!</span>}
                    </h1>
                </div>
                <button className="btn-algo flex items-center gap-2" onClick={onBack} disabled={isSorting}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Back to Config
                </button>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-5">

                {/* ── Complexity + Timer strip ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="glass rounded-xl p-3 col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col justify-center">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Algorithm</p>
                        <p className="text-base font-bold text-indigo-300">{info.name}</p>
                        <span className={`text-[10px] mt-1 font-medium px-2 py-0.5 rounded-full w-fit
              ${info.stable ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                            {info.stable ? 'Stable' : 'Unstable'}
                        </span>
                    </div>
                    <SmallCard label="Worst Time" value={info.time} colour="text-yellow-300" />
                    <SmallCard label="Best Time" value={info.best} colour="text-green-300" />
                    <SmallCard label="Space" value={info.space} colour="text-purple-300" />
                    <div className="glass rounded-xl p-3 flex flex-col justify-center">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Elapsed</p>
                        <p className="text-sm font-bold text-pink-300 font-mono">{(elapsedMs / 1000).toFixed(2)}s</p>
                    </div>
                </div>

                {/* ── Live stats + View Toggle + Legend ── */}
                <div className="flex flex-wrap gap-3 items-center">
                    <StatPill emoji="👁️" label="Comparisons" value={comparisons.toLocaleString()} colour="text-red-400" bg="bg-red-500/10" />
                    <StatPill emoji="🔄" label="Swaps" value={swaps.toLocaleString()} colour="text-amber-400" bg="bg-amber-500/10" />
                    <StatPill emoji="📊" label="Size" value={displayArray.length} colour="text-indigo-400" bg="bg-indigo-500/10" />

                    {/* ── View mode toggle ── */}
                    <div className="flex items-center glass rounded-xl p-1 gap-1">
                        <button
                            onClick={() => setViewMode('bars')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                                ${viewMode === 'bars'
                                    ? 'bg-indigo-500 text-white shadow-md'
                                    : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            {/* Bar chart icon */}
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="2" y="10" width="4" height="12" rx="1" />
                                <rect x="8" y="6" width="4" height="16" rx="1" />
                                <rect x="14" y="2" width="4" height="20" rx="1" />
                                <rect x="20" y="8" width="4" height="14" rx="1" />
                            </svg>
                            Bars
                        </button>
                        <button
                            onClick={() => setViewMode('array')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200
                                ${viewMode === 'array'
                                    ? 'bg-indigo-500 text-white shadow-md'
                                    : 'text-slate-400 hover:text-slate-200'}`}
                        >
                            {/* Grid / array icon */}
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                            Array
                        </button>
                    </div>

                    {/* Legend */}
                    <div className="ml-auto flex flex-wrap gap-3">
                        {LEGEND.map((l) => (
                            <div key={l.cls} className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-sm ${l.cls}`} />
                                <span className="text-[10px] text-slate-500">{l.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Visualization Panel: Bars OR Array ── */}
                {viewMode === 'bars' ? (
                    /* ── Bar Chart View ── */
                    <div className="glass rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                        {/* Grid lines */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 25%)',
                            backgroundSize: '100% 25%',
                        }} />

                        {/* Sorted badge */}
                        {isSorted && (
                            <div className="absolute top-4 right-4 z-10 glass-strong rounded-xl px-4 py-2 flex items-center gap-2 animate-fade-in"
                                style={{ border: `1px solid ${meta.color}44` }}>
                                <span className="text-emerald-400 text-lg">✅</span>
                                <span className="text-emerald-400 text-sm font-bold">Sorted!</span>
                            </div>
                        )}

                        <div
                            className="flex items-end justify-center gap-px relative z-10"
                            style={{ height: 'clamp(260px, 42vw, 440px)', width: '100%' }}
                        >
                            {displayArray.map((val, i) => (
                                <Bar
                                    key={i}
                                    height={(val / maxVal) * 100}
                                    colourClass={colourOf(i)}
                                    value={val}
                                    showValue={showVals}
                                    width={`${Math.max(0.3, 96 / displayArray.length)}%`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* ── Array Box View ── */
                    <ArrayBoxView
                        displayArray={displayArray}
                        colourOf={colourOf}
                        isSorted={isSorted}
                        metaColor={meta.color}
                    />
                )}

                {/* ── Control Buttons ── */}
                <div className="flex flex-wrap gap-3">
                    <button
                        className="btn-primary px-6 py-3 flex items-center gap-2"
                        style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
                        onClick={handleSort}
                        disabled={isSorting || isSorted}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        {isSorting ? 'Sorting…' : 'Sort'}
                    </button>

                    <button
                        className="btn-algo px-6 py-3 flex items-center gap-2"
                        onClick={handleReset}
                        disabled={isSorting}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                        </svg>
                        Reset
                    </button>

                    {isSorted && (
                        <button
                            className="btn-primary ml-auto px-6 py-3 flex items-center gap-2 animate-slide-up"
                            style={{ background: `linear-gradient(135deg, ${meta.color}, #a855f7)` }}
                            onClick={() => onDone({ comparisons, swaps })}
                        >
                            View Results &amp; Story
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────── */
/* ── Array Box View Component                  ── */
/* ─────────────────────────────────────────────── */
function ArrayBoxView({ displayArray, colourOf, isSorted, metaColor }) {
    const n = displayArray.length;

    /* Choose a nice box size based on array length */
    const boxSize = n <= 20 ? 56 : n <= 40 ? 44 : n <= 70 ? 36 : n <= 100 ? 28 : 22;
    const fontSize = boxSize >= 44 ? '13px' : boxSize >= 36 ? '11px' : '9px';
    const idxSize = boxSize >= 44 ? '10px' : '8px';

    return (
        <div className="glass rounded-2xl p-5 sm:p-7 relative overflow-hidden">
            {/* Sorted badge */}
            {isSorted && (
                <div className="absolute top-4 right-4 z-10 glass-strong rounded-xl px-4 py-2 flex items-center gap-2 animate-fade-in"
                    style={{ border: `1px solid ${metaColor}44` }}>
                    <span className="text-emerald-400 text-lg">✅</span>
                    <span className="text-emerald-400 text-sm font-bold">Sorted!</span>
                </div>
            )}

            {/* Label */}
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-semibold select-none">
                Array — {n} elements
            </p>

            {/* Boxes */}
            <div
                className="flex flex-wrap gap-1.5"
                style={{ maxHeight: '340px', overflowY: 'auto' }}
            >
                {displayArray.map((val, i) => {
                    const cls = colourOf(i);
                    const style = BOX_COLOUR[cls] || BOX_COLOUR['bar-default'];

                    return (
                        <div
                            key={i}
                            className="relative flex flex-col items-center justify-center rounded-lg select-none"
                            style={{
                                width: boxSize,
                                height: boxSize,
                                background: style.bg,
                                border: `1.5px solid ${style.border}`,
                                boxShadow: style.glow || 'none',
                                transition: 'background 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease, transform 0.12s ease',
                                transform: (cls === 'bar-compare' || cls === 'bar-swap' || cls === 'bar-pivot')
                                    ? 'scale(1.12) translateY(-2px)'
                                    : 'scale(1)',
                            }}
                        >
                            {/* Value */}
                            <span
                                className="font-bold font-mono leading-none"
                                style={{ fontSize, color: style.text }}
                            >
                                {val}
                            </span>
                            {/* Index label */}
                            {boxSize >= 36 && (
                                <span
                                    className="absolute bottom-[3px] left-0 right-0 text-center leading-none"
                                    style={{ fontSize: idxSize, color: 'rgba(148,163,184,0.4)' }}
                                >
                                    {i}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Colour key row at bottom */}
            <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/[0.05]">
                {Object.entries(BOX_COLOUR).map(([cls, style]) => {
                    const label = {
                        'bar-default': 'Unsorted',
                        'bar-compare': 'Comparing',
                        'bar-swap': 'Swapping',
                        'bar-sorted': 'Sorted',
                        'bar-pivot': 'Pivot',
                    }[cls];
                    return (
                        <div key={cls} className="flex items-center gap-1.5">
                            <div
                                className="w-5 h-5 rounded"
                                style={{ background: style.bg, border: `1.5px solid ${style.border}` }}
                            />
                            <span className="text-[10px] text-slate-500">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Tiny sub-components ── */
function SmallCard({ label, value, colour }) {
    return (
        <div className="glass rounded-xl p-3 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{label}</p>
            <p className={`text-sm font-bold font-mono ${colour}`}>{value}</p>
        </div>
    );
}

function StatPill({ emoji, label, value, colour, bg }) {
    return (
        <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-base`}>{emoji}</div>
            <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</p>
                <p className={`text-lg font-bold ${colour}`}>{value}</p>
            </div>
        </div>
    );
}
