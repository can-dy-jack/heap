const { MinHeap } = require('./minHeap');

/**
 * @description sort the array using MaxHeap (from minimum to maximum)
 * @param {number[]} arr
 * @returns {number[]}
 */
function minHeapSort(arr) {
  const heap = new MinHeap(arr.length);
  for (const num of arr) {
    heap.push(num);
  }
  const ans = [];
  while (!heap.isEmpty()) {
    ans.push(heap.pop());
  }
  return ans;
}

exports.minHeapSort = minHeapSort;
