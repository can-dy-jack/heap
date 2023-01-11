const { expect } = require('chai');
const { MaxHeap } = require('../src/maxHeap');

describe('maxHeap Tests', () => {
  const heap = new MaxHeap(4);

  describe('push() test', () => {
    it('add a new element to the MaxHeap', () => {
      heap.push(1);
      heap.push(2);
      heap.push(3);
      expect(heap.peek()).to.equal(3);
      expect(heap.getSize()).to.equal(3);
      expect(heap.toArray()).to.deep.equal([3, 1, 2]);
    });

    it('throw an error when MaxHeap is full', () => {
      heap.push(4); // [4, 3, 2, 1]

      expect(
        () => heap.push(5)
      ).to.throw(Error).to.have.property(
        'message',
        'Heap is full.'
      );
    });
  });
});
