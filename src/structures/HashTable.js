export default class HashTable {
  constructor(hashFn) {
    this.collection = {}
    this.hashFn = hashFn
  }

  add(key, value) {
    const index = this.hashFn(key)

    if (this.collection[index] === undefined) {
      this.collection[index] = [
        [key, value]
      ]
    } else {
      let inserted = false

      for (let i = 0; i < this.collection[index].length; i++) {
        if (this.collection[index][i][0] === key) {
          this.collection[index][i][1] = value
          inserted = true
        }
      }

      if (inserted === false) {
        this.collection[index].push([key, value])
      }
    }
  }

  remove(key) {
    const index = this.hashFn(key)

    if (this.collection[index].length === 1 && this.collection[index][0][0] === key) {
      delete this.collection[index]
    } else {
      for (let i = 0; i < this.collection[index].length; i++) {
        if (this.collection[index][i][0] === key) {
          this.collection[index].splice(i, 1)
        }
      }
    }
  }

  lookup(key) {
    const index = this.hashFn(key)

    if (this.collection[index] === undefined) {
      return undefined
    } else {
      for (let i = 0; i < this.collection[index].length; i++) {
        if (this.collection[index][i][0] === key) {
          return this.collection[index][i][1]
        }
      }
    }
  }
}
