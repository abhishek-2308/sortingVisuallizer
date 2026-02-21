import { useState, useRef } from 'react';

const ALGORITHMS = [
    { id: 'bubble', label: 'Bubble Sort' },
    { id: 'selection', label: 'Selection Sort' },
    { id: 'insertion', label: 'Insertion Sort' },
    { id: 'merge', label: 'Merge Sort' },
    { id: 'quick', label: 'Quick Sort' },
    { id: 'heap', label: 'Heap Sort' },
    { id: 'radix', label: 'Radix Sort' },
];

export default function Controls({
    selectedAlgo,
    onAlgoChange,
    arraySize,
    onSizeChange,
    speed,
    onSpeedChange,
    onGenerate,
    onCustomInput,
    onSort,
    onReset,
    isSorting,
    isSorted,
    hideAlgoSelector,
}) {
    const [customValue, setCustomValue] = useState('');
    const [inputError, setInputError] = useState('');

    function handleCustomSubmit(e) {
        e.preventDefault();
        const raw = customValue.trim();
        if (!raw) { setInputError('Please enter at least one number.'); return; }

        const parts = raw.split(',').map((s) => s.trim());
        const nums = parts.map(Number);

        if (parts.some((p) => p === '') || nums.some(isNaN)) {
            setInputError('Invalid input. Use comma-separated numbers, e.g. 5,2,9,1');
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
        onCustomInput(nums);
    }

    const speedLabel = speed <= 20 ? 'Slow' : speed <= 50 ? 'Medium' : speed <= 80 ? 'Fast' : 'Super Fast';

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-5">

            {/* ── Algorithm Selector ── */}
            {!hideAlgoSelector && (
                <div className="glass rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
                        Select Algorithm
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {ALGORITHMS.map((a) => (
                            <button
                                key={a.id}
                                className={`btn-algo ${selectedAlgo === a.id ? 'active' : ''}`}
                                onClick={() => onAlgoChange(a.id)}
                                disabled={isSorting}
                            >
                                {a.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Sliders + Custom Input row ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Array Size */}
                <div className="glass rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Array Size</p>
                        <span className="text-indigo-400 font-bold text-sm">{arraySize}</span>
                    </div>
                    <input
                        type="range"
                        min={5} max={150}
                        value={arraySize}
                        onChange={(e) => onSizeChange(Number(e.target.value))}
                        disabled={isSorting}
                        className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600">
                        <span>5</span><span>150</span>
                    </div>
                </div>

                {/* Speed */}
                <div className="glass rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Speed</p>
                        <span className="text-purple-400 font-bold text-sm">{speedLabel}</span>
                    </div>
                    <input
                        type="range"
                        min={1} max={100}
                        value={speed}
                        onChange={(e) => onSpeedChange(Number(e.target.value))}
                        disabled={isSorting}
                        className="w-full"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600">
                        <span>Slow</span><span>Super Fast</span>
                    </div>
                </div>

                {/* Custom Input */}
                <div className="glass rounded-2xl p-5 space-y-3">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Custom Array</p>
                    <form onSubmit={handleCustomSubmit} className="flex gap-2">
                        <input
                            type="text"
                            placeholder="e.g. 5,2,9,1,6"
                            value={customValue}
                            onChange={(e) => { setCustomValue(e.target.value); setInputError(''); }}
                            disabled={isSorting}
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200
                         placeholder-slate-600 outline-none focus:border-indigo-500/60 transition-colors"
                        />
                        <button
                            type="submit"
                            className="btn-primary px-3 py-2 text-xs"
                            disabled={isSorting}
                        >
                            Set
                        </button>
                    </form>
                    {inputError && (
                        <p className="text-red-400 text-[11px] leading-tight">{inputError}</p>
                    )}
                </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex flex-wrap gap-3 items-center">
                <button
                    className="btn-primary flex items-center gap-2"
                    onClick={onGenerate}
                    disabled={isSorting}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                    </svg>
                    Generate Random
                </button>

                <button
                    className="btn-primary flex items-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
                    onClick={onSort}
                    disabled={isSorting || isSorted}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    {isSorting ? 'Sorting…' : 'Sort'}
                </button>

                <button
                    className="btn-algo flex items-center gap-2"
                    onClick={onReset}
                    disabled={isSorting}
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                    </svg>
                    Reset
                </button>
            </div>
        </div>
    );
}
