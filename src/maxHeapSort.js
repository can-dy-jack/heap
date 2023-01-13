const { MaxHeap } = require('./maxHeap');

/**
 * @description sort the array using MaxHeap (from maximum to minimum)
 * @param {number[]} arr
 * @returns {number[]}
 */
function maxHeapSort(arr) {
  const heap = new MaxHeap(arr.length);
  for (const num of arr) {
    heap.push(num);
  }
  const ans = [];
  while (!heap.isEmpty()) {
    ans.push(heap.pop());
  }
  return ans;
}

exports.maxHeapSort = maxHeapSort;
