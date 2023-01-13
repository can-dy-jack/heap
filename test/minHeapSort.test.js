const { expect } = require('chai');
const { minHeapSort } = require('../src/minHeapSort');

describe('minHeapSort Test', () => {
  it('sort the array using MaxHeap (from minimum to maximum)', () => {
    const arr = [12, 668, 1, 0, 4, 67];
    expect(minHeapSort(arr)).to.deep.equal([0, 1, 4, 12, 67, 668]);
  });
});
