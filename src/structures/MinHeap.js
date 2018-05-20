
export default class MinHeap {
  constructor() {
    this.heap = [null]
  }

  insert(value) {
    const heap = this.heap
    const length = heap.length

    heap.push(value)

    if (length > 2) {
      let idx = length - 1
      let parent = Math.floor(idx / 2)

      while (heap[idx] < heap[parent]) {
        if (idx >= 1) {
          [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
          if (parent > 1) {
            idx = parent
            parent = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }
  
  remove() {
    const heap = this.heap
    let min = this.heap[1]

    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)

      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]]
        }

        return min
      }
 
      let i = 1
      let left = 2 * i
      let right = 2 * i + 1

      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]]
          i = 2 * i
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]]
          i = 2 * i + 1
        }

        left = 2 * i
        right = 2 * i + 1

        if (heap[left] == undefined || heap[right] == undefined) {
          break
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1)
    } else {
      return null
    }

    return min
  }

  sort() {
    const result = []

    while (this.heap.length > 1) {
      result.push(this.remove())
    }

    return result
  }

  print() {
    return this.heap
  }
}
