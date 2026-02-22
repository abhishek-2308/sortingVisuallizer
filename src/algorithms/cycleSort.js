/**
 * Cycle Sort
 * Records every comparison and write step for playback.
 */
export function cycleSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];

    // Find position of item
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < n; i++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [cycleStart, i], array: [...arr] });
      if (arr[i] < item) pos++;
    }

    if (pos === cycleStart) continue;

    // Skip duplicates
    while (item === arr[pos]) pos++;

    // Put item to its right pos
    if (pos !== cycleStart) {
      swaps++;
      [arr[pos], item] = [item, arr[pos]];
      steps.push({ type: 'swap', indices: [pos, cycleStart], array: [...arr] });
    }

    // Rotate the rest
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        comparisons++;
        if (arr[i] < item) pos++;
      }
      while (item === arr[pos]) pos++;
      if (item !== arr[pos]) {
        swaps++;
        [arr[pos], item] = [item, arr[pos]];
        steps.push({ type: 'swap', indices: [pos, cycleStart], array: [...arr] });
      }
    }
  }

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
