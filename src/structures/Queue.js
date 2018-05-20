export default class Queue {
  constructor() {
    this._collection = []
  }

  enqueue(element) {
    this._collection.push(element)
  }

  dequeue() {
    return this._collection.shift()
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
