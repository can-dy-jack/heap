const { expect, assert } = require('chai');
const { MinHeap } = require('../src/minHeap');

describe('MinHeap Tests', () => {
  const heap = new MinHeap(4);

  describe('push() test', () => {
    it('add a new element to the MinHeap', () => {
      heap.push(1);
      heap.push(2);
      heap.push(3);
      expect(heap.peek()).to.equal(1);
      expect(heap.getSize()).to.equal(3);
      expect(heap.toArray()).to.deep.equal([1, 2, 3]);
    });

    it('throw an error when MinHeap is full', () => {
      heap.push(4);

      expect(
        () => heap.push(5)
      ).to.throw(Error).to.have.property(
        'message',
        'MinHeap is full.'
      );
    });
  });

  describe('peek() test', () => {
    it('return the max element in the MinHeap', () => {
      assert(heap.peek(), 1);
    });
  });

  describe('getSize() test', () => {
    it('return the size of the MinHeap', () => {
      assert(heap.getSize(), 4);
    });
  });

  describe('isEmpty() test', () => {
    it('check if the MinHeap is empty', () => {
      expect(heap.isEmpty()).to.equal(false);
    });
  });

  describe('MinHeap.heapify() test', () => {
    it('create a MinHeap from a Array.', () => {
      const t = MinHeap.heapify([1, 2, 3, 4]);
      expect(t.peek()).to.equal(1);
      expect(t.getSize()).to.equal(4);
    });
  });
});
