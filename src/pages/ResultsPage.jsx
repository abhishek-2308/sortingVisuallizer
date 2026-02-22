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
            { title: 'The 1887 Census Machine', icon: '📖', text: 'Radix Sort predates computers! In 1887, Herman Hollerith invented punch card machines for the US Census that sorted cards by a digit at a time. His company later became IBM. The algorithm is over 130 years old!' },
            { title: 'No Comparisons Needed', icon: '🧠', text: 'Radix Sort breaks the O(n log n) comparison-based lower bound by never comparing elements directly. Instead, it sorts digit-by-digit using Counting Sort as a sub-routine — processing units, then tens, then hundreds place, and so on.' },
            { title: 'Linear Time — For Real', icon: '⭐', text: 'For n numbers with k digits, Radix Sort runs in O(nk) — effectively O(n) when k is small (like 32-bit integers where k=10 digits). For large n, this can be dramatically faster than any comparison sort. At 1 billion integers, it can be 20× faster than Quick Sort.' },
            { title: 'Real-World Power', icon: '💡', text: 'Radix Sort is used in graphics (GPU radix sort for depth sorting), network routers (IP routing table lookups), and many database systems for integer primary key sorting. NVIDIA\'s CUDA library ships a highly optimized GPU radix sort.' },
        ],
        funFact: 'Radix Sort was used on punch card machines in 1887! It\'s still used today in GPU sorting libraries (CUDA CUB) and database engines for integer keys.',
    },

    counting: {
        name: 'Counting Sort', emoji: '🔢',
        color: 'from-teal-500 to-emerald-500', glow: '#0d9488',
        timeWorst: 'O(n+k)', timeBest: 'O(n+k)', timeAvg: 'O(n+k)',
        space: 'O(k)', stable: true,
        invented: '~1954 — Harold H. Seward',
        useCases: ['Integer keys with small range', 'Counting frequencies', 'Sub-routine in Radix Sort', 'Age/score sorting'],
        notFor: ['Large value ranges (k >> n)', 'Floating point numbers', 'Strings'],
        story: [
            { title: 'Beyond Comparison Limits', icon: '📖', text: 'Counting Sort bypasses the theoretical O(n log n) lower bound of comparison sorts by using the actual values as indices. Harold Seward described it in 1954 and it became foundational for non-comparison sorting.' },
            { title: 'How It Works', icon: '🧠', text: 'It counts how many times each value appears, builds a prefix sum array to determine where each value starts in the output, then places each element precisely — like postal workers sorting letters by zip code into labeled bins.' },
            { title: 'The Sweet Spot', icon: '⭐', text: 'When k (the range of values) is close to n, Counting Sort achieves true O(n) sorting — faster than any comparison-based algorithm can. For sorting 1 million exam scores from 0–100, it\'s lightning fast.' },
            { title: 'The Foundation', icon: '💡', text: 'Counting Sort is the engine inside Radix Sort and Bucket Sort. Understanding it unlocks the whole family of non-comparison sorts. It\'s also used in "stable" implementations where preserving original order of equal elements matters.' },
        ],
        funFact: 'Counting Sort can sort 10 million integers in O(n) time when the value range is small — making it faster than ANY comparison sort for the right input!',
    },

    bucket: {
        name: 'Bucket Sort', emoji: '🪣',
        color: 'from-amber-500 to-yellow-500', glow: '#d97706',
        timeWorst: 'O(n²)', timeBest: 'O(n+k)', timeAvg: 'O(n+k)',
        space: 'O(n+k)', stable: true,
        invented: '~1950s',
        useCases: ['Uniformly distributed data', 'Floating point numbers in [0,1)', 'Hash table construction', 'Histogram computation'],
        notFor: ['Skewed distributions (all in one bucket)', 'Integer-only implementations (use Radix/Counting)', 'Unknown distributions'],
        story: [
            { title: 'Divide by Value', icon: '📖', text: 'Bucket Sort divides the range of values into equal-sized intervals ("buckets"), distributes elements into buckets, sorts each bucket individually (usually with insertion sort), then concatenates the results.' },
            { title: 'The Distribution Win', icon: '🧠', text: 'When elements are uniformly distributed, each bucket receives approximately n/k elements, making the per-bucket sort O(1) on average. This gives overall O(n) average performance — breaking the comparison barrier.' },
            { title: 'Floating Point Friendly', icon: '⭐', text: 'Unlike Radix or Counting Sort which only work on integers, Bucket Sort naturally handles floating point numbers by mapping them to buckets based on their value. It\'s the go-to for sorting random floats in a known range.' },
            { title: 'Real-World Use', icon: '💡', text: 'Bucket Sort is used in external sorting, histogram computation, and as part of parallel sorting algorithms. Graphics rendering pipelines use bucket sort to organize primitives by depth for rendering order.' },
        ],
        funFact: 'Bucket Sort achieves O(n) average time for uniformly distributed data — no comparison sort can mathematically do better on average!',
    },

    shell: {
        name: 'Shell Sort', emoji: '🐚',
        color: 'from-sky-500 to-blue-500', glow: '#0284c7',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', timeAvg: 'O(n log²n)',
        space: 'O(1)', stable: false,
        invented: '1959 — Donald Shell',
        useCases: ['Medium-sized arrays', 'Embedded systems', 'Sorting nearly-sorted data', 'When stable sort unnecessary'],
        notFor: ['Very large datasets', 'When stable sort is required'],
        story: [
            { title: 'The Gap Trick', icon: '📖', text: 'Donald Shell published this algorithm in 1959, introducing a clever insight: insertion sort works great on nearly-sorted arrays. So what if we pre-sort with larger gaps first, gradually reducing the gap until we do a final pass at gap=1?' },
            { title: 'Shrinking Gaps', icon: '🧠', text: 'Shell Sort starts by comparing elements far apart (large gap), moving misplaced elements quickly across the array. It then progressively reduces the gap using a sequence (Shell used n/2, but Ciura\'s sequence 1,4,10,23,57... is now considered optimal).' },
            { title: 'Gap Sequence Matters', icon: '⭐', text: 'The choice of gap sequence dramatically affects performance. Shell\'s original sequence gives O(n²), Hibbard\'s sequence gives O(n^1.5), and Ciura\'s (2001) sequence gives the best known practical performance but its exact complexity is still unknown!' },
            { title: 'Still Mysterious', icon: '🔬', text: 'Uniquely for a simple algorithm, Shell Sort\'s exact average-case complexity is an open research problem. Mathematicians have been trying to prove the exact bound for 60+ years. Some gaps give O(n log n), but none have been proven.' },
        ],
        funFact: 'Shell Sort\'s exact average-case complexity has been an open mathematical problem for over 60 years — nobody has proven the exact bound for the best gap sequences!',
    },

    tim: {
        name: 'Tim Sort', emoji: '⏱️',
        color: 'from-indigo-500 to-violet-600', glow: '#4f46e5',
        timeWorst: 'O(n log n)', timeBest: 'O(n)', timeAvg: 'O(n log n)',
        space: 'O(n)', stable: true,
        invented: '2002 — Tim Peters',
        useCases: ['General purpose sorting', 'Real-world data (partially sorted)', 'Python built-in sort', 'Java Arrays.sort for objects'],
        notFor: ['Strictly memory-constrained systems', 'Parallel sorting environments'],
        story: [
            { title: 'Born for the Real World', icon: '📖', text: 'Tim Peters invented TimSort in 2002 for Python\'s list.sort(). Unlike academic sorts that assume random input, TimSort was designed for real-world data which is almost always partially sorted. It\'s now in Python, Java, Android, Swift, and Rust.' },
            { title: 'Runs + Merging', icon: '🧠', text: 'TimSort identifies naturally occurring sorted "runs" in the data. These runs are extended to a minimum size using insertion sort, then a sophisticated merge strategy (using a stack and binary insertion) combines them efficiently.' },
            { title: 'Adaptive Genius', icon: '⭐', text: 'On nearly-sorted data, TimSort achieves O(n). On random data, O(n log n). It adapts to the input! For a sorted array of 1M elements, TimSort is about 8× faster than a non-adaptive Merge Sort.' },
            { title: 'The Details', icon: '🔬', text: 'TimSort uses binary insertion sort for small runs (size < 64), a minimum run length between 32 and 64 computed to make merge efficient, and a stability-preserving merge using auxiliary memory. It\'s one of the most carefully engineered sort algorithms ever.' },
        ],
        funFact: 'TimSort is used in Python, Java, Android, Swift, and Rust standard libraries. It was found to have a bug in its merge function in 2015 — discovered by formal verification!',
    },

    tree: {
        name: 'Tree Sort', emoji: '🌳',
        color: 'from-green-500 to-lime-600', glow: '#16a34a',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', timeAvg: 'O(n log n)',
        space: 'O(n)', stable: false,
        invented: '~1960s (BST era)',
        useCases: ['Online sorting (streaming input)', 'Data already needs a BST', 'Priority queue construction', 'Maintaining sorted order dynamically'],
        notFor: ['Memory-constrained systems', 'Highly duplicated values (unbalanced tree)', 'One-time sorting (heap/merge better)'],
        story: [
            { title: 'Sort As You Insert', icon: '📖', text: 'Tree Sort inserts all elements into a Binary Search Tree (BST), then reads them back via in-order traversal. Since BST maintains the property left < root < right, in-order traversal produces a sorted sequence.' },
            { title: 'The Balance Problem', icon: '🧠', text: 'Tree Sort\'s performance depends entirely on the tree\'s shape. For random data, the tree is roughly balanced (O(log n) per insertion = O(n log n) total). For sorted/reverse-sorted input, the tree degenerates into a linked list — O(n) per insertion = O(n²) total!' },
            { title: 'Self-Balancing Fix', icon: '⭐', text: 'This problem is solved with self-balancing BSTs like AVL trees or Red-Black trees, which guarantee O(log n) per operation. Java\'s TreeSet/TreeMap and C++\'s std::set/map use Red-Black trees for guaranteed O(n log n) sorting.' },
            { title: 'When It Shines', icon: '💡', text: 'Tree Sort is ideal when you need to maintain a sorted collection while also inserting/deleting elements dynamically. A database index is essentially a Tree Sort structure — a B-tree that keeps records sorted for fast range queries.' },
        ],
        funFact: 'Database indexes (B-trees) are essentially optimized Tree Sort structures! Every SQL ORDER BY query benefits from tree-sorted indexes.',
    },

    comb: {
        name: 'Comb Sort', emoji: '🔀',
        color: 'from-fuchsia-500 to-purple-600', glow: '#a21caf',
        timeWorst: 'O(n²)', timeBest: 'O(n log n)', timeAvg: 'O(n²/2^p)',
        space: 'O(1)', stable: false,
        invented: '1980 — Włodzimierz Dobosiewicz (published 1991 — Stephen Lacey & Richard Box)',
        useCases: ['Improvement over Bubble Sort', 'Simple implementation needed', 'Cache-friendly in-place sort', 'Medium datasets'],
        notFor: ['Critical performance applications', 'When stable sort is required'],
        story: [
            { title: 'Turtle Problem Solved', icon: '📖', text: 'Bubble Sort\'s worst enemy is "turtles" — small values near the end of the array that move painfully slowly to their correct positions. Comb Sort eliminates this by using a shrink factor (1.3) to jump elements further initially.' },
            { title: 'The Shrink Factor', icon: '🧠', text: 'The gap starts at n and shrinks by dividing by 1.3 each iteration. The magic number 1.3 was empirically determined to be optimal by Lacey and Box after testing thousands of sequences. The gap eventually reaches 1, making it identical to Bubble Sort for final cleanup.' },
            { title: 'Why 1.3?', icon: '🔬', text: 'The shrink factor 1.3 was discovered by analyzing the elimination of turtles statistically. A factor < 1.3 converges too slowly, > 1.3 skips important gap values. At 1.247330... the optimal ratio is apparently related to prime factor properties, though never formally proven.' },
            { title: 'Simple but Effective', icon: '⭐', text: 'Comb Sort is typically 5-10× faster than Bubble Sort on random data while adding only 3 lines of code. It\'s a great example of a simple insight producing dramatic improvement — just change the comparison gap!' },
        ],
        funFact: 'Comb Sort\'s magic shrink factor of 1.3 was discovered empirically by testing thousands of factors. It\'s still not fully understood mathematically why 1.3 is optimal!',
    },

    cycle: {
        name: 'Cycle Sort', emoji: '🔁',
        color: 'from-orange-500 to-red-600', glow: '#c2410c',
        timeWorst: 'O(n²)', timeBest: 'O(n²)', timeAvg: 'O(n²)',
        space: 'O(1)', stable: false,
        invented: '~1990s',
        useCases: ['Flash/EEPROM memory (minimize writes)', 'Embedded systems with write-limited storage', 'Theoretical minimum write analysis', 'NAND flash optimization'],
        notFor: ['General purpose sorting (slow)', 'Large datasets', 'When write count does not matter'],
        story: [
            { title: 'Write-Optimal By Design', icon: '📖', text: 'Cycle Sort is the only comparison-based sorting algorithm proven to achieve the theoretical minimum number of memory writes. Every element is written at most once — directly to its final sorted position. No other sort can guarantee fewer writes.' },
            { title: 'Decomposing into Cycles', icon: '🧠', text: 'The algorithm works by finding "cycles" in the permutation of elements. A cycle is a group of elements that rotate into each other\'s positions. For each cycle, elements are rotated once, placing each at its destination in one write operation.' },
            { title: 'Flash Memory Use Case', icon: '⭐', text: 'In NAND flash memory (used in SSDs, USB drives, phones), each memory cell can only be written a finite number of times (~100,000 writes). Cycle Sort minimizes these "program/erase" cycles, directly extending hardware lifespan.' },
            { title: 'The Trade-off', icon: '⚠️', text: 'To achieve minimum writes, Cycle Sort must make many comparisons — O(n²) comparisons to find where each element belongs. So it\'s slow in terms of comparisons but optimal in terms of writes. A specialized tool for a specific constraint.' },
        ],
        funFact: 'Cycle Sort is the ONLY sorting algorithm proven to achieve the theoretical minimum number of memory writes. It\'s used in flash storage algorithms to extend SSD lifespan!',
    },

    bitonic: {
        name: 'Bitonic Sort', emoji: '⚡',
        color: 'from-purple-600 to-indigo-700', glow: '#7c3aed',
        timeWorst: 'O(n log² n)', timeBest: 'O(n log² n)', timeAvg: 'O(n log² n)',
        space: 'O(log² n)', stable: false,
        invented: '1968 — Ken Batcher',
        useCases: ['GPU parallel sorting', 'FPGA hardware implementation', 'Network sorting (all comparisons predetermined)', 'Parallel computing pipelines'],
        notFor: ['Sequential CPU sorting (worse than quick/merge)', 'Non-power-of-2 input sizes (needs padding)', 'Single-threaded applications'],
        story: [
            { title: 'Born for Parallelism', icon: '📖', text: 'Ken Batcher invented Bitonic Sort in 1968 as a "sorting network" — a fixed circuit of comparators that can sort any input. Unlike algorithms that branch based on values, it processes every element pair in a predetermined pattern, perfect for hardware.' },
            { title: 'The Bitonic Sequence', icon: '🧠', text: 'A bitonic sequence is one that first increases then decreases (like a mountain). Bitonic Sort constructs and merges bitonic sequences: first sort half in ascending, half in descending order (creating a bitonic sequence), then merge. Repeat recursively.' },
            { title: 'GPU Superpower', icon: '⭐', text: 'Modern GPUs can execute thousands of comparisons in parallel. Bitonic Sort\'s comparison pattern maps perfectly to GPU warps — all comparators at each "stage" can execute simultaneously. On a GPU with 1024 cores, it\'s orders of magnitude faster than CPU sorting.' },
            { title: 'Networking Hardware', icon: '💡', text: 'Bitonic Sort is used to design actual sorting hardware — FPGA circuits where each wireconnection is a comparator-swap unit. No branching means no clock cycles wasted on mispredicted branches, critical for real-time network packet routing.' },
        ],
        funFact: 'Bitonic Sort is used in NVIDIA CUDA and GPU sorting libraries because its fixed comparison pattern maps perfectly to thousands of parallel GPU cores!',
    },

    pancake: {
        name: 'Pancake Sort', emoji: '🥞',
        color: 'from-yellow-500 to-amber-600', glow: '#ca8a04',
        timeWorst: 'O(n²)', timeBest: 'O(n)', timeAvg: 'O(n²)',
        space: 'O(1)', stable: false,
        invented: '1975 — Jacob Goodman (as "permutation problem")',
        useCases: ['Pancake flipping puzzle', 'Gene sequence rearrangement', 'Robotic sorting with limited operations', 'Theoretical computer science'],
        notFor: ['Practical general-purpose sorting', 'Performance-critical code', 'Any production environment'],
        story: [
            { title: 'The Pancake Problem', icon: '📖', text: 'The pancake problem was posed in 1975 by mathematician Jacob Goodman. Imagine a stack of pancakes of different sizes. You have only one operation: insert a spatula anywhere and flip all pancakes above it. How many flips to sort them by size?' },
            { title: 'The Flip Operation', icon: '🧠', text: 'Pancake Sort uses only prefix reversals. To place the largest unsorted pancake: first flip to bring it to the top (1 flip), then flip everything down to its destination (1 flip). This is 2 flips per element, giving at most 2n flips total.' },
            { title: 'The Famous Student', icon: '⭐', text: 'The most famous paper on pancake sorting was written by Bill Gates and Christos Papadimitriou in 1979 — before Microsoft\'s success. It\'s Gates\' only academic publication! They proved the upper bound for pancake sorting is 5(n+5)/3 flips.' },
            { title: 'Gene Rearrangement', icon: '🧬', text: 'Pancake Sort has real applications in computational biology! Genomes evolve through "chromosome inversions" which are exactly prefix reversals. Computing the pancake distance between two gene sequences measures evolutionary distance between species.' },
        ],
        funFact: 'Bill Gates co-authored a 1979 academic paper on Pancake Sort — his only scientific publication! Pancake sorting also models chromosome evolution in computational biology.',
    },

    strand: {
        name: 'Strand Sort', emoji: '🧵',
        color: 'from-cyan-600 to-teal-500', glow: '#0e7490',
        timeWorst: 'O(n²)', timeBest: 'O(n)', timeAvg: 'O(n²)',
        space: 'O(n)', stable: true,
        invented: '~1963 — attributed to various',
        useCases: ['Nearly-sorted linked lists', 'Online sorting of streaming data', 'Educational demonstration', 'Data that arrives in sorted chunks'],
        notFor: ['Random data (quadratic time)', 'Memory-constrained environments', 'General purpose sorting'],
        story: [
            { title: 'Pulling Threads', icon: '📖', text: 'Strand Sort works by repeatedly "pulling" naturally sorted subsequences ("strands") from the input and merging them into the output. Each pass extracts the longest strand starting from the front of the remaining input.' },
            { title: 'The Strand Pull', icon: '🧠', text: 'Start with the first element. Walk through the array; whenever an element is ≥ the last element in your strand, pull it out. After one pass, you have a sorted strand. Merge it with the growing sorted output. Repeat until the array is empty.' },
            { title: 'Adaptive to Order', icon: '⭐', text: 'On already-sorted data, Strand Sort extracts one strand covering the entire array in O(n) — then it\'s done! On reverse-sorted data, it extracts n strands of length 1, requiring n merges — O(n²). It naturally adapts to preexisting order.' },
            { title: 'Linked List Hero', icon: '💡', text: 'Strand Sort is particularly efficient on linked lists since pulling elements and merging are O(1) operations per element on linked lists. Many early computer systems stored data as linked lists, making Strand Sort historically practical.' },
        ],
        funFact: 'Strand Sort achieves true O(n) on already-sorted data! On linked lists with naturally sorted chunks (common in streaming data), it outperforms all O(n log n) algorithms.',
    },

    pigeonhole: {
        name: 'Pigeonhole Sort', emoji: '🕊️',
        color: 'from-rose-500 to-pink-600', glow: '#e11d48',
        timeWorst: 'O(n+k)', timeBest: 'O(n+k)', timeAvg: 'O(n+k)',
        space: 'O(k)', stable: true,
        invented: '~1954, based on Pigeonhole Principle',
        useCases: ['When n ≈ k (range ≈ count)', 'Small integer key ranges', 'Duplicate-heavy datasets', 'Age/score/rating sorting'],
        notFor: ['Large key ranges (k >> n)', 'Non-integer values', 'When memory is limited'],
        story: [
            { title: 'The Hole & The Bird', icon: '📖', text: 'The Pigeonhole Principle (Dirichlet\'s drawer principle — 1834) states: if n items go into k containers and n > k, at least one container has multiple items. Pigeonhole Sort uses this insight — create k containers (holes) and drop each element into its hole.' },
            { title: 'Direct Placement', icon: '🧠', text: 'Unlike Counting Sort which just counts, Pigeonhole Sort actually places values in holes. Each "hole" is a slot for one value. After distributing all n elements, read the holes left-to-right — collecting elements in sorted order. Simple and elegant.' },
            { title: 'Integer Range Constraint', icon: '⚠️', text: 'Pigeonhole Sort only works when the key range k is reasonable. Sorting 100 numbers from 1–100? Perfect. Sorting 100 numbers from 1–1,000,000? That\'s 999,900 empty holes — wasteful. When k ≈ n, it\'s O(n). When k >> n, memory becomes the bottleneck.' },
            { title: 'Difference from Counting', icon: '🔬', text: 'Pigeonhole Sort places items into actual buckets (like a list per bucket), while Counting Sort uses prefix sums to compute positions. Pigeonhole Sort naturally handles multiple items per value with trivial implementation, while Counting Sort requires the prefix sum step.' },
        ],
        funFact: 'Pigeonhole Sort is based on a 1834 mathematical principle by Dirichlet! When the value range exactly equals the count (n = k), it\'s as fast as any O(n) algorithm can be.',
    },

    intro: {
        name: 'Introsort', emoji: '🧠',
        color: 'from-red-700 to-orange-600', glow: '#b91c1c',
        timeWorst: 'O(n log n)', timeBest: 'O(n log n)', timeAvg: 'O(n log n)',
        space: 'O(log n)', stable: false,
        invented: '1997 — David Musser',
        useCases: ['General purpose sorting (default choice)', 'C++ std::sort()', 'Large datasets', 'Unknown input distribution'],
        notFor: ['Stable sort requirements', 'When guaranteed cache-friendly behavior needed', 'Embedded systems with limited stack'],
        story: [
            { title: 'The Best of Three', icon: '📖', text: 'Introsort was invented by David Musser in 1997 as the ultimate practical sorting algorithm. It combines Quick Sort\'s average-case speed, Heap Sort\'s worst-case guarantee, and Insertion Sort\'s efficiency on small arrays — getting the best of all three.' },
            { title: 'Switching Strategy', icon: '🧠', text: 'Start with Quick Sort. If the recursion depth exceeds 2⌊log₂n⌋, switch to Heap Sort (avoiding Quick Sort\'s O(n²) worst case). If the partition size drops below 16, switch to Insertion Sort (avoiding Quick Sort\'s overhead for tiny arrays). Smart adaption!' },
            { title: 'C++ std::sort', icon: '⭐', text: 'Introsort is the actual algorithm behind C++\'s std::sort(). Every C++ program that calls sort() is running Introsort. This makes it arguably the most executed sorting algorithm in the world — millions of programs rely on it daily.' },
            { title: 'Why Not Just Merge Sort?', icon: '🔬', text: 'Merge Sort guarantees O(n log n) and is stable — so why use Introsort? Cache performance. Quick Sort operates on data in-place with good spatial locality; Merge Sort allocates O(n) extra memory causing cache misses. In practice, Introsort is 2-3× faster than Merge Sort.' },
        ],
        funFact: 'Introsort IS C++\'s std::sort()! It runs in billions of programs daily. David Musser invented it to eliminate Quick Sort\'s O(n²) worst case while keeping its practical speed.',
    },

    block: {
        name: 'Block Sort', emoji: '🧱',
        color: 'from-slate-500 to-gray-600', glow: '#475569',
        timeWorst: 'O(n log n)', timeBest: 'O(n)', timeAvg: 'O(n log n)',
        space: 'O(1)', stable: true,
        invented: '2008 — Kim Walisch & arXiv (refined)',
        useCases: ['When stable + O(1) space needed', 'In-place Merge Sort replacement', 'Embedded systems needing stability', 'Cache-efficient large datasets'],
        notFor: ['Simple implementations (very complex code)', 'When Merge Sort\'s O(n) space is acceptable', 'Small arrays'],
        story: [
            { title: 'The Holy Grail', icon: '📖', text: 'Block Sort (also called WikiSort) achieves what many thought impossible: a stable, in-place O(n log n) sort. For decades, the sorting algorithm community sought an algorithm that was stable (preserves equal elements\' order) without needing extra memory. Block Sort delivers.' },
            { title: 'The Block Trick', icon: '🧠', text: 'The algorithm divides the array into √n blocks. It uses the first √n elements as internal buffer (temporarily storing values). These buffers enable an efficient in-place merge without allocating memory — the critical innovation that makes it work.' },
            { title: 'WikiSort\'s Origin', icon: '⭐', text: 'The modern implementation called WikiSort was published on GitHub in 2014 by BonzaiThePenguin. It became famous as one of the first publicly available, thoroughly tested implementations, attracting attention from the sorting algorithm community worldwide.' },
            { title: 'Engineering Marvel', icon: '🔬', text: 'Block Sort\'s implementation is extremely complex — much harder than Merge Sort or TimSort. Its practical use is limited by this complexity, but it proves a fundamental theoretical result: stable in-place O(n log n) sorting is achievable. It\'s a triumph of algorithm design.' },
        ],
        funFact: 'Block Sort (WikiSort) achieves the impossible: stable + O(1) space + O(n log n) time. For 30 years, computer scientists debated if this was possible. It is!',
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
    counting: 'Always O(n+k) — single counting pass over n elements',
    bucket: 'Uniform data — all buckets filled evenly, each sorts in O(1)',
    shell: 'Nearly-sorted input — gaps produce minimal swaps',
    tim: 'Array already sorted — one O(n) pass detects all runs',
    tree: 'Random input — balanced BST gives O(log n) per insertion',
    comb: 'Already nearly sorted — large gaps make no swaps needed',
    cycle: 'Always O(n²) — cycle finding always scans full array',
    bitonic: 'Always the same fixed network — O(n log² n)',
    pancake: 'Nearly sorted — very few prefix flips needed',
    strand: 'Already sorted — one strand covers entire array',
    pigeonhole: 'Always O(n+k) — a single counting pass is always needed',
    intro: 'Quicksort with perfect pivots — O(n log n) throughout',
    block: 'Pre-sorted runs minimize the merge phase',
};
const AVG_MEANING = {
    bubble: 'Random array — quadratic comparisons on average',
    selection: 'Same as worst: always n²/2 comparisons',
    insertion: 'Each element shifts halfway through sorted portion',
    merge: 'Always the same — divide log n levels, merge n per level',
    quick: 'Random pivot divides roughly in half on average',
    heap: 'Always the same — heapify is O(log n) per element',
    radix: 'k digit passes, each O(n) — total O(nk)',
    counting: 'Always O(n+k) — counting pass + placement pass',
    bucket: 'Uniform data — O(n+k) total across all buckets',
    shell: 'Ciura gap sequence gives ~O(n log²n) in practice',
    tim: 'Real-world data has runs — merge overhead is minimal',
    tree: 'Roughly balanced BST — O(n log n) average case',
    comb: 'Shrinking gaps eliminate most turtles — better than bubble',
    cycle: 'Always O(n²) — no variability possible',
    bitonic: 'Always identical — deterministic sorting network',
    pancake: 'Random array — ~2n flips on average',
    strand: 'Partially sorted — multiple strands extracted per pass',
    pigeonhole: 'Always O(n+k) — no variability based on input order',
    intro: 'Quicksort with depth limit — consistent O(n log n)',
    block: 'O(n log n) merges — adapts to existing runs in data',
};
const WORST_MEANING = {
    bubble: 'Reverse-sorted array — maximum possible swaps',
    selection: 'Same as best: always n(n-1)/2 comparisons',
    insertion: 'Reverse-sorted — every element shifts all the way',
    merge: 'Same as best — always log n levels of merging',
    quick: 'Always-minimum pivot (e.g. sorted array) — degrades to O(n²)',
    heap: 'Same as best — always O(n log n) by heap structure',
    radix: 'k digit passes of counting sort — still O(nk)',
    counting: 'Large k (value range) — O(n+k) with big k',
    bucket: 'All elements fall into one bucket — degrades to insertion sort',
    shell: 'Bad gap sequence — O(n²) comparisons',
    tim: 'Random data with no runs — full merge sort overhead',
    tree: 'Sorted/reverse-sorted input — degenerate linked-list tree',
    comb: 'Many turtles persist — final bubble sort phase is long',
    cycle: 'Always O(n²) — position-finding scan for every element',
    bitonic: 'Always the same — always O(n log² n)',
    pancake: 'Reverse-sorted — maximum flips needed per element',
    strand: 'Reverse-sorted — n strands of length 1, n merges needed',
    pigeonhole: 'Large k range — still O(n+k) but k dominates memory',
    intro: 'Falls back to heapsort — guaranteed O(n log n) worst case',
    block: 'Fully random — all block merges required, O(n log n)',
};
