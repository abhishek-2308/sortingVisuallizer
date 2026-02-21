import { useState } from 'react';

const ALGORITHMS = [
    {
        id: 'bubble',
        name: 'Bubble Sort',
        tagline: 'The classic beginner sort',
        timeWorst: 'O(n²)',
        timeBest: 'O(n)',
        space: 'O(1)',
        stable: true,
        difficulty: 'Beginner',
        diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-blue-600/20 to-indigo-600/20',
        border: 'border-blue-500/20 hover:border-blue-400/50',
        glow: '#6366f1',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="12" cy="36" r="8" fill="#818cf8" opacity="0.9" />
                <circle cx="24" cy="24" r="8" fill="#a78bfa" opacity="0.85" />
                <circle cx="36" cy="14" r="8" fill="#c084fc" opacity="0.8" />
                <circle cx="12" cy="36" r="3" fill="white" opacity="0.3" />
                <circle cx="24" cy="24" r="3" fill="white" opacity="0.3" />
                <circle cx="36" cy="14" r="3" fill="white" opacity="0.3" />
            </svg>
        ),
        desc: 'Repeatedly compares adjacent elements and swaps them if out of order — like bubbles rising to the surface.',
    },
    {
        id: 'selection',
        name: 'Selection Sort',
        tagline: 'Find the minimum, place it right',
        timeWorst: 'O(n²)',
        timeBest: 'O(n²)',
        space: 'O(1)',
        stable: false,
        difficulty: 'Beginner',
        diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-violet-600/20 to-purple-600/20',
        border: 'border-violet-500/20 hover:border-violet-400/50',
        glow: '#7c3aed',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="30" width="8" height="14" rx="2" fill="#818cf8" opacity="0.5" />
                <rect x="14" y="20" width="8" height="24" rx="2" fill="#a78bfa" opacity="0.5" />
                <rect x="24" y="10" width="8" height="34" rx="2" fill="#c084fc" opacity="0.9" />
                <rect x="34" y="25" width="8" height="19" rx="2" fill="#e879f9" opacity="0.5" />
                <circle cx="28" cy="8" r="5" fill="#10b981" />
                <path d="M26 8l1.5 1.5L31 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        desc: 'Scans the unsorted portion to find the minimum element and places it at the correct position each pass.',
    },
    {
        id: 'insertion',
        name: 'Insertion Sort',
        tagline: 'Build sorted array one item at a time',
        timeWorst: 'O(n²)',
        timeBest: 'O(n)',
        space: 'O(1)',
        stable: true,
        difficulty: 'Beginner',
        diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-cyan-600/20 to-teal-600/20',
        border: 'border-cyan-500/20 hover:border-cyan-400/50',
        glow: '#0891b2',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="34" width="8" height="10" rx="2" fill="#67e8f9" opacity="0.9" />
                <rect x="14" y="26" width="8" height="18" rx="2" fill="#22d3ee" opacity="0.9" />
                <rect x="24" y="18" width="8" height="26" rx="2" fill="#06b6d4" opacity="0.9" />
                <rect x="34" y="10" width="8" height="34" rx="2" fill="#0891b2" opacity="0.9" />
                <path d="M28 6 L28 16" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 10 L28 6 L32 10" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        ),
        desc: 'Like sorting playing cards in hand — picks one element at a time and inserts it into its correct position.',
    },
    {
        id: 'merge',
        name: 'Merge Sort',
        tagline: 'Divide, conquer & combine',
        timeWorst: 'O(n log n)',
        timeBest: 'O(n log n)',
        space: 'O(n)',
        stable: true,
        difficulty: 'Intermediate',
        diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-orange-600/20 to-amber-600/20',
        border: 'border-orange-500/20 hover:border-orange-400/50',
        glow: '#ea580c',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="2" y="30" width="10" height="14" rx="2" fill="#fb923c" opacity="0.9" />
                <rect x="14" y="22" width="10" height="22" rx="2" fill="#f97316" opacity="0.9" />
                <rect x="26" y="30" width="10" height="14" rx="2" fill="#fb923c" opacity="0.9" />
                <rect x="38" y="22" width="8" height="22" rx="2" fill="#f97316" opacity="0.9" />
                <path d="M7 28 Q7 14 24 14 Q41 14 41 20" stroke="#fcd34d" strokeWidth="2" strokeDasharray="3 2" fill="none" />
            </svg>
        ),
        desc: 'Recursively splits the array in two halves, sorts each, then merges them back — guaranteed O(n log n).',
    },
    {
        id: 'quick',
        name: 'Quick Sort',
        tagline: 'Partition around a pivot',
        timeWorst: 'O(n²)',
        timeBest: 'O(n log n)',
        space: 'O(log n)',
        stable: false,
        difficulty: 'Intermediate',
        diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-red-600/20 to-rose-600/20',
        border: 'border-red-500/20 hover:border-red-400/50',
        glow: '#dc2626',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="2" y="32" width="8" height="12" rx="2" fill="#f87171" opacity="0.7" />
                <rect x="12" y="24" width="8" height="20" rx="2" fill="#ef4444" opacity="0.7" />
                <rect x="22" y="8" width="8" height="36" rx="2" fill="#dc2626" />
                <rect x="32" y="20" width="8" height="24" rx="2" fill="#ef4444" opacity="0.7" />
                <rect x="42" y="28" width="4" height="16" rx="2" fill="#f87171" opacity="0.7" />
                <line x1="26" y1="2" x2="26" y2="7" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="23" y1="5" x2="26" y2="2" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="29" y1="5" x2="26" y2="2" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        ),
        desc: 'Chooses a pivot, partitions elements smaller/larger around it, and recursively sorts sub-arrays.',
    },
    {
        id: 'heap',
        name: 'Heap Sort',
        tagline: 'Sort using a binary heap',
        timeWorst: 'O(n log n)',
        timeBest: 'O(n log n)',
        space: 'O(1)',
        stable: false,
        difficulty: 'Advanced',
        diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-pink-600/20 to-fuchsia-600/20',
        border: 'border-pink-500/20 hover:border-pink-400/50',
        glow: '#db2777',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="8" r="7" fill="#f472b6" opacity="0.9" />
                <circle cx="12" cy="26" r="6" fill="#e879f9" opacity="0.9" />
                <circle cx="36" cy="26" r="6" fill="#e879f9" opacity="0.9" />
                <circle cx="6" cy="40" r="5" fill="#c084fc" opacity="0.8" />
                <circle cx="18" cy="40" r="5" fill="#c084fc" opacity="0.8" />
                <circle cx="30" cy="40" r="5" fill="#c084fc" opacity="0.8" />
                <circle cx="42" cy="40" r="5" fill="#c084fc" opacity="0.8" />
                <line x1="24" y1="15" x2="12" y2="20" stroke="white" strokeWidth="1.2" opacity="0.5" />
                <line x1="24" y1="15" x2="36" y2="20" stroke="white" strokeWidth="1.2" opacity="0.5" />
                <line x1="12" y1="32" x2="6" y2="35" stroke="white" strokeWidth="1.2" opacity="0.5" />
                <line x1="12" y1="32" x2="18" y2="35" stroke="white" strokeWidth="1.2" opacity="0.5" />
                <line x1="36" y1="32" x2="30" y2="35" stroke="white" strokeWidth="1.2" opacity="0.5" />
                <line x1="36" y1="32" x2="42" y2="35" stroke="white" strokeWidth="1.2" opacity="0.5" />
            </svg>
        ),
        desc: 'Builds a max-heap from the array, then repeatedly extracts the maximum to build the sorted output.',
    },
    {
        id: 'radix',
        name: 'Radix Sort',
        tagline: 'Sort digit by digit, no comparisons',
        timeWorst: 'O(nk)',
        timeBest: 'O(nk)',
        space: 'O(n+k)',
        stable: true,
        difficulty: 'Advanced',
        diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-lime-600/20 to-green-600/20',
        border: 'border-lime-500/20 hover:border-lime-400/50',
        glow: '#65a30d',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, i) => (
                    <rect key={d}
                        x={2 + (i % 5) * 9}
                        y={i < 5 ? 8 : 28}
                        width="7" height="12" rx="1.5"
                        fill={`hsl(${120 + d * 14}, 70%, 60%)`} opacity="0.85"
                    />
                ))}
            </svg>
        ),
        desc: 'Sorts integers digit by digit from least to most significant using stable counting sort as a subroutine.',
    },
];

export default function AlgoSelectPage({ onSelect }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="min-h-screen gradient-bg-animated pb-16">
            {/* Header */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Step 1 of 3 — Choose Algorithm
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">
                    Pick Your Algorithm
                </h1>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    Select a sorting algorithm to visualize. Each one has a unique personality — choose wisely!
                </p>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {ALGORITHMS.map((algo) => (
                        <AlgoCard
                            key={algo.id}
                            algo={algo}
                            isHovered={hovered === algo.id}
                            onHover={() => setHovered(algo.id)}
                            onLeave={() => setHovered(null)}
                            onSelect={() => onSelect(algo.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function AlgoCard({ algo, isHovered, onHover, onLeave, onSelect }) {
    return (
        <div
            className={`relative glass rounded-2xl p-5 flex flex-col gap-4 cursor-pointer
        border transition-all duration-300 ${algo.border}
        ${isHovered ? 'scale-[1.03] shadow-2xl' : 'scale-100'}`}
            style={isHovered ? { boxShadow: `0 8px 40px ${algo.glow}33` } : {}}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onSelect}
        >
            {/* Gradient bg blob */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${algo.color} opacity-60 pointer-events-none`} />

            {/* Header row */}
            <div className="relative flex items-start justify-between gap-2">
                <div className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center flex-shrink-0">
                    {algo.icon}
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${algo.diffColor}`}>
                    {algo.difficulty}
                </span>
            </div>

            {/* Name + tagline */}
            <div className="relative">
                <h3 className="font-bold text-lg text-white leading-tight">{algo.name}</h3>
                <p className="text-slate-400 text-xs mt-0.5 italic">{algo.tagline}</p>
            </div>

            {/* Description */}
            <p className="relative text-slate-400 text-[12px] leading-relaxed flex-1">
                {algo.desc}
            </p>

            {/* Complexity pills */}
            <div className="relative flex flex-wrap gap-2">
                <Pill label="Worst" value={algo.timeWorst} color="bg-red-500/10    text-red-300" />
                <Pill label="Best" value={algo.timeBest} color="bg-green-500/10  text-green-300" />
                <Pill label="Space" value={algo.space} color="bg-purple-500/10 text-purple-300" />
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ml-auto
          ${algo.stable ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-400'}`}>
                    {algo.stable ? 'Stable' : 'Unstable'}
                </span>
            </div>

            {/* CTA */}
            <button
                className="relative w-full btn-primary py-2.5 text-sm"
                style={{ background: isHovered ? `linear-gradient(135deg, ${algo.glow}, ${algo.glow}cc)` : undefined }}
            >
                Visualize →
            </button>
        </div>
    );
}

function Pill({ label, value, color }) {
    return (
        <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${color}`}>
            <span className="opacity-60">{label}:</span>
            <span className="font-mono font-semibold">{value}</span>
        </span>
    );
}
