/**
 * Merge Sort
 * Records every comparison and placement step for playback.
 */
export function mergeSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;

  function _merge(arr, l, m, r) {
    const left  = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      comparisons++;
      steps.push({ type: 'compare', indices: [l + i, m + 1 + j], array: [...arr] });
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
        swaps++;
      }
      steps.push({ type: 'swap', indices: [k - 1], array: [...arr] });
    }
    while (i < left.length) { arr[k++] = left[i++]; steps.push({ type: 'swap', indices: [k - 1], array: [...arr] }); }
    while (j < right.length) { arr[k++] = right[j++]; steps.push({ type: 'swap', indices: [k - 1], array: [...arr] }); }
  }

  function _mergeSort(arr, l, r) {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    _mergeSort(arr, l, m);
    _mergeSort(arr, m + 1, r);
    _merge(arr, l, m, r);
  }

  _mergeSort(arr, 0, arr.length - 1);
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
