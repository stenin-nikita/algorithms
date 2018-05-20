/**
 * Сортировка выбором
 * Сложность: О(n^2)
 * @param {Array} array 
 */
export default function selectionSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  const n = array.length

	for (let i = 0; i < n - 1; i++) {
		let least = i
		for (let j = i + 1; j < n; j++) {
		  if (array[j] < array[least]) {
				least = j
			}
    }
    
		if (least != i) {
      swap(i, least)
		}
  }

  return array
}
