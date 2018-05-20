/**
 * Сортировка слиянием
 * Сложность: O(n log n)
 * @param {Array} array 
 */
export default function mergeSort(array) {
  const merge = (left, right) => {
    const result = []
    let il = 0
    let ir = 0

    while(il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    if (il < left.length) {
      result.push.apply(result, left.slice(il))
    }

    if (ir < right.length) {
      result.push.apply(result, right.slice(ir))
    }

    return result
  }

  const sort = (items) => {
    if (items.length < 2) {
      return items
    }

    const middle = Math.floor(items.length / 2)

    const left = items.slice(0, middle)
    const right = items.slice(middle)

    return merge(sort(left), sort(right))
  }

  return sort(array)
}
