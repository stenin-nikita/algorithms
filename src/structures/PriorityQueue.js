export default class PriorityQueue {
  constructor() {
    this._collection = []
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this._collection.push(element)
    } else {
      let added = false
      let len = this._collection.length

      for(let i = 0; i < len; i++) {
        if (element[1] < this._collection[i][1]) {
          this._collection.splice(i, 0, element)
          added = true
          break
        }
      }

      if (!added) {
        this._collection.push(element)
      }
    }
  }

  dequeue() {
    const element = this._collection.shift()
    return element[0]
  }

  front() {
    return this._collection[0]
  }

  size() {
    return this._collection.length 
  }

  isEmpty() {
    return this._collection.length === 0 
  }
}
