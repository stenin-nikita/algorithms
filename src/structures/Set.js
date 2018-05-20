
export default class Set {
  constructor() {
    this._collection = []
  }

  has(element) {
    return this._collection.indexOf(element) !== -1
  }

  values() {
    return this._collection
  }

  add(element) {
    if(!this.has(element)){
      this._collection.push(element)
      return true
    }
    return false
  }

  remove(element) {
    if(this.has(element)){
      const index = this._collection.indexOf(element)
      this._collection.splice(index, 1)
      return true
    }
    return false
  }

  size() {
    return this._collection.length
  }

  union(set) {
    const unionSet = new Set()
    const firstSet = this.values()
    const secondSet = set.values()

    firstSet.forEach((e) => {
      unionSet.add(e)
    })

    secondSet.forEach((e) => {
      unionSet.add(e)
    })
  
    return unionSet
  }

  intersection(set) {
    const intersectionSet = new Set()
    const firstSet = this.values()

    firstSet.forEach((e) => {
      if(set.has(e)){
        intersectionSet.add(e)
      }
    })

    return intersectionSet
  }

  difference(set) {
    const differenceSet = new Set()
    const values = this.values()

    values.forEach((e) => {
      if (!set.has(e)) {
        differenceSet.add(e)
      }
    })

    return differenceSet
  }

  subset(set) {
    const firstSet = this.values()
    const len = this.size()

    for(let i = 0; i < len; i++) {
      if (!set.has(firstSet[i])) {
        return false
      }
    }

    return true
  }
}
