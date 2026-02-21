/**
 * Heap Sort
 * Records every comparison and swap step for playback.
 */
export function heapSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  function _heapify(arr, n, i) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < n) {
      comparisons++;
      steps.push({ type: 'compare', indices: [l, largest], array: [...arr] });
      if (arr[l] > arr[largest]) largest = l;
    }
    if (r < n) {
      comparisons++;
      steps.push({ type: 'compare', indices: [r, largest], array: [...arr] });
      if (arr[r] > arr[largest]) largest = r;
    }
    if (largest !== i) {
      swaps++;
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push({ type: 'swap', indices: [i, largest], array: [...arr] });
      _heapify(arr, n, largest);
    }
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    _heapify(arr, n, i);
  }

  // Extract elements
  for (let i = n - 1; i > 0; i--) {
    swaps++;
    [arr[0], arr[i]] = [arr[i], arr[0]];
    steps.push({ type: 'swap', indices: [0, i], array: [...arr] });
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
    _heapify(arr, i, 0);
  }
  steps.push({ type: 'sorted', indices: [0], array: [...arr] });
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
