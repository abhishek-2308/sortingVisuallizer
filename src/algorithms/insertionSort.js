/**
 * Insertion Sort
 * Records every comparison and swap step for playback.
 */
export function insertionSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0) {
      comparisons++;
      steps.push({ type: 'compare', indices: [j - 1, j], array: [...arr] });
      if (arr[j] < arr[j - 1]) {
        swaps++;
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        steps.push({ type: 'swap', indices: [j, j - 1], array: [...arr] });
        j--;
      } else {
        break;
      }
    }
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
