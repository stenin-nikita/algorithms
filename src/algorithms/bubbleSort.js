/**
 * Сортировка пузырьком
 * Сложность: O(n^2)
 * @param {Array} array 
 */
export default function bubbleSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  const n = array.length
  let swapped = false

  do {
    swapped = false
    for(let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1)
        swapped = true
      }
    }
  } while(swapped)

  return array
}
