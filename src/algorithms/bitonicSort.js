/**
 * Bitonic Sort (iterative, pads array to power of 2)
 * Records every comparison and swap step for playback.
 */
export function bitonicSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  // Pad to power of 2
  const maxVal = Math.max(...arr) + 1;
  let size = 1;
  while (size < n) size <<= 1;
  while (arr.length < size) arr.push(maxVal + arr.length);

  function compAndSwap(i, j, dir) {
    comparisons++;
    steps.push({ type: 'compare', indices: [Math.min(i, n - 1), Math.min(j, n - 1)], array: arr.slice(0, n) });
    if ((arr[i] > arr[j]) === dir) {
      swaps++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      steps.push({ type: 'swap', indices: [Math.min(i, n - 1), Math.min(j, n - 1)], array: arr.slice(0, n) });
    }
  }

  function bitonicMerge(lo, cnt, dir) {
    if (cnt > 1) {
      const k = cnt >> 1;
      for (let i = lo; i < lo + k; i++) compAndSwap(i, i + k, dir);
      bitonicMerge(lo, k, dir);
      bitonicMerge(lo + k, k, dir);
    }
  }

  function bitonicSortHelper(lo, cnt, dir) {
    if (cnt > 1) {
      const k = cnt >> 1;
      bitonicSortHelper(lo, k, true);
      bitonicSortHelper(lo + k, k, false);
      bitonicMerge(lo, cnt, dir);
    }
  }

  bitonicSortHelper(0, size, true);

  // Trim back to original length
  arr.length = n;

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
