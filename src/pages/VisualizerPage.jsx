import { useState, useRef, useEffect, useCallback } from 'react';
import Controls from '../components/Controls';
import Visualizer from '../components/Visualizer';

export default function VisualizerPage({
    selectedAlgo,
    onBack,
    onDone,          // called with { comparisons, swaps, elapsedMs }
}) {
    const [array, setArray] = useState(() => generateRandom(50));
    const [arraySize, setArraySize] = useState(50);
    const [speed, setSpeed] = useState(55);
    const [isSorting, setIsSorting] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const [pendingSort, setPendingSort] = useState(false);

    function generateRandom(size) {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 95) + 5);
    }

    const handleGenerate = useCallback(() => {
        setArray(generateRandom(arraySize));
        setIsSorted(false); setComparisons(0); setSwaps(0);
    }, [arraySize]);

    const handleCustomInput = useCallback((nums) => {
        setArray(nums); setArraySize(nums.length);
        setIsSorted(false); setComparisons(0); setSwaps(0);
    }, []);

    const handleSizeChange = useCallback((size) => {
        setArraySize(size); setArray(generateRandom(size));
        setIsSorted(false); setComparisons(0); setSwaps(0);
    }, []);

    const handleReset = useCallback(() => {
        setArray(generateRandom(arraySize));
        setIsSorted(false); setComparisons(0); setSwaps(0);
    }, [arraySize]);

    function handleSort() {
        if (!isSorting && !isSorted) setPendingSort(true);
    }

    return (
        <div className="min-h-screen pb-16" style={{
            background: 'radial-gradient(ellipse at 20% 0%, #1e1b4b22 0%, transparent 60%), #020617'
        }}>

            {/* Page Header */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-2 flex items-center justify-between flex-wrap gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-3 text-xs text-slate-400 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        Step 2 of 3 — Visualize
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        <span className="gradient-text">{ALGO_NAMES[selectedAlgo]}</span>
                        <span className="text-slate-400 text-xl font-normal ml-3">in action</span>
                    </h1>
                </div>
                <button className="btn-algo flex items-center gap-2" onClick={onBack} disabled={isSorting}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Change Algorithm
                </button>
            </div>

            {/* Controls */}
            <Controls
                selectedAlgo={selectedAlgo}
                onAlgoChange={() => { }}        /* locked on this page */
                arraySize={arraySize}
                onSizeChange={handleSizeChange}
                speed={speed}
                onSpeedChange={setSpeed}
                onGenerate={handleGenerate}
                onCustomInput={handleCustomInput}
                onSort={handleSort}
                onReset={handleReset}
                isSorting={isSorting}
                isSorted={isSorted}
                hideAlgoSelector          /* hide the top algo panel */
            />

            {/* Visualizer */}
            <Visualizer
                array={array}
                selectedAlgo={selectedAlgo}
                speed={speed}
                isSorting={isSorting}
                setIsSorting={setIsSorting}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                comparisons={comparisons}
                setComparisons={setComparisons}
                swaps={swaps}
                setSwaps={setSwaps}
                pendingSort={pendingSort}
                onSortConsumed={() => setPendingSort(false)}
                onDone={onDone}
            />

            {/* View Results CTA */}
            {isSorted && (
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-2 animate-slide-up">
                    <button
                        className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center gap-3 mx-auto"
                        style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
                        onClick={() => onDone({ comparisons, swaps })}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        View Results &amp; Algorithm Story
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

const ALGO_NAMES = {
    bubble: 'Bubble Sort', selection: 'Selection Sort', insertion: 'Insertion Sort',
    merge: 'Merge Sort', quick: 'Quick Sort', heap: 'Heap Sort',
    radix: 'Radix Sort',
};
