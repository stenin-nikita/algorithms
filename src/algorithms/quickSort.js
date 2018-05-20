/**
 * Быстрая сортировка
 * Сложность: O(n log n)
 * @param {Array} array 
 */
export default function quickSort(array) {
  const partition = (left, right) => {
    const pivot = array[(left + right) >> 1]
    let i = left
    let j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }

      while (array[j] > pivot) {
        j--
      }

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        i++
        j--
      }
    }

    return i
  }

  const sort = (left, right) => {
    let index

    if (array.length > 1) {
      index = partition(left, right)

      if (left < index - 1) {
        sort(left, index - 1)
      }

      if (index < right) {
        sort(index, right)
      }
    }

    return array
  }

  return sort(0, array.length - 1)
}