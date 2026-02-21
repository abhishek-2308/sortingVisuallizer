/**
 * Radix Sort (LSD, base 10)
 * Records every placement step for playback.
 */
export function radixSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;

  function _countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count  = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
    }
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[--count[digit]] = arr[i];
      comparisons++;
    }

    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
      swaps++;
      steps.push({ type: 'swap', indices: [i], array: [...arr] });
    }
  }

  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    _countingSort(arr, exp);
  }

  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
