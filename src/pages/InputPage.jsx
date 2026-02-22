import { useState, useMemo } from 'react';

const SPEED_PRESETS = [
    { label: 'Slow', value: 15, color: 'text-blue-400', bg: 'bg-blue-500/10   border-blue-500/30' },
    { label: 'Medium', value: 40, color: 'text-cyan-400', bg: 'bg-cyan-500/10   border-cyan-500/30' },
    { label: 'Fast', value: 70, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/30' },
    { label: 'Blazing', value: 95, color: 'text-pink-400', bg: 'bg-pink-500/10   border-pink-500/30' },
];

function generateRandom(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 95) + 5);
}

const ALGO_META = {
    bubble: { name: 'Bubble Sort', emoji: '🫧', color: '#6366f1' },
    selection: { name: 'Selection Sort', emoji: '🎯', color: '#7c3aed' },
    insertion: { name: 'Insertion Sort', emoji: '🃏', color: '#0891b2' },
    merge: { name: 'Merge Sort', emoji: '⚡', color: '#ea580c' },
    quick: { name: 'Quick Sort', emoji: '🚀', color: '#dc2626' },
    heap: { name: 'Heap Sort', emoji: '🏔️', color: '#db2777' },
    radix: { name: 'Radix Sort', emoji: '🔢', color: '#65a30d' },
    counting: { name: 'Counting Sort', emoji: '🔢', color: '#0d9488' },
    bucket: { name: 'Bucket Sort', emoji: '🪣', color: '#d97706' },
    shell: { name: 'Shell Sort', emoji: '🐚', color: '#0284c7' },
    tim: { name: 'Tim Sort', emoji: '⏱️', color: '#4f46e5' },
    tree: { name: 'Tree Sort', emoji: '🌳', color: '#16a34a' },
    comb: { name: 'Comb Sort', emoji: '🔀', color: '#a21caf' },
    cycle: { name: 'Cycle Sort', emoji: '🔁', color: '#c2410c' },
    bitonic: { name: 'Bitonic Sort', emoji: '⚡', color: '#7c3aed' },
    pancake: { name: 'Pancake Sort', emoji: '🥞', color: '#ca8a04' },
    strand: { name: 'Strand Sort', emoji: '🧵', color: '#0e7490' },
    pigeonhole: { name: 'Pigeonhole Sort', emoji: '🕊️', color: '#e11d48' },
    intro: { name: 'Introsort', emoji: '🧠', color: '#b91c1c' },
    block: { name: 'Block Sort', emoji: '🧱', color: '#475569' },
};

export default function InputPage({ selectedAlgo, onBack, onProceed }) {
    const meta = ALGO_META[selectedAlgo];

    const [arraySize, setArraySize] = useState(40);
    const [speed, setSpeed] = useState(70);
    const [customVal, setCustomVal] = useState('');
    const [inputError, setInputError] = useState('');
    const [array, setArray] = useState(() => generateRandom(40));
    const [activeSpeed, setActiveSpeed] = useState(2); // index into SPEED_PRESETS

    /* ── Live mini-preview (max 60 bars shown) ── */
    const previewBars = useMemo(() => {
        const display = array.slice(0, Math.min(array.length, 80));
        const maxVal = Math.max(...display, 1);
        return display.map((v, i) => ({ v, h: (v / maxVal) * 100, i }));
    }, [array]);

    /* ── Handlers ── */
    function handleSizeChange(size) {
        setArraySize(size);
        setArray(generateRandom(size));
        setCustomVal('');
        setInputError('');
    }

    function handleGenerate() {
        setArray(generateRandom(arraySize));
        setCustomVal('');
        setInputError('');
    }

    function handleSpeedPreset(idx) {
        setActiveSpeed(idx);
        setSpeed(SPEED_PRESETS[idx].value);
    }

    function handleCustomSubmit(e) {
        e.preventDefault();
        const raw = customVal.trim();
        if (!raw) { setInputError('Please enter at least one number.'); return; }

        const parts = raw.split(',').map((s) => s.trim());
        const nums = parts.map(Number);

        if (parts.some((p) => p === '') || nums.some(isNaN)) {
            setInputError('Use comma-separated integers, e.g. 5,2,9,1,6');
            return;
        }
        if (nums.some((n) => n < 1 || n > 999)) {
            setInputError('Values must be between 1 and 999.');
            return;
        }
        if (nums.length < 2 || nums.length > 150) {
            setInputError('Array length must be between 2 and 150.');
            return;
        }
        setInputError('');
        setArray(nums);
        setArraySize(nums.length);
    }

    return (
        <div className="min-h-screen pb-16" style={{
            background: `radial-gradient(ellipse at 30% 0%, ${meta.color}18 0%, transparent 55%), #020617`
        }}>
            {/* ── Page Header ── */}
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-6">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5 text-xs text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Step 2 of 4 — Configure Input
                </div>

                <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl">{meta.emoji}</span>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            <span style={{ color: meta.color }}>Configure</span>
                            <span className="text-slate-300 ml-2">your array</span>
                        </h1>
                        <p className="text-slate-500 text-sm mt-0.5">For {meta.name}</p>
                    </div>
                </div>

                <button className="btn-algo flex items-center gap-2 mt-4" onClick={onBack}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Change Algorithm
                </button>
            </div>

            {/* ── Main Content ── */}
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-6">

                {/* ── Mini Bar Preview ── */}
                <div className="glass rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Array Preview</p>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-500">{array.length} elements</span>
                            <button
                                onClick={handleGenerate}
                                className="btn-algo text-[11px] px-3 py-1 flex items-center gap-1.5"
                            >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                                </svg>
                                Shuffle
                            </button>
                        </div>
                    </div>

                    {/* Mini bars */}
                    <div
                        className="flex items-end gap-px rounded-xl overflow-hidden"
                        style={{ height: '100px' }}
                    >
                        {previewBars.map((b) => (
                            <div
                                key={b.i}
                                className="bar-default flex-1 rounded-t-[1px] transition-all duration-300"
                                style={{ height: `${b.h}%`, minWidth: '1px' }}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Array Size Slider ── */}
                <div className="glass rounded-2xl p-6 space-y-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white font-semibold text-sm">Array Size</p>
                            <p className="text-slate-500 text-xs mt-0.5">How many elements to sort</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black" style={{ color: meta.color }}>{arraySize}</span>
                            <p className="text-slate-600 text-[10px]">elements</p>
                        </div>
                    </div>

                    <input
                        type="range"
                        min={5} max={150}
                        value={arraySize}
                        onChange={(e) => handleSizeChange(Number(e.target.value))}
                        className="w-full"
                    />

                    {/* Quick-pick size buttons */}
                    <div className="flex flex-wrap gap-2">
                        {[10, 25, 50, 75, 100, 150].map((n) => (
                            <button
                                key={n}
                                onClick={() => handleSizeChange(n)}
                                className={`text-xs px-3 py-1.5 rounded-lg border transition-all
                  ${arraySize === n
                                        ? 'border-indigo-500/60 bg-indigo-500/15 text-indigo-300'
                                        : 'border-white/10 bg-white/[0.03] text-slate-500 hover:border-white/20 hover:text-slate-300'}`}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Speed Selector ── */}
                <div className="glass rounded-2xl p-6 space-y-4">
                    <div>
                        <p className="text-white font-semibold text-sm">Animation Speed</p>
                        <p className="text-slate-500 text-xs mt-0.5">How fast the bars animate during sorting</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {SPEED_PRESETS.map((sp, idx) => (
                            <button
                                key={sp.label}
                                onClick={() => handleSpeedPreset(idx)}
                                className={`rounded-xl border px-4 py-3 text-center transition-all duration-200
                  ${activeSpeed === idx
                                        ? `${sp.bg} ${sp.color} scale-[1.03] shadow-lg`
                                        : 'border-white/10 bg-white/[0.02] text-slate-500 hover:border-white/20'}`}
                            >
                                <p className="font-bold text-sm">{sp.label}</p>
                                <p className="text-[10px] opacity-60 mt-0.5">
                                    {idx === 0 ? 'Great for learning' : idx === 1 ? 'Balanced' : idx === 2 ? 'Quick demo' : 'Instant!'}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Custom Array Input ── */}
                <div className="glass rounded-2xl p-6 space-y-4">
                    <div>
                        <p className="text-white font-semibold text-sm">Custom Array</p>
                        <p className="text-slate-500 text-xs mt-0.5">Enter your own values (comma-separated integers, 1–999)</p>
                    </div>

                    <form onSubmit={handleCustomSubmit} className="flex gap-3">
                        <input
                            type="text"
                            placeholder="e.g. 64, 25, 12, 22, 11, 90, 5, 34"
                            value={customVal}
                            onChange={(e) => { setCustomVal(e.target.value); setInputError(''); }}
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200
                         placeholder-slate-600 outline-none focus:border-indigo-500/60 transition-colors"
                        />
                        <button type="submit" className="btn-primary px-5 py-3 whitespace-nowrap">
                            Use Array
                        </button>
                    </form>

                    {inputError && (
                        <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {inputError}
                        </div>
                    )}

                    {/* Example presets */}
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] text-slate-600 uppercase tracking-widest self-center">Presets:</span>
                        {[
                            { label: 'Nearly Sorted', val: '2,1,3,4,5,7,6,8,10,9' },
                            { label: 'Reverse Sorted', val: '10,9,8,7,6,5,4,3,2,1' },
                            { label: 'All Same', val: '5,5,5,5,5,5,5,5,5,5' },
                            { label: 'Random Pick', val: '42,7,83,19,65,31,94,58,12,77' },
                        ].map((p) => (
                            <button
                                key={p.label}
                                onClick={() => {
                                    setCustomVal(p.val);
                                    setInputError('');
                                }}
                                className="text-[11px] px-2.5 py-1 rounded-lg border border-white/10 text-slate-500
                           hover:border-white/20 hover:text-slate-300 transition-all"
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Proceed Button ── */}
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button
                        className="btn-primary px-8 py-4 text-base flex items-center gap-3 w-full sm:w-auto justify-center"
                        style={{ background: `linear-gradient(135deg, ${meta.color}, #a855f7)` }}
                        onClick={() => onProceed(array, speed)}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Start Visualizing
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Summary pill */}
                    <div className="glass rounded-xl px-4 py-3 flex items-center gap-4 text-xs text-slate-400">
                        <span>📊 <b className="text-slate-200">{array.length}</b> elements</span>
                        <span>⚡ <b className="text-slate-200">{SPEED_PRESETS[activeSpeed].label}</b> speed</span>
                        <span>🔢 <b className="text-slate-200">{meta.name}</b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
