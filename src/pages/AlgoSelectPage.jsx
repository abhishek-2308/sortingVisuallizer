import { useState } from 'react';

const ALGORITHMS = [
    /* ─── BEGINNER ─── */
    {
        id: 'bubble', name: 'Bubble Sort', tagline: 'The classic beginner sort',
        timeWorst: 'O(n²)', timeBest: 'O(n)', space: 'O(1)', stable: true,
        difficulty: 'Beginner', diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-blue-600/20 to-indigo-600/20', border: 'border-blue-500/20 hover:border-blue-400/50', glow: '#6366f1',
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
        id: 'selection', name: 'Selection Sort', tagline: 'Find the minimum, place it right',
        timeWorst: 'O(n²)', timeBest: 'O(n²)', space: 'O(1)', stable: false,
        difficulty: 'Beginner', diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-violet-600/20 to-purple-600/20', border: 'border-violet-500/20 hover:border-violet-400/50', glow: '#7c3aed',
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
        id: 'insertion', name: 'Insertion Sort', tagline: 'Build sorted array one item at a time',
        timeWorst: 'O(n²)', timeBest: 'O(n)', space: 'O(1)', stable: true,
        difficulty: 'Beginner', diffColor: 'text-emerald-400 bg-emerald-500/10',
        color: 'from-cyan-600/20 to-teal-600/20', border: 'border-cyan-500/20 hover:border-cyan-400/50', glow: '#0891b2',
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
    /* ─── INTERMEDIATE ─── */
    {
        id: 'merge', name: 'Merge Sort', tagline: 'Divide, conquer & combine',
        timeWorst: 'O(n log n)', timeBest: 'O(n log n)', space: 'O(n)', stable: true,
        difficulty: 'Intermediate', diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-orange-600/20 to-amber-600/20', border: 'border-orange-500/20 hover:border-orange-400/50', glow: '#ea580c',
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
        id: 'quick', name: 'Quick Sort', tagline: 'Partition around a pivot',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', space: 'O(log n)', stable: false,
        difficulty: 'Intermediate', diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-red-600/20 to-rose-600/20', border: 'border-red-500/20 hover:border-red-400/50', glow: '#dc2626',
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
        id: 'shell', name: 'Shell Sort', tagline: 'Insertion sort with gap sequences',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', space: 'O(1)', stable: false,
        difficulty: 'Intermediate', diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-sky-600/20 to-blue-600/20', border: 'border-sky-500/20 hover:border-sky-400/50', glow: '#0284c7',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="2" y="28" width="6" height="16" rx="2" fill="#38bdf8" opacity="0.9" />
                <rect x="10" y="18" width="6" height="26" rx="2" fill="#0ea5e9" opacity="0.9" />
                <rect x="18" y="32" width="6" height="12" rx="2" fill="#38bdf8" opacity="0.7" />
                <rect x="26" y="10" width="6" height="34" rx="2" fill="#0284c7" opacity="0.9" />
                <rect x="34" y="22" width="6" height="22" rx="2" fill="#0ea5e9" opacity="0.7" />
                <rect x="42" y="36" width="4" height="8" rx="2" fill="#38bdf8" opacity="0.5" />
                <path d="M5 26 L29 8" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="3 2" />
            </svg>
        ),
        desc: 'Generalization of insertion sort that allows swapping of far-apart elements using shrinking gap sequences.',
    },
    {
        id: 'comb', name: 'Comb Sort', tagline: 'Bubble sort with shrinking gaps',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', space: 'O(1)', stable: false,
        difficulty: 'Intermediate', diffColor: 'text-yellow-400 bg-yellow-500/10',
        color: 'from-fuchsia-600/20 to-purple-600/20', border: 'border-fuchsia-500/20 hover:border-fuchsia-400/50', glow: '#a21caf',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <rect key={i} x={4 + i * 7} y={10} width="5" height={16 + i * 3} rx="2" fill={`hsl(${280 + i * 10}, 70%, 65%)`} opacity="0.85" />
                ))}
                <path d="M6 42 L42 42" stroke="#d946ef" strokeWidth="1.5" strokeDasharray="4 2" />
            </svg>
        ),
        desc: 'Improves Bubble Sort by using a shrink factor (1.3) to eliminate small values near the end of the list faster.',
    },
    /* ─── ADVANCED ─── */
    {
        id: 'heap', name: 'Heap Sort', tagline: 'Sort using a binary heap',
        timeWorst: 'O(n log n)', timeBest: 'O(n log n)', space: 'O(1)', stable: false,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-pink-600/20 to-fuchsia-600/20', border: 'border-pink-500/20 hover:border-pink-400/50', glow: '#db2777',
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
        id: 'radix', name: 'Radix Sort', tagline: 'Sort digit by digit, no comparisons',
        timeWorst: 'O(nk)', timeBest: 'O(nk)', space: 'O(n+k)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-lime-600/20 to-green-600/20', border: 'border-lime-500/20 hover:border-lime-400/50', glow: '#65a30d',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, i) => (
                    <rect key={d} x={2 + (i % 5) * 9} y={i < 5 ? 8 : 28} width="7" height="12" rx="1.5"
                        fill={`hsl(${120 + d * 14}, 70%, 60%)`} opacity="0.85" />
                ))}
            </svg>
        ),
        desc: 'Sorts integers digit by digit from least to most significant using stable counting sort as a subroutine.',
    },
    {
        id: 'counting', name: 'Counting Sort', tagline: 'Count, then place — no comparisons',
        timeWorst: 'O(n+k)', timeBest: 'O(n+k)', space: 'O(k)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-teal-600/20 to-emerald-600/20', border: 'border-teal-500/20 hover:border-teal-400/50', glow: '#0d9488',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2, 3, 4].map(i => (
                    <rect key={i} x={4 + i * 9} y={44 - (i + 1) * 7} width="7" height={(i + 1) * 7} rx="1.5" fill={`hsl(${160 + i * 15}, 70%, 55%)`} opacity="0.85" />
                ))}
                <path d="M2 44 L46 44" stroke="#5eead4" strokeWidth="1.5" />
            </svg>
        ),
        desc: 'Counts occurrences of each value and uses prefix sums to place elements directly — O(n+k) time.',
    },
    {
        id: 'bucket', name: 'Bucket Sort', tagline: 'Distribute, sort, collect',
        timeWorst: 'O(n²)', timeBest: 'O(n+k)', space: 'O(n+k)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-amber-600/20 to-yellow-600/20', border: 'border-amber-500/20 hover:border-amber-400/50', glow: '#d97706',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2].map(i => (
                    <g key={i}>
                        <rect x={4 + i * 16} y={22} width="12" height="22" rx="2" fill={`hsl(${40 + i * 20}, 70%, 55%)`} opacity="0.7" />
                        <rect x={4 + i * 16} y={18} width="12" height="5" rx="1" fill={`hsl(${40 + i * 20}, 70%, 70%)`} opacity="0.5" />
                    </g>
                ))}
                <path d="M4 16 Q24 6 44 16" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            </svg>
        ),
        desc: 'Distributes elements into buckets, sorts each bucket (with insertion sort), then concatenates them.',
    },
    {
        id: 'pigeonhole', name: 'Pigeonhole Sort', tagline: 'One hole per value',
        timeWorst: 'O(n+k)', timeBest: 'O(n+k)', space: 'O(k)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-rose-600/20 to-pink-600/20', border: 'border-rose-500/20 hover:border-rose-400/50', glow: '#e11d48',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[0, 1, 2, 3, 4, 5].map(i => (
                    <rect key={i} x={4 + (i % 3) * 16} y={i < 3 ? 6 : 24} width="12" height="14" rx="2"
                        fill={`hsl(${340 + i * 15}, 70%, 60%)`} opacity="0.8" />
                ))}
                <circle cx="10" cy="13" r="3" fill="white" opacity="0.5" />
                <circle cx="26" cy="13" r="3" fill="white" opacity="0.5" />
            </svg>
        ),
        desc: 'Places each element into its corresponding "hole" — works like Counting Sort when key range equals n.',
    },
    {
        id: 'tim', name: 'Tim Sort', tagline: 'The best of both worlds',
        timeWorst: 'O(n log n)', timeBest: 'O(n)', space: 'O(n)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-indigo-600/20 to-violet-600/20', border: 'border-indigo-500/20 hover:border-indigo-400/50', glow: '#4f46e5',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="2" y="30" width="8" height="14" rx="2" fill="#818cf8" opacity="0.9" />
                <rect x="12" y="20" width="8" height="24" rx="2" fill="#6366f1" opacity="0.9" />
                <rect x="22" y="10" width="8" height="34" rx="2" fill="#4f46e5" opacity="0.9" />
                <rect x="32" y="25" width="8" height="19" rx="2" fill="#4338ca" opacity="0.9" />
                <path d="M6 28 Q16 18 26 8" stroke="#a5b4fc" strokeWidth="2" fill="none" />
                <path d="M26 8 Q36 20 42 30" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
            </svg>
        ),
        desc: 'Python & Java\'s real-world sort! Combines insertion sort for small runs with merge sort — adaptive and stable.',
    },
    {
        id: 'tree', name: 'Tree Sort', tagline: 'Sort via BST in-order traversal',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', space: 'O(n)', stable: false,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-green-600/20 to-lime-600/20', border: 'border-green-500/20 hover:border-green-400/50', glow: '#16a34a',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="8" r="6" fill="#4ade80" opacity="0.9" />
                <circle cx="12" cy="26" r="5" fill="#22c55e" opacity="0.9" />
                <circle cx="36" cy="26" r="5" fill="#22c55e" opacity="0.9" />
                <circle cx="6" cy="40" r="4" fill="#16a34a" opacity="0.8" />
                <circle cx="18" cy="40" r="4" fill="#16a34a" opacity="0.8" />
                <circle cx="30" cy="40" r="4" fill="#15803d" opacity="0.8" />
                <circle cx="42" cy="40" r="4" fill="#15803d" opacity="0.8" />
                <line x1="24" y1="14" x2="12" y2="21" stroke="#86efac" strokeWidth="1.5" />
                <line x1="24" y1="14" x2="36" y2="21" stroke="#86efac" strokeWidth="1.5" />
                <line x1="12" y1="31" x2="6" y2="36" stroke="#86efac" strokeWidth="1.2" />
                <line x1="12" y1="31" x2="18" y2="36" stroke="#86efac" strokeWidth="1.2" />
                <line x1="36" y1="31" x2="30" y2="36" stroke="#86efac" strokeWidth="1.2" />
                <line x1="36" y1="31" x2="42" y2="36" stroke="#86efac" strokeWidth="1.2" />
            </svg>
        ),
        desc: 'Inserts all elements into a BST, then performs in-order traversal to extract them in sorted order.',
    },
    {
        id: 'cycle', name: 'Cycle Sort', tagline: 'Minimum memory writes guaranteed',
        timeWorst: 'O(n²)', timeBest: 'O(n²)', space: 'O(1)', stable: false,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-orange-600/20 to-red-600/20', border: 'border-orange-500/20 hover:border-orange-400/50', glow: '#c2410c',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 6 A18 18 0 1 1 6 24" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M6 24 L2 18 L12 20" stroke="#fb923c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="6" fill="#f97316" opacity="0.9" />
                <circle cx="24" cy="24" r="2.5" fill="white" opacity="0.7" />
            </svg>
        ),
        desc: 'Theoretically optimal for minimum memory writes — each element is written at most once to its correct position.',
    },
    {
        id: 'bitonic', name: 'Bitonic Sort', tagline: 'Parallel sorting network',
        timeWorst: 'O(n log² n)', timeBest: 'O(n log² n)', space: 'O(log² n)', stable: false,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-purple-600/20 to-indigo-700/20', border: 'border-purple-500/20 hover:border-purple-400/50', glow: '#7c3aed',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M4 36 C12 20 24 10 36 10" stroke="#a78bfa" strokeWidth="2" fill="none" />
                <path d="M36 10 C40 22 36 34 28 40" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                {[8, 18, 28, 38].map(x => (
                    <circle key={x} cx={x} cy={24} r="3.5" fill="#7c3aed" opacity="0.85" />
                ))}
                <line x1="8" y1="10" x2="8" y2="38" stroke="#c4b5fd" strokeWidth="1" opacity="0.4" />
                <line x1="28" y1="10" x2="28" y2="38" stroke="#c4b5fd" strokeWidth="1" opacity="0.4" />
            </svg>
        ),
        desc: 'A comparison network ideal for parallel hardware — creates and merges bitonic sequences efficiently.',
    },
    {
        id: 'pancake', name: 'Pancake Sort', tagline: 'Sort by flipping prefixes',
        timeWorst: 'O(n²)', timeBest: 'O(n)', space: 'O(1)', stable: false,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-yellow-600/20 to-amber-700/20', border: 'border-yellow-500/20 hover:border-yellow-400/50', glow: '#ca8a04',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="36" width="36" height="6" rx="2" fill="#fbbf24" opacity="0.9" />
                <rect x="10" y="28" width="28" height="6" rx="2" fill="#f59e0b" opacity="0.85" />
                <rect x="14" y="20" width="20" height="6" rx="2" fill="#d97706" opacity="0.8" />
                <rect x="18" y="12" width="12" height="6" rx="2" fill="#b45309" opacity="0.75" />
                <path d="M36 16 C42 10 44 6 40 4" stroke="#fcd34d" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
        ),
        desc: 'Only operation is "flip" — reverses a prefix of the array. Used as a fun puzzle and in gene sequence analysis.',
    },
    {
        id: 'strand', name: 'Strand Sort', tagline: 'Pull sorted strands and merge',
        timeWorst: 'O(n²)', timeBest: 'O(n)', space: 'O(n)', stable: true,
        difficulty: 'Advanced', diffColor: 'text-red-400 bg-red-500/10',
        color: 'from-cyan-700/20 to-teal-600/20', border: 'border-cyan-500/20 hover:border-cyan-400/50', glow: '#0e7490',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M6 14 C14 10 22 18 30 12 C38 6 44 14 44 14" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M6 26 C14 22 20 30 28 26 C36 22 44 28 44 26" stroke="#06b6d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M6 38 C18 34 30 42 44 38" stroke="#0891b2" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {[6, 18, 30, 44].map(x => <circle key={x} cx={x} cy={26} r="2.5" fill="#67e8f9" opacity="0.8" />)}
            </svg>
        ),
        desc: 'Extracts naturally ordered "strands" from the input and merges them — works best on nearly-sorted data.',
    },
    {
        id: 'intro', name: 'Introsort', tagline: 'QuickSort + HeapSort + InsertionSort',
        timeWorst: 'O(n log n)', timeBest: 'O(n log n)', space: 'O(log n)', stable: false,
        difficulty: 'Expert', diffColor: 'text-orange-400 bg-orange-500/10',
        color: 'from-red-700/20 to-orange-700/20', border: 'border-red-600/20 hover:border-red-500/50', glow: '#b91c1c',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <polygon points="24,4 44,40 4,40" fill="#ef4444" opacity="0.2" stroke="#ef4444" strokeWidth="1.5" />
                <circle cx="24" cy="22" r="8" fill="#dc2626" opacity="0.6" />
                <circle cx="24" cy="22" r="4" fill="#fca5a5" opacity="0.9" />
                <text x="20" y="26" fontSize="8" fill="white" fontWeight="bold">i</text>
            </svg>
        ),
        desc: 'C++\'s std::sort! Starts with QuickSort, falls back to HeapSort on deep recursion, uses InsertionSort for small arrays.',
    },
    {
        id: 'block', name: 'Block Sort', tagline: 'In-place merge via blocks',
        timeWorst: 'O(n log n)', timeBest: 'O(n)', space: 'O(1)', stable: true,
        difficulty: 'Expert', diffColor: 'text-orange-400 bg-orange-500/10',
        color: 'from-slate-600/20 to-gray-700/20', border: 'border-slate-500/20 hover:border-slate-400/50', glow: '#475569',
        icon: (
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                {[[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]].map(([c, r], i) => (
                    <rect key={i} x={4 + c * 15} y={10 + r * 18} width="12" height="14" rx="2"
                        fill={`hsl(${210 + i * 12}, 40%, 55%)`} opacity="0.75" />
                ))}
                <path d="M4 44 L44 44" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
            </svg>
        ),
        desc: 'Divides array into √n blocks, sorts each with insertion sort, then merges blocks for guaranteed O(n log n).',
    },
];

export default function AlgoSelectPage({ onSelect }) {
    const [hovered, setHovered] = useState(null);
    const [filter, setFilter] = useState('All');

    const CATEGORIES = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];
    const filtered = filter === 'All' ? ALGORITHMS : ALGORITHMS.filter(a => a.difficulty === filter);

    return (
        <div className="min-h-screen gradient-bg-animated pb-16">
            {/* Header */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Step 1 of 3 — Choose Algorithm
                </div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight gradient-text mb-3">
                    Pick Your Algorithm
                </h1>
                <p className="text-slate-400 text-base max-w-xl mx-auto mb-6">
                    {ALGORITHMS.length} sorting algorithms — each with full visualization, stats &amp; story. Choose wisely!
                </p>
                {/* Filter Tabs */}
                <div className="inline-flex items-center gap-2 glass rounded-full px-2 py-2 flex-wrap justify-center">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200
                                ${filter === cat ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                        >
                            {cat}
                            <span className="ml-1.5 opacity-60">
                                {cat === 'All' ? ALGORITHMS.length : ALGORITHMS.filter(a => a.difficulty === cat).length}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filtered.map((algo) => (
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
