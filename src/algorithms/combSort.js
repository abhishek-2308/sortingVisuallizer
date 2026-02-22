/**
 * Comb Sort
 * Records every comparison and swap step for playback.
 */
export function combSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  let gap = n;
  let sorted = false;
  const SHRINK = 1.3;

  while (!sorted) {
    gap = Math.floor(gap / SHRINK);
    if (gap <= 1) { gap = 1; sorted = true; }

    for (let i = 0; i + gap < n; i++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [i, i + gap], array: [...arr] });
      if (arr[i] > arr[i + gap]) {
        swaps++;
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        steps.push({ type: 'swap', indices: [i, i + gap], array: [...arr] });
        sorted = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
