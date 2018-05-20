export default class Map {
  constructor() {
    this._collection = {}
    this._count = 0
  }

  set(key, value) {
    if (!this.has(key)) {
      this._count++
    }

    this._collection[key] = value
  }

  remove(key) {
    if (this.has(key)) {
      delete this._collection[key]
      this._count--
    }
  }

  get(key) {
    return this.has(key) ? this._collection[key] : null
  }

  has(key) {
    return key in this._collection
  }

  values() {
    return this.keys().map(key => {
      return this._collection[key]
    })
  }

  keys() {
    return Object.keys(this._collection)
  }

  size() {
    return this._count
  };

  clear() {
    this._collection = {}
    this._count = 0
  }
}
