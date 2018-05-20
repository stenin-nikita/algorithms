export default class Stack {
  constructor() {
    this._collection = []
  }

  push(item) {
    this._collection.push(item)
  }

  pop() {
    return this._collection.pop()
  }

  peek() {
    return this._collection[0]
  }

  isEmpty() {
    return this._collection.length === 0
  }

  clear() {
    this._collection = []
  }
}