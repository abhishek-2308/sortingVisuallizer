/**
 * Bubble Sort
 * Records every comparison and swap step for playback.
 * @param {number[]} array
 * @returns {{ steps: Array, comparisons: number, swaps: number }}
 */
export function bubbleSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [j, j + 1], array: [...arr] });

      if (arr[j] > arr[j + 1]) {
        swaps++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ type: 'swap', indices: [j, j + 1], array: [...arr] });
      }
    }
    steps.push({ type: 'sorted', indices: [n - 1 - i], array: [...arr] });
  }
  steps.push({ type: 'sorted', indices: [0], array: [...arr] });
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
