/**
 * Block Sort (simplified — insertion sort on blocks + merge)
 * Records every comparison and swap step for playback.
 */
export function blockSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;
  const blockSize = Math.max(1, Math.floor(Math.sqrt(n)));

  function insertionSort(lo, hi) {
    for (let i = lo + 1; i <= hi; i++) {
      const key = arr[i];
      let j = i - 1;
      steps.push({ type: 'compare', indices: [i, j], array: [...arr] });
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

  function merge(lo, mid, hi) {
    const left = arr.slice(lo, mid + 1);
    const right = arr.slice(mid + 1, hi + 1);
    let i = 0, j = 0, k = lo;
    while (i < left.length && j < right.length) {
      comparisons++;
      steps.push({ type: 'compare', indices: [lo + i, mid + 1 + j], array: [...arr] });
      if (left[i] <= right[j]) { arr[k++] = left[i++]; }
      else { arr[k++] = right[j++]; }
      swaps++;
      steps.push({ type: 'swap', indices: [k - 1], array: [...arr] });
    }
    while (i < left.length) { arr[k++] = left[i++]; swaps++; steps.push({ type: 'swap', indices: [k - 1], array: [...arr] }); }
    while (j < right.length) { arr[k++] = right[j++]; swaps++; steps.push({ type: 'swap', indices: [k - 1], array: [...arr] }); }
  }

  // Sort blocks
  for (let i = 0; i < n; i += blockSize) {
    insertionSort(i, Math.min(i + blockSize - 1, n - 1));
  }

  // Merge blocks
  for (let size = blockSize; size < n; size *= 2) {
    for (let lo = 0; lo < n; lo += 2 * size) {
      const mid = Math.min(lo + size - 1, n - 1);
      const hi = Math.min(lo + 2 * size - 1, n - 1);
      if (mid < hi) merge(lo, mid, hi);
    }
  }

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
