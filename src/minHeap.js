/**
 * @copyright can-dy-jack 2023
 */

/**
 * @class MaxHeap
 */
class MinHeap {
  constructor(n = 0) {
    this.minHeap = new Array(n + 1);
    this.size = n;
    this.realSize = 0;
    this.minHeap[0] = 0;
  }

  /**
   * @description add a new element to the MinHeap
   */
  push(element) {
    if (this.realSize === this.size) {
      throw new Error('MinHeap is full.');
    }

    this.realSize += 1;
    this.minHeap[this.realSize] = element;

    let idx = this.realSize;
    let parent = Math.floor(idx / 2);
    while (
      this.minHeap[idx] < this.minHeap[parent]
      && idx > 1
    ) {
      this._swap(idx, parent);
      idx = parent;
      parent = Math.floor(idx / 2);
    }
  }

  /**
   * @description return the min element in the MinHeap.
   * @returns {number} the max element in the MaxHeap
   */
  peek() {
    return this.minHeap[1];
  }

  /**
   * @description remove the min element in the MinHeap
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('MinHeap is empty.');
    }

    const removedNode = this.minHeap[1];
    this.minHeap[1] = this.minHeap[this.realSize];
    this.realSize -= 1;
    let idx = 1;
    while (idx < this.realSize && idx < Math.floor(this.realSize / 2)) {
      const left = idx * 2;
      const right = idx * 2 + 1;
      if (this.minHeap[left] < this.minHeap[idx]
        || this.minHeap[right] < this.minHeap[idx]
      ) {
        if (this.minHeap[left] < this.minHeap[right]) {
          this._swap(idx, left);
          idx = left;
        } else {
          this._swap(idx, right);
          idx = right;
        }
      } else {
        break;
      }
    }
    return removedNode;
  }

  /**
   * @private
   * @description swap the element at index i and j
   */
  _swap(i, j) {
    const t = this.minHeap[i];
    this.minHeap[i] = this.minHeap[j];
    this.minHeap[j] = t;
  }

  /**
   * @description return if the MinHeap is empty.
   */
  isEmpty() {
    return this.realSize === 0;
  }

  /**
   * @description return the size of the MinHeap
   */
  getSize() {
    return this.realSize;
  }

  /**
   * @description convert the MinHeap into a Array.
   */
  toArray() {
    const arr = [];
    for (let i = 1; i <= this.realSize; i += 1) {
      arr.push(this.minHeap[i]);
    }
    return arr;
  }

  /**
   * @description create a MaxHeap from a Array.
   */
  static heapify(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('arr is not an Array.');
    }

    const heap = new MinHeap(arr.length);
    for (let i = 0; i < arr.length; i += 1) {
      heap.push(arr[i]);
    }
    return heap;
  }
}

exports.MinHeap = MinHeap;
