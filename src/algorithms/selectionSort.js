/**
 * Selection Sort
 * Records every comparison and swap step for playback.
 */
export function selectionSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [minIdx, j], array: [...arr] });
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      swaps++;
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({ type: 'swap', indices: [i, minIdx], array: [...arr] });
    }
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'sorted', indices: [n - 1], array: [...arr] });
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
