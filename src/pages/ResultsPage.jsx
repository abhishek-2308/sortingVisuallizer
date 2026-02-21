const ALGO_DATA = {
    bubble: {
        name: 'Bubble Sort',
        emoji: '🫧',
        color: 'from-blue-600 to-indigo-600',
        glow: '#6366f1',
        timeWorst: 'O(n²)',
        timeBest: 'O(n)',
        timeAvg: 'O(n²)',
        space: 'O(1)',
        stable: true,
        invented: '1956',
        useCases: ['Small datasets', 'Already nearly-sorted arrays', 'Educational purposes', 'Detecting sorted arrays'],
        notFor: ['Large datasets', 'Performance-critical code', 'Production systems'],
        story: [
            {
                title: 'The Origin',
                icon: '📖',
                text: 'Bubble Sort is one of the oldest and simplest sorting algorithms, first analyzed formally by computer scientist Iverson in 1962. Its name comes from the way smaller values "bubble" up to the beginning of the list, much like air bubbles rising through water.',
            },
            {
                title: 'How It Thinks',
                icon: '🧠',
                text: 'Imagine you\'re arranging a row of students by height. You walk down the line, and every time you see a taller student standing in front of a shorter one, you swap them. You do this over and over until no more swaps are needed — the tallest student has "bubbled" to the end!',
            },
            {
                title: 'The Catch',
                icon: '⚠️',
                text: 'In the worst case (a reverse-sorted array), Bubble Sort must make n × (n-1) / 2 comparisons. For 1,000 elements that\'s ~500,000 operations! Modern sorting algorithms like Merge Sort handle this in under 10,000. This is why Bubble Sort is mainly used for teaching — not production.',
            },
            {
                title: 'When It Shines',
                icon: '⭐',
                text: 'Bubble Sort has one hidden superpower: with the "early exit" optimization, it detects already-sorted arrays in a single O(n) pass. This makes it genuinely useful for checking whether data is already in order.',
            },
        ],
        funFact: 'Bubble Sort is so famously slow that Donald Knuth, the father of algorithm analysis, wrote: "The bubble sort seems to have nothing to recommend it, except a catchy name."',
    },

    selection: {
        name: 'Selection Sort',
        emoji: '🎯',
        color: 'from-violet-600 to-purple-600',
        glow: '#7c3aed',
        timeWorst: 'O(n²)',
        timeBest: 'O(n²)',
        timeAvg: 'O(n²)',
        space: 'O(1)',
        stable: false,
        invented: '~1960s',
        useCases: ['Small arrays', 'Memory-constrained environments', 'Minimizing memory writes', 'Simple implementation needs'],
        notFor: ['Large data', 'Stable sort requirements', 'Frequently changing datasets'],
        story: [
            {
                title: 'The Concept',
                icon: '📖',
                text: 'Selection Sort works like a trophy ceremony. It scans the entire unsorted lineup, finds the smallest (or largest) element, and places it in its final position — just like awarding the Grand Prize first, then 2nd, then 3rd.',
            },
            {
                title: 'How It Thinks',
                icon: '🧠',
                text: 'Think of sorting a hand of playing cards by always picking the lowest card from your hand and placing it face-down on the table. You scan all remaining cards each time. Simple, predictable, but repetitive.',
            },
            {
                title: 'The Catch',
                icon: '⚠️',
                text: 'Selection Sort always makes exactly n² / 2 comparisons regardless of the initial order. Even if the array is already sorted, it still scans everything! However, it makes very few swaps — at most n-1 — making it useful when write operations are expensive.',
            },
            {
                title: 'A Hidden Strength',
                icon: '⭐',
                text: 'Selection Sort\'s consistent, minimal number of swaps (O(n)) makes it ideal in situations where memory writes are costly — like flash memory storage where each write reduces the chip\'s lifespan.',
            },
        ],
        funFact: 'Selection Sort makes the minimum possible number of swaps of any comparison-based sorting algorithm — only O(n) swaps in the worst case!',
    },

    insertion: {
        name: 'Insertion Sort',
        emoji: '🃏',
        color: 'from-cyan-600 to-teal-600',
        glow: '#0891b2',
        timeWorst: 'O(n²)',
        timeBest: 'O(n)',
        timeAvg: 'O(n²)',
        space: 'O(1)',
        stable: true,
        invented: '~1960s',
        useCases: ['Small arrays (n < 20)', 'Nearly-sorted data', 'Online sorting (stream)', 'Hybrid sort sub-routine (TimSort)'],
        notFor: ['Large random datasets', 'Worst-case guarantee needed'],
        story: [
            {
                title: 'The Card Player',
                icon: '📖',
                text: 'Insertion Sort is exactly how most people naturally sort a hand of playing cards. You pick up cards one by one. Each new card is slid into the correct position among the cards already held — shifting others right to make room.',
            },
            {
                title: 'How It Thinks',
                icon: '🧠',
                text: 'The algorithm maintains a "sorted" sub-array at the beginning. For each new element, it walks backward through the sorted portion, shifting elements right until it finds the correct spot to "insert" the new element.',
            },
            {
                title: 'Real-World Usage',
                icon: '⭐',
                text: 'Python\'s built-in sort (TimSort) and Java\'s Arrays.sort() both use Insertion Sort for small sub-arrays (n < 64). Why? Because its low overhead makes it faster than O(n log n) algorithms on tiny inputs — constants matter!',
            },
            {
                title: 'Online Sorting',
                icon: '🌐',
                text: 'Insertion Sort is an "online" algorithm — it can sort a list as it receives elements, one at a time. This makes it perfect for streaming data where the full dataset isn\'t known upfront.',
            },
        ],
        funFact: 'Insertion Sort is used inside Python\'s TimSort and Java\'s Arrays.sort(). It\'s faster than Merge Sort for arrays with fewer than ~64 elements!',
    },

    merge: {
        name: 'Merge Sort',
        emoji: '⚡',
        color: 'from-orange-500 to-amber-500',
        glow: '#ea580c',
        timeWorst: 'O(n log n)',
        timeBest: 'O(n log n)',
        timeAvg: 'O(n log n)',
        space: 'O(n)',
        stable: true,
        invented: '1945 — John von Neumann',
        useCases: ['Linked lists', 'External sorting', 'Guaranteed performance', 'Stable sort required', 'Large datasets'],
        notFor: ['Memory-constrained environments (needs O(n) extra space)', 'Small arrays'],
        story: [
            {
                title: 'A Von Neumann Gift',
                icon: '📖',
                text: 'Merge Sort was invented in 1945 by John von Neumann — the same mathematical genius who designed the architecture all modern computers are built on. It was one of the first sorting algorithms designed specifically for computers.',
            },
            {
                title: 'Divide and Conquer',
                icon: '🧠',
                text: 'The strategy is elegant: recursively split the array in half until each piece has just one element (which is trivially sorted), then merge pairs of sorted pieces back together. Merging two sorted arrays is fast and easy — just compare their fronts and take the smaller.',
            },
            {
                title: 'Guaranteed Power',
                icon: '⭐',
                text: 'Unlike Quick Sort, Merge Sort guarantees O(n log n) in all cases — even worst case. For 1,000,000 elements, that\'s about 20,000,000 operations vs Bubble Sort\'s 500,000,000,000. That\'s 25,000× faster!',
            },
            {
                title: 'Sorting Hard Drives',
                icon: '💾',
                text: 'When your data is too large to fit in RAM — like sorting terabytes of logs — "External Merge Sort" is used. Data is split into chunks that fit in memory, sorted, then merged in passes. This is how databases handle massive sort operations.',
            },
        ],
        funFact: 'Merge Sort was invented in 1945 by John von Neumann. It\'s still used today in Python\'s sorted(), Java\'s Arrays.sort() for Objects, and database engines.',
    },

    quick: {
        name: 'Quick Sort',
        emoji: '🚀',
        color: 'from-red-500 to-rose-600',
        glow: '#dc2626',
        timeWorst: 'O(n²)',
        timeBest: 'O(n log n)',
        timeAvg: 'O(n log n)',
        space: 'O(log n)',
        stable: false,
        invented: '1959 — Tony Hoare',
        useCases: ['General purpose sorting', 'In-place sorting required', 'Cache-efficient sorting', 'Large random datasets'],
        notFor: ['Already sorted data (without randomization)', 'Stable sort requirements'],
        story: [
            {
                title: 'The Legend',
                icon: '📖',
                text: 'Quick Sort was invented in 1959 by British computer scientist Tony Hoare while he was a 25-year-old student. He described the "aha moment" of the idea hitting him while learning Russian — he later won the Turing Award, computing\'s Nobel Prize.',
            },
            {
                title: 'The Pivot Strategy',
                icon: '🧠',
                text: 'Quick Sort picks a "pivot" element and partitions the array: elements smaller than the pivot go left, larger go right. Then it recursively sorts the two halves. The magic? This partitioning is done in-place, requiring minimal extra memory.',
            },
            {
                title: 'Why So Fast in Practice?',
                icon: '⭐',
                text: 'Despite the same O(n log n) average as Merge Sort, Quick Sort is typically 2-3× faster in practice. The reason: better cache performance. It works on data in-place, so the CPU cache stays hot. Memory access patterns matter enormously in modern hardware.',
            },
            {
                title: 'The Achilles Heel',
                icon: '⚠️',
                text: 'Pick the worst pivot every time (e.g., always the minimum on a sorted array) and Quick Sort degrades to O(n²). Modern implementations use "randomized Quick Sort" or "median-of-three" pivot selection to avoid this. C++\'s std::sort uses a hybrid called Introsort.',
            },
        ],
        funFact: 'Quick Sort is the most used general-purpose sort. C\'s qsort(), C++\'s std::sort(), and JavaScript\'s V8 engine all use variants of Quick Sort under the hood.',
    },

    heap: {
        name: 'Heap Sort',
        emoji: '🏔️',
        color: 'from-pink-600 to-fuchsia-600',
        glow: '#db2777',
        timeWorst: 'O(n log n)',
        timeBest: 'O(n log n)',
        timeAvg: 'O(n log n)',
        space: 'O(1)',
        stable: false,
        invented: '1964 — J.W.J. Williams',
        useCases: ['Real-time systems (guaranteed O(n log n)', 'Embedded systems', 'Priority queues', 'K-th largest/smallest element'],
        notFor: ['Cache-sensitive applications (poor cache locality)', 'Stable sort required'],
        story: [
            {
                title: 'The Data Structure Sort',
                icon: '📖',
                text: 'Invented in 1964 by J.W.J. Williams, Heap Sort is unique: it\'s built entirely on the heap data structure — a special binary tree that maintains the property that every parent is larger than its children (max-heap).',
            },
            {
                title: 'The Two Phases',
                icon: '🧠',
                text: 'Phase 1: Build a max-heap from the array in O(n) time. The largest element is now at the root. Phase 2: Repeatedly extract the maximum (swap root with last element, shrink heap, heapify), building the sorted array from the end.',
            },
            {
                title: 'Worst-Case Champion',
                icon: '⭐',
                text: 'Heap Sort gives the best of both worlds: O(n log n) guaranteed in the worst case (unlike Quick Sort) AND O(1) extra memory (unlike Merge Sort). It\'s the go-to when you need guaranteed performance without extra space.',
            },
            {
                title: 'Priority Queues',
                icon: '🎫',
                text: 'The heap underlying Heap Sort is also used directly as a Priority Queue — a fundamental data structure in Dijkstra\'s shortest path algorithm, A* pathfinding, CPU schedulers, and operating system task management.',
            },
        ],
        funFact: 'The heap data structure Heap Sort uses is the foundation of Priority Queues — used in Dijkstra\'s algorithm, A* search, and OS task schedulers!',
    },

    radix: {
        name: 'Radix Sort',
        emoji: '🔢',
        color: 'from-lime-500 to-green-600',
        glow: '#65a30d',
        timeWorst: 'O(nk)',
        timeBest: 'O(nk)',
        timeAvg: 'O(nk)',
        space: 'O(n+k)',
        stable: true,
        invented: '1887 — Herman Hollerith',
        useCases: ['Fixed-length integers', 'Strings of uniform length', 'DNS lookups', 'Telephone number sorting', 'Large datasets with small key range'],
        notFor: ['Floating point numbers (complex)', 'Variable-length strings', 'General comparison-based use'],
        story: [
            {
                title: 'The 1887 Census Machine',
                icon: '📖',
                text: 'Radix Sort predates computers! In 1887, Herman Hollerith invented punch card machines for the US Census that sorted cards by a digit at a time. His company later became IBM. The algorithm is over 130 years old!',
            },
            {
                title: 'No Comparisons Needed',
                icon: '🧠',
                text: 'Radix Sort breaks the O(n log n) comparison-based lower bound by never comparing elements directly. Instead, it sorts digit-by-digit using Counting Sort as a sub-routine — processing units, then tens, then hundreds place, and so on.',
            },
            {
                title: 'Linear Time — For Real',
                icon: '⭐',
                text: 'For n numbers with k digits, Radix Sort runs in O(nk) — effectively O(n) when k is small (like 32-bit integers where k=10 digits). For large n, this can be dramatically faster than any comparison sort. At 1 billion integers, it can be 20× faster than Quick Sort.',
            },
            {
                title: 'Real-World Power',
                icon: '💡',
                text: 'Radix Sort is used in graphics (GPU radix sort for depth sorting), network routers (IP routing table lookups), and many database systems for integer primary key sorting. NVIDIA\'s CUDA library ships a highly optimized GPU radix sort.',
            },
        ],
        funFact: 'Radix Sort was used on punch card machines in 1887! It\'s still used today in GPU sorting libraries (CUDA CUB) and database engines for integer keys.',
    },
};

export default function ResultsPage({ selectedAlgo, comparisons, swaps, onBack, onRestart }) {
    const data = ALGO_DATA[selectedAlgo];

    return (
        <div className="min-h-screen pb-20" style={{
            background: `radial-gradient(ellipse at 50% 0%, ${data.glow}15 0%, transparent 50%), #020617`
        }}>
            {/* Page Header */}
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Step 3 of 3 — Results &amp; Deep Dive
                </div>

                {/* Hero */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-4xl
            flex-shrink-0 shadow-xl`} style={{ boxShadow: `0 0 40px ${data.glow}44` }}>
                        {data.emoji}
                    </div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight" style={{
                            background: `linear-gradient(135deg, ${data.glow}, #e879f9)`,
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                        }}>
                            {data.name}
                        </h1>
                        <p className="text-slate-400 mt-1 text-sm">Invented: {data.invented}</p>
                    </div>
                </div>

                {/* ──── Run Stats ──── */}
                <section className="mb-10">
                    <SectionLabel label="Your Sort Run" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                        <StatCard emoji="👁️" label="Comparisons" value={comparisons.toLocaleString()} sub="element checks" glow={data.glow} />
                        <StatCard emoji="🔄" label="Swaps" value={swaps.toLocaleString()} sub="element moves" glow={data.glow} />
                        <StatCard emoji="⏱️" label="Avg Time" value={data.timeAvg} sub="time complexity" glow={data.glow} />
                        <StatCard emoji="📦" label="Space" value={data.space} sub="extra memory" glow={data.glow} />
                    </div>
                </section>

                {/* ──── Complexity Table ──── */}
                <section className="mb-10">
                    <SectionLabel label="Complexity Analysis" />
                    <div className="glass rounded-2xl overflow-hidden mt-3">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-widest">Case</th>
                                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-widest">Time Complexity</th>
                                    <th className="text-left px-5 py-3 text-slate-500 font-semibold text-xs uppercase tracking-widest">Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="px-5 py-3.5 text-green-400 font-semibold">Best Case</td>
                                    <td className="px-5 py-3.5 font-mono font-bold text-green-300">{data.timeBest}</td>
                                    <td className="px-5 py-3.5 text-slate-400 text-xs">{BEST_MEANING[selectedAlgo]}</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="px-5 py-3.5 text-yellow-400 font-semibold">Average Case</td>
                                    <td className="px-5 py-3.5 font-mono font-bold text-yellow-300">{data.timeAvg}</td>
                                    <td className="px-5 py-3.5 text-slate-400 text-xs">{AVG_MEANING[selectedAlgo]}</td>
                                </tr>
                                <tr className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-5 py-3.5 text-red-400 font-semibold">Worst Case</td>
                                    <td className="px-5 py-3.5 font-mono font-bold text-red-300">{data.timeWorst}</td>
                                    <td className="px-5 py-3.5 text-slate-400 text-xs">{WORST_MEANING[selectedAlgo]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                        <InfoPill emoji="🏷️" label="Stable?" value={data.stable ? 'Yes — equal elements keep their original order' : 'No — equal elements may be reordered'} color={data.stable ? 'text-emerald-400' : 'text-slate-400'} />
                        <InfoPill emoji="💾" label="Space" value={`${data.space} extra memory`} color="text-purple-400" />
                    </div>
                </section>

                {/* ──── Story ──── */}
                <section className="mb-10">
                    <SectionLabel label="The Story" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        {data.story.map((s, i) => (
                            <div key={i} className="glass rounded-2xl p-5 space-y-2 hover:border-white/10 border border-white/[0.04] transition-colors">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{s.icon}</span>
                                    <h3 className="font-bold text-white text-sm">{s.title}</h3>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ──── Use Cases ──── */}
                <section className="mb-10">
                    <SectionLabel label="When To Use" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        <div className="glass rounded-2xl p-5">
                            <h3 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2">
                                <span>✅</span> Use {data.name} when…
                            </h3>
                            <ul className="space-y-2">
                                {data.useCases.map((u, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                        <span className="text-emerald-500 mt-0.5">•</span> {u}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="glass rounded-2xl p-5">
                            <h3 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-2">
                                <span>❌</span> Avoid {data.name} when…
                            </h3>
                            <ul className="space-y-2">
                                {data.notFor.map((u, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                        <span className="text-red-500 mt-0.5">•</span> {u}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ──── Fun Fact ──── */}
                <section className="mb-10">
                    <div className="glass-strong rounded-2xl p-6 border border-yellow-500/10"
                        style={{ background: `linear-gradient(135deg, ${data.glow}08, transparent)` }}>
                        <div className="flex items-start gap-3">
                            <span className="text-3xl flex-shrink-0">💡</span>
                            <div>
                                <h3 className="text-yellow-300 font-bold text-sm mb-2">Fun Fact</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{data.funFact}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──── Action Buttons ──── */}
                <div className="flex flex-wrap gap-4">
                    <button className="btn-primary px-8 py-3 flex items-center gap-2" onClick={onRestart}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                        </svg>
                        Try Another Algorithm
                    </button>
                    <button className="btn-algo px-8 py-3 flex items-center gap-2" onClick={onBack}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to Visualizer
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Sub-components ── */
function SectionLabel({ label }) {
    return (
        <div className="flex items-center gap-3">
            <h2 className="text-white font-bold text-lg">{label}</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
        </div>
    );
}

function StatCard({ emoji, label, value, sub, glow }) {
    return (
        <div className="glass rounded-xl p-4 flex flex-col gap-1 hover:scale-[1.02] transition-transform">
            <span className="text-2xl">{emoji}</span>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</p>
            <p className="text-xl font-black font-mono" style={{ color: glow }}>{value}</p>
            <p className="text-[10px] text-slate-600">{sub}</p>
        </div>
    );
}

function InfoPill({ emoji, label, value, color }) {
    return (
        <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm">
            <span>{emoji}</span>
            <span className="text-slate-500 text-xs">{label}</span>
            <span className={`font-semibold text-xs ${color}`}>{value}</span>
        </div>
    );
}

const BEST_MEANING = {
    bubble: 'Array already sorted — detects with one pass',
    selection: 'Always scans entire array regardless',
    insertion: 'Array already sorted — zero shifts needed',
    merge: 'Always divides evenly, guaranteed log n levels',
    quick: 'Pivot always splits array perfectly in half',
    heap: 'Always builds heap and extracts n times',
    radix: 'k passes of counting sort on n elements',
};
const AVG_MEANING = {
    bubble: 'Random array — quadratic comparisons on average',
    selection: 'Same as worst: always n²/2 comparisons',
    insertion: 'Each element shifts halfway through sorted portion',
    merge: 'Always the same — divide log n levels, merge n per level',
    quick: 'Random pivot divides roughly in half on average',
    heap: 'Always the same — heapify is O(log n) per element',
    radix: 'k digit passes, each O(n) — total O(nk)',
};
const WORST_MEANING = {
    bubble: 'Reverse-sorted array — maximum possible swaps',
    selection: 'Same as best: always n(n-1)/2 comparisons',
    insertion: 'Reverse-sorted — every element shifts all the way',
    merge: 'Same as best — always log n levels of merging',
    quick: 'Always-minimum pivot (e.g. sorted array) — degrades to O(n²)',
    heap: 'Same as best — always O(n log n) by heap structure',
    radix: 'k digit passes of counting sort — still O(nk)',
};
