const { expect, assert } = require('chai');
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
        'MaxHeap is full.'
      );
    });
  });

  describe('peek() test', () => {
    it('return the max element in the MaxHeap', () => {
      assert(heap.peek(), 4);
    });
  });

  describe('getSize() test', () => {
    it('return the size of the MaxHeap', () => {
      assert(heap.getSize(), 4);
    });
  });

  describe('isEmpty() test', () => {
    it('check if the MaxHeap is empty', () => {
      expect(heap.isEmpty()).to.equal(false);
    });
  });

  describe('isFull() test', () => {
    it('check if the MaxHeap is full', () => {
      expect(heap.isFull()).to.equal(true);
    });
  });

  describe('MaxHeap.heapify() test', () => {
    it('create a MaxHeap from a Array.', () => {
      const t = MaxHeap.heapify([1, 2, 3, 4]);
      expect(t.peek()).to.equal(4);
      expect(t.getSize()).to.equal(4);
    });
  });
});
