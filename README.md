# heap
- [ ] MinHeap
- [ ] MaxHeap
- [ ] Heap

> `堆` 在大部分编程语言中，都已经有内置方法实现它，但似乎JS并没有。
> 
> 最大堆和最小堆：用于高效快速地取得当前数据集中最大或者最小的元素

<!-- 默认初始大小？ -->

<!-- 
可以在 O(logN)O(logN) 的时间复杂度内向 堆 中插入元素；
插入：找到第一个空子节点，插入，然后与父节点不断替换，直到符合特点

可以在 O(logN)O(logN) 的时间复杂度内向 堆 中删除元素；
删除：找到最后一个子节点，放到根上，然后与子节点不断替换，直到符合特点

可以在 O(1)O(1) 的时间复杂度内获取 堆 中的最大值或最小值。
-->

<!-- 
0 处为个数
父节点：n/2
左节点：n*2
右节点：n*1+1
叶子节点个数：索引大于 n/2 的都是 
 -->



## MaxHeap API
### use
constructor 

时间复杂度：$O(N)$  
空间复杂度：$O(N)$  
```js
const heap = new MaxHeap(4);
```

### push
add a new element to the MaxHeap.  

时间复杂度： $O(log N)$  
空间复杂度： $O(1)$
```js
heap.push(1);
heap.push(2);
heap.push(3);
```

### peek
return the max element in the MaxHeap.  
时间复杂度：$O(1)$。
空间复杂度：$O(1)$。
```js
heap.peek() // 3
```

### pop
remove the max element in the MaxHeap.  
时间复杂度：$O(log N)$    
空间复杂度：$O(1)$
```js
heap.pop() // 3
```


### getSize
return the size of the MaxHeap.  
时间复杂度：$O(1)$  
空间复杂度：$O(1)$

```js
heap.getSize() // 2
```

---
