/**
 * Shell Sort
 * Records every comparison and swap step for playback.
 */
export function shellSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  // Ciura's gap sequence
  const gaps = [701, 301, 132, 57, 23, 10, 4, 1].filter(g => g < n);
  if (gaps[gaps.length - 1] !== 1) gaps.push(1);

  for (const gap of gaps) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      steps.push({ type: 'compare', indices: [i, Math.max(0, i - gap)], array: [...arr] });
      comparisons++;
      while (j >= gap && arr[j - gap] > temp) {
        comparisons++;
        swaps++;
        arr[j] = arr[j - gap];
        steps.push({ type: 'swap', indices: [j, j - gap], array: [...arr] });
        j -= gap;
      }
      arr[j] = temp;
      if (j !== i) {
        steps.push({ type: 'compare', indices: [j], array: [...arr] });
      }
    }
  }

  // Mark all sorted
  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
