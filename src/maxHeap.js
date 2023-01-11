/**
 * @copyright can-dy-jack 2023
 */

/**
 * @class MaxHeap
 */
class MaxHeap {
  constructor(n) {
    this.maxHeap = new Array(n + 1);
    this.size = n;
    this.realSize = 0;
    this.maxHeap[0] = 0;
  }

  /**
   * @description add a new element to the MaxHeap
   */
  push(element) {
    if (this.realSize === this.size) {
      throw new Error('Heap is full.');
    }
    this.realSize += 1;
    this.maxHeap[this.realSize] = element;

    let idx = this.realSize;
    let parent = Math.floor(idx / 2);
    while (this.maxHeap[idx] > this.maxHeap[parent] && idx > 1) {
      const t = this.maxHeap[idx];
      this.maxHeap[idx] = this.maxHeap[parent];
      this.maxHeap[parent] = t;
      idx = parent;
      parent = Math.floor(idx / 2);
    }
  }

  /**
   * @description return the max element in the MaxHeap
   * @returns {number} the max element in the MaxHeap
   */
  peek() {
    return this.maxHeap[1];
  }

  /**
   * @description remove the max element in the MaxHeap
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error('Heap is empty.');
    }

    const removedNode = this.maxHeap[1];
    this.maxHeap[1] = this.maxHeap[this.realSize];
    this.realSize -= 1;
    let idx = 1;
    while (idx < this.realSize
        && idx <= Math.floor(this.realSize / 2)
    ) {
      const left = idx * 2;
      const right = idx * 2 + 1;
      if (
        this.maxHeap[idx] < this.maxHeap[left]
        || this.maxHeap[idx] < this.maxHeap[right]
      ) {
        if (this.maxHeap[left] < this.maxHeap[right]) {
          const t = this.maxHeap[idx];
          this.maxHeap[idx] = this.maxHeap[right];
          this.maxHeap[right] = t;
          idx = right;
        }
      } else {
        break;
      }
    }
    return removedNode;
  }

  /**
   * @description return the size of the MaxHeap
   */
  getSize() {
    return this.realSize;
  }

  /**
   * @description check if the MaxHeap is empty
   */
  isEmpty() {
    return this.realSize === 0;
  }

  /**
   * @description convert the MaxHeap into a Array.
   */
  toArray() {
    const arr = [];
    for (let i = 1; i <= this.realSize; i += 1) {
      arr.push(this.maxHeap[i]);
    }
    return arr;
  }
}

exports.MaxHeap = MaxHeap;
