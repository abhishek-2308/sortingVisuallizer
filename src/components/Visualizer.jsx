import { useRef, useEffect, useState, useCallback } from 'react';
import Bar from './Bar';

const ALGO_INFO = {
    bubble: { name: 'Bubble Sort', time: 'O(n²)', best: 'O(n)', space: 'O(1)', stable: true },
    selection: { name: 'Selection Sort', time: 'O(n²)', best: 'O(n²)', space: 'O(1)', stable: false },
    insertion: { name: 'Insertion Sort', time: 'O(n²)', best: 'O(n)', space: 'O(1)', stable: true },
    merge: { name: 'Merge Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(n)', stable: true },
    quick: { name: 'Quick Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(log n)', stable: false },
    heap: { name: 'Heap Sort', time: 'O(n log n)', best: 'O(n log n)', space: 'O(1)', stable: false },
    radix: { name: 'Radix Sort', time: 'O(nk)', best: 'O(nk)', space: 'O(n+k)', stable: true },
};

const COLOUR_LEGEND = [
    { cls: 'bar-default', label: 'Unsorted' },
    { cls: 'bar-compare', label: 'Comparing' },
    { cls: 'bar-swap', label: 'Swapping' },
    { cls: 'bar-sorted', label: 'Sorted' },
    { cls: 'bar-pivot', label: 'Pivot' },
];

export default function Visualizer({
    array,
    selectedAlgo,
    speed,
    isSorting,
    setIsSorting,
    isSorted,
    setIsSorted,
    comparisons,
    setComparisons,
    swaps,
    setSwaps,
    pendingSort,
    onSortConsumed,
    onDone,
}) {
    const [displayArray, setDisplayArray] = useState([...array]);
    const [highlights, setHighlights] = useState({});
    const [sortedSet, setSortedSet] = useState(new Set());
    const [elapsedMs, setElapsedMs] = useState(0);

    const animRef = useRef(null);
    const timerRef = useRef(null);
    const startRef = useRef(null);
    const abortRef = useRef(false);

    /* ── Sync display array when parent generates new array ── */
    useEffect(() => {
        if (!isSorting) {
            setDisplayArray([...array]);
            setHighlights({});
            setSortedSet(new Set());
            setElapsedMs(0);
        }
    }, [array]); // eslint-disable-line react-hooks/exhaustive-deps

    /* ── Trigger sort when parent bumps pendingSort ── */
    useEffect(() => {
        if (pendingSort && !isSorting && !isSorted) {
            onSortConsumed();
            runSort();
        }
    }, [pendingSort]); // eslint-disable-line react-hooks/exhaustive-deps

    /* ── Speed → millisecond delay ── */
    const getDelay = useCallback(() => Math.max(1, Math.round(600 - speed * 5.99)), [speed]);

    /* ── Core animation loop ── */
    async function runSort() {
        // Dynamically import only the needed algorithm
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

        // Snapshot the current array
        const snapshot = [...displayArray];
        const { steps } = sortFn(snapshot);

        abortRef.current = false;
        setIsSorting(true);
        setComparisons(0);
        setSwaps(0);
        setSortedSet(new Set());
        setHighlights({});

        startRef.current = Date.now();
        timerRef.current = setInterval(() => setElapsedMs(Date.now() - startRef.current), 100);

        let stepComp = 0;
        let stepSwaps = 0;
        const localSorted = new Set();

        for (const step of steps) {
            if (abortRef.current) break;

            await new Promise((res) => { animRef.current = setTimeout(res, getDelay()); });

            if (abortRef.current) break;

            if (step.type === 'compare') {
                stepComp++;
                setComparisons(stepComp);
                setDisplayArray([...step.array]);
                const h = {};
                step.indices.forEach((i) => { h[i] = 'bar-compare'; });
                setHighlights(h);
            } else if (step.type === 'swap') {
                stepSwaps++;
                setSwaps(stepSwaps);
                setDisplayArray([...step.array]);
                const h = {};
                step.indices.forEach((i) => { h[i] = 'bar-swap'; });
                setHighlights(h);
            } else if (step.type === 'pivot') {
                setDisplayArray([...step.array]);
                const h = {};
                step.indices.forEach((i) => { h[i] = 'bar-pivot'; });
                setHighlights(h);
            } else if (step.type === 'sorted') {
                setDisplayArray([...step.array]);
                step.indices.forEach((i) => localSorted.add(i));
                setSortedSet(new Set(localSorted));
                setHighlights({});
            } else if (step.type === 'done') {
                const all = new Set(step.array.map((_, i) => i));
                setSortedSet(all);
                setHighlights({});
                setDisplayArray([...step.array]);
            }
        }

        clearInterval(timerRef.current);
        setIsSorting(false);
        if (!abortRef.current) {
            setIsSorted(true);
            if (onDone) onDone({ comparisons: stepComp, swaps: stepSwaps });
        }
    }

    /* ── Cleanup on unmount ── */
    useEffect(() => () => {
        abortRef.current = true;
        clearTimeout(animRef.current);
        clearInterval(timerRef.current);
    }, []);

    /* ── Colour resolver ── */
    function colourOf(i) {
        if (sortedSet.has(i)) return 'bar-sorted';
        if (highlights[i]) return highlights[i];
        return 'bar-default';
    }

    const info = ALGO_INFO[selectedAlgo];
    const maxVal = Math.max(...displayArray, 1);
    const showVals = displayArray.length <= 30;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 space-y-5">

            {/* ── Info Cards ── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* Name + stability */}
                <div className="glass rounded-xl p-3 col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Algorithm</p>
                    <p className="text-base font-bold text-indigo-300 leading-tight">{info.name}</p>
                    <span className={`text-[10px] mt-1 font-medium px-2 py-0.5 rounded-full w-fit
            ${info.stable ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                        {info.stable ? 'Stable' : 'Unstable'}
                    </span>
                </div>

                <InfoCard label="Worst Time" value={info.time} colour="text-yellow-300" />
                <InfoCard label="Best Time" value={info.best} colour="text-green-300" />
                <InfoCard label="Space" value={info.space} colour="text-purple-300" />

                {/* Timer */}
                <div className="glass rounded-xl p-3 flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Time</p>
                    <p className="text-sm font-bold text-pink-300 font-mono">
                        {(elapsedMs / 1000).toFixed(2)}s
                    </p>
                </div>
            </div>

            {/* ── Stats + Legend ── */}
            <div className="flex flex-wrap gap-4 items-center">
                <StatCard icon={<Eye />} label="Comparisons" value={comparisons.toLocaleString()} colour="text-red-400" bg="bg-red-500/10" />
                <StatCard icon={<Swap />} label="Swaps" value={swaps.toLocaleString()} colour="text-amber-400" bg="bg-amber-500/10" />
                <StatCard icon={<Grid />} label="Array Size" value={displayArray.length} colour="text-indigo-400" bg="bg-indigo-500/10" />

                {/* Legend */}
                <div className="ml-auto flex flex-wrap items-center gap-3">
                    {COLOUR_LEGEND.map((l) => (
                        <div key={l.cls} className="flex items-center gap-1.5">
                            <div className={`w-3 h-3 rounded-sm ${l.cls}`} />
                            <span className="text-[10px] text-slate-500">{l.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Bar Chart ── */}
            <div className="glass rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                {/* Subtle grid lines */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20%)',
                    backgroundSize: '100% 25%',
                }} />

                {/* Sorted success overlay */}
                {isSorted && (
                    <div className="absolute top-4 right-4 z-10 glass-strong rounded-xl px-4 py-2 flex items-center gap-2 animate-fade-in">
                        <span className="text-emerald-400 text-lg">✓</span>
                        <span className="text-emerald-400 text-sm font-semibold">Sorted!</span>
                    </div>
                )}

                <div
                    className="flex items-end justify-center gap-px relative z-10"
                    style={{ height: 'clamp(240px, 40vw, 400px)', width: '100%' }}
                >
                    {displayArray.map((val, i) => {
                        const heightPct = (val / maxVal) * 100;
                        const barW = `${Math.max(0.3, 96 / displayArray.length)}%`;
                        return (
                            <Bar
                                key={i}
                                height={heightPct}
                                colourClass={colourOf(i)}
                                value={val}
                                showValue={showVals}
                                width={barW}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* ── Sub-components ───────────────────────────────────────── */
function InfoCard({ label, value, colour }) {
    return (
        <div className="glass rounded-xl p-3 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{label}</p>
            <p className={`text-sm font-bold font-mono ${colour}`}>{value}</p>
        </div>
    );
}

function StatCard({ icon, label, value, colour, bg }) {
    return (
        <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center`}>{icon}</div>
            <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</p>
                <p className={`text-lg font-bold ${colour}`}>{value}</p>
            </div>
        </div>
    );
}

/* Inline SVG icons */
const Eye = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>;
const Swap = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5"><path d="M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4" /></svg>;
const Grid = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
