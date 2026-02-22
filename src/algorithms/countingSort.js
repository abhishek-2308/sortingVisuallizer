/**
 * Counting Sort
 * Records every placement step for playback.
 */
export function countingSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  const output = new Array(n);

  // Count occurrences
  for (let i = 0; i < n; i++) {
    comparisons++;
    count[arr[i] - min]++;
    steps.push({ type: 'compare', indices: [i], array: [...arr] });
  }

  // Prefix sums
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Build output array
  for (let i = n - 1; i >= 0; i--) {
    output[--count[arr[i] - min]] = arr[i];
    swaps++;
  }

  // Copy back with animation
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    swaps++;
    steps.push({ type: 'swap', indices: [i], array: [...arr] });
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }

  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
