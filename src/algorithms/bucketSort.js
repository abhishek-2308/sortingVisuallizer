/**
 * Bucket Sort
 * Records every comparison and placement step for playback.
 */
export function bucketSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  if (n <= 1) {
    steps.push({ type: 'done', indices: [], array: [...arr] });
    return { steps, comparisons, swaps };
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketCount = Math.max(1, Math.floor(Math.sqrt(n)));
  const range = max - min + 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let i = 0; i < n; i++) {
    comparisons++;
    const bucketIdx = Math.min(
      Math.floor(((arr[i] - min) / range) * bucketCount),
      bucketCount - 1
    );
    buckets[bucketIdx].push(arr[i]);
    steps.push({ type: 'compare', indices: [i], array: [...arr] });
  }

  // Sort each bucket (insertion sort) and place back
  let idx = 0;
  for (let b = 0; b < bucketCount; b++) {
    const bucket = buckets[b];
    // Insertion sort within bucket
    for (let i = 1; i < bucket.length; i++) {
      const key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        comparisons++;
        bucket[j + 1] = bucket[j];
        j--;
        swaps++;
      }
      bucket[j + 1] = key;
    }
    // Place back
    for (let i = 0; i < bucket.length; i++) {
      arr[idx] = bucket[i];
      swaps++;
      steps.push({ type: 'swap', indices: [idx], array: [...arr] });
      steps.push({ type: 'sorted', indices: [idx], array: [...arr] });
      idx++;
    }
  }

  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
