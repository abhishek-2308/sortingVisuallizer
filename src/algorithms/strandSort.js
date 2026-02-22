/**
 * Strand Sort
 * Records every comparison and merge step for playback.
 */
export function strandSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;

  let input = [...arr];
  let output = [];

  while (input.length > 0) {
    const sublist = [input[0]];
    const remaining = [];

    for (let i = 1; i < input.length; i++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [i, i - 1], array: [...input, ...output] });
      if (input[i] >= sublist[sublist.length - 1]) {
        sublist.push(input[i]);
      } else {
        remaining.push(input[i]);
      }
    }

    // Merge sublist with output
    const merged = [];
    let i = 0, j = 0;
    while (i < output.length && j < sublist.length) {
      comparisons++;
      if (output[i] <= sublist[j]) {
        merged.push(output[i++]);
      } else {
        merged.push(sublist[j++]);
      }
      swaps++;
    }
    while (i < output.length) merged.push(output[i++]);
    while (j < sublist.length) merged.push(sublist[j++]);

    output = merged;
    input = remaining;

    // Animate current state
    const current = [...output, ...input];
    for (let k = 0; k < output.length; k++) {
      steps.push({ type: 'sorted', indices: [k], array: [...current] });
    }
  }

  // Final animation
  for (let i = 0; i < output.length; i++) {
    steps.push({ type: 'swap', indices: [i], array: [...output] });
  }
  steps.push({ type: 'done', indices: [], array: [...output] });
  return { steps, comparisons, swaps };
}
