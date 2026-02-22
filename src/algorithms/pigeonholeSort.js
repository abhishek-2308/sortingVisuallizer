/**
 * Pigeonhole Sort
 * Records every placement step for playback.
 */
export function pigeonholeSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const holes = new Array(range).fill(0);

  // Fill holes
  for (let i = 0; i < n; i++) {
    comparisons++;
    steps.push({ type: 'compare', indices: [i], array: [...arr] });
    holes[arr[i] - min]++;
  }

  // Put elements back
  let idx = 0;
  for (let h = 0; h < range; h++) {
    while (holes[h]-- > 0) {
      arr[idx] = h + min;
      swaps++;
      steps.push({ type: 'swap', indices: [idx], array: [...arr] });
      steps.push({ type: 'sorted', indices: [idx], array: [...arr] });
      idx++;
    }
  }

  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
