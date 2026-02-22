/**
 * Tree Sort (BST-based)
 * Records insertion and in-order traversal steps.
 */
export function treeSort(array) {
  const arr = [...array];
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const n = arr.length;

  // Simple BST node
  class Node {
    constructor(val) { this.val = val; this.left = null; this.right = null; }
  }

  function insert(root, val) {
    if (!root) return new Node(val);
    comparisons++;
    if (val < root.val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);
    return root;
  }

  function inorder(root, result) {
    if (!root) return;
    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
  }

  // Build BST
  let root = null;
  for (let i = 0; i < n; i++) {
    steps.push({ type: 'compare', indices: [i], array: [...arr] });
    root = insert(root, arr[i]);
  }

  // In-order traversal
  const sorted = [];
  inorder(root, sorted);

  // Animate placement
  for (let i = 0; i < n; i++) {
    arr[i] = sorted[i];
    swaps++;
    steps.push({ type: 'swap', indices: [i], array: [...arr] });
    steps.push({ type: 'sorted', indices: [i], array: [...arr] });
  }

  steps.push({ type: 'done', indices: [], array: [...arr] });
  return { steps, comparisons, swaps };
}
