/**
 * Сортировка вставками
 * Сложность: O(n^2)
 * @param {Array} array 
 */
export default function insertionSort(array) {
  const n = array.length

	for (let i = 1; i < n; i++) {
    const value = array[i]
    let j = i - 1

    while(j >= 0 && array[j] > value) {
      array[j + 1] = array[j]
      j--
		}

		array[j + 1] = value
	}

  return array
}
