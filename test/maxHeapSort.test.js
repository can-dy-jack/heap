const { expect } = require('chai');
const { maxHeapSort } = require('../src/maxHeapSort');

describe('maxHeapSort Test', () => {
  it('sort the array using MaxHeap (from maximum to minimum)', () => {
    const arr = [12, 668, 1, 0, 4, 67];
    expect(maxHeapSort(arr)).to.deep.equal([668, 67, 12, 4, 1, 0]);
  });
});
