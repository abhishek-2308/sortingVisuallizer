/**
 * Introsort (Quick Sort + Heap Sort fallback + Insertion Sort for small arrays)
 * Records every comparison and swap step for playback.
 */
export function introSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;
  const maxDepth = Math.floor(2 * Math.log2(n || 1));

  function insertionSort(lo, hi) {
    for (let i = lo + 1; i <= hi; i++) {
      const key = arr[i];
      let j = i - 1;
      steps.push({ type: 'compare', indices: [i, Math.max(lo, j)], array: [...arr] });
      comparisons++;
      while (j >= lo && arr[j] > key) {
        comparisons++;
        swaps++;
        arr[j + 1] = arr[j];
        steps.push({ type: 'swap', indices: [j + 1, j], array: [...arr] });
        j--;
      }
      arr[j + 1] = key;
    }
  }

  function heapify(n, i, offset) {
    let largest = i;
    const l = 2 * i + 1, r = 2 * i + 2;
    if (l < n) { comparisons++; if (arr[offset + l] > arr[offset + largest]) largest = l; }
    if (r < n) { comparisons++; if (arr[offset + r] > arr[offset + largest]) largest = r; }
    if (largest !== i) {
      swaps++;
      [arr[offset + i], arr[offset + largest]] = [arr[offset + largest], arr[offset + i]];
      steps.push({ type: 'swap', indices: [offset + i, offset + largest], array: [...arr] });
      heapify(n, largest, offset);
    }
  }

  function heapSort(lo, hi) {
    const size = hi - lo + 1;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) heapify(size, i, lo);
    for (let i = size - 1; i > 0; i--) {
      swaps++;
      [arr[lo], arr[lo + i]] = [arr[lo + i], arr[lo]];
      steps.push({ type: 'swap', indices: [lo, lo + i], array: [...arr] });
      steps.push({ type: 'sorted', indices: [lo + i], array: [...arr] });
      heapify(i, 0, lo);
    }
  }

  function partition(lo, hi) {
    const pivot = arr[hi];
    steps.push({ type: 'pivot', indices: [hi], array: [...arr] });
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [j, hi], array: [...arr] });
      if (arr[j] <= pivot) {
        i++;
        swaps++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push({ type: 'swap', indices: [i, j], array: [...arr] });
      }
    }
    swaps++;
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
    steps.push({ type: 'swap', indices: [i + 1, hi], array: [...arr] });
    return i + 1;
  }

  function introsortHelper(lo, hi, depth) {
    const size = hi - lo + 1;
    if (size < 16) { insertionSort(lo, hi); return; }
    if (depth === 0) { heapSort(lo, hi); return; }
    const p = partition(lo, hi);
    steps.push({ type: 'sorted', indices: [p], array: [...arr] });
    introsortHelper(lo, p - 1, depth - 1);
    introsortHelper(p + 1, hi, depth - 1);
  }

  introsortHelper(0, n - 1, maxDepth);

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
