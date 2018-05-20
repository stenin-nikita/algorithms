// Find the Symmetric Difference

export function variantOne(a, b, ...other) {
  const result = []
  
  a.forEach(v => {
    if (b.indexOf(v) === -1 && result.indexOf(v) === -1) {
      result.push(v)
    }
  })

  b.forEach(v => {
    if (a.indexOf(v) === -1 && result.indexOf(v) === -1) {
      result.push(v)
    }
  })

  if (other.length) {
    return sym(result, ...other)
  }

  return result
}

export function variantTwo() {
  const args = Array.prototype.slice.call(arguments)
  const filter = (arr1, arr2) => arr1.filter(item => arr2.indexOf(item) === -1)

  const diff = function(arr1, arr2) {
    return filter(arr1, arr2).concat(filter(arr2, arr1))
      .filter((item, idx, arr) => arr.indexOf(item) === idx)
  }

  return args.reduce(diff, [])
}
