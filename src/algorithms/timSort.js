/**
 * Tim Sort (simplified — insertion sort for small runs + merge)
 * Records every comparison and swap step for playback.
 */
export function timSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;
  const RUN = 32;

  function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
      const temp = arr[i];
      let j = i - 1;
      steps.push({ type: 'compare', indices: [i, j < left ? left : j], array: [...arr] });
      comparisons++;
      while (j >= left && arr[j] > temp) {
        comparisons++;
        swaps++;
        arr[j + 1] = arr[j];
        steps.push({ type: 'swap', indices: [j + 1, j], array: [...arr] });
        j--;
      }
      arr[j + 1] = temp;
    }
  }

  function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;
    while (i < leftArr.length && j < rightArr.length) {
      comparisons++;
      steps.push({ type: 'compare', indices: [left + i, mid + 1 + j], array: [...arr] });
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i++];
      } else {
        arr[k] = rightArr[j++];
      }
      swaps++;
      steps.push({ type: 'swap', indices: [k], array: [...arr] });
      k++;
    }
    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
      swaps++;
      steps.push({ type: 'swap', indices: [k - 1], array: [...arr] });
    }
    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
      swaps++;
      steps.push({ type: 'swap', indices: [k - 1], array: [...arr] });
    }
  }

  // Sort individual runs
  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));
  }

  // Merge runs
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) merge(arr, left, mid, right);
    }
  }

  for (let i = 0; i < n; i++) {
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }
  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
