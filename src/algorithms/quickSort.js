/**
 * Quick Sort
 * Records every comparison and swap step for playback.
 */
export function quickSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;

  function _partition(arr, low, high) {
    const pivot = arr[high];
    steps.push({ type: 'pivot', indices: [high], array: [...arr] });
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      steps.push({ type: 'compare', indices: [j, high], array: [...arr] });
      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          swaps++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          steps.push({ type: 'swap', indices: [i, j], array: [...arr] });
        }
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({ type: 'sorted', indices: [i + 1], array: [...arr] });
    return i + 1;
  }

  function _quickSort(arr, low, high) {
    if (low < high) {
      const pi = _partition(arr, low, high);
      _quickSort(arr, low, pi - 1);
      _quickSort(arr, pi + 1, high);
    }
  }

  _quickSort(arr, 0, arr.length - 1);
  steps.push({ type: 'done', indices: [], array: [...arr] });

  return { steps, comparisons, swaps };
}
