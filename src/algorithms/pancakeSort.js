/**
 * Pancake Sort
 * Records every comparison and flip step for playback.
 */
export function pancakeSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  function flip(k) {
    let start = 0, end = k;
    while (start < end) {
      swaps++;
      [arr[start], arr[end]] = [arr[end], arr[start]];
      steps.push({ type: 'swap', indices: [start, end], array: [...arr] });
      start++;
      end--;
    }
  }

  function findMax(k) {
    let maxIdx = 0;
    for (let i = 1; i <= k; i++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [i, maxIdx], array: [...arr] });
      if (arr[i] > arr[maxIdx]) maxIdx = i;
    }
    return maxIdx;
  }

  for (let size = n - 1; size > 0; size--) {
    const maxIdx = findMax(size);
    if (maxIdx !== size) {
      if (maxIdx !== 0) flip(maxIdx);
      flip(size);
    }
    steps.push({ type: 'sorted', indices: [size], array: [...arr] });
  }
  steps.push({ type: 'sorted', indices: [0], array: [...arr] });
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
