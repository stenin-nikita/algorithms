class Node {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

/**
 * Сложность в среднем O(n)
 * Сложность в худшем случае O(n)
 */
export default class DoublyLinkedList {
  /**
   * Конструктор
   */
  constructor() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  /**
   * Возвращает количество элементов списка
   * Сложность: O(1)
   */
  size() {
    return this._length
  }

  /**
   * Возвращает первый узел списка
   * Сложность: O(1)
   */
  head() {
    return this._head
  }

  /**
   * Возвращает последний узел списка
   * Сложность: O(1)
   */
  tail() {
    return this._tail
  }

  /**
   * Проверяет, является ли список пустым
   * Сложность: O(1)
   */
  isEmpty() {
    return this._length === 0
  }

  /**
   * Удаляет все элементы из списка
   * Сложность: O(1)
   */
  clear() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  /**
   * Добавляет переданный элемент в начало списка
   * Сложность: O(1)
   * 
   * @param {*} element 
   */
  addFirst(element) {
    const node = new Node(element)
    const temp = this._head

    this._head = node
    this._head.next = temp

    if (this._length === 0) {
      this._tail = this._head
    } else {
      temp.prev = this._head
    }

    this._length++
  }

  /**
   * Добавляет переданный элемент в конец списка.
   * Сложность: O(1)
   * 
   * @param {*} element 
   */
  addLast(element) {
    const node = new Node(element)

    if (this._length === 0){
      this._head = node
    } else {
      this._tail.next = node
      node.prev = this._tail
    }

    this._tail = node
    this._length++
  }

  /**
   * Добавляет элемент в начало или конец списка.
   * Сложность: O(1)
   * 
   * @param {*} element 
   * @param {Boolean} first 
   */
  add(element, first = false) {
    first ? this.addFirst(element) : this.addLast(element)
  }

  /**
   * Удаляет первый элемент списка. 
   * Если список пуст, не делает ничего.
   * Возвращает true, если элемент был удален и false в противном случае.
   * Сложность: O(1)
   */
  removeFirst() {
    if (this._length !== 0) {
      this._head = this._head.next
      this._length--;

      if (this._length === 0) {
        this._tail = null
      } else {
        this._head.prev = null
      }

      return true
    }

    return false
  }

  /**
   * Удаляет последний элемент списка.
   * Если список пуст, не делает ничего.
   * Возвращает true, если элемент был удален и false в противном случае.
   * Сложность: O(1)
   */
  removeLast() {
    if (this._length !== 0) {
      if (this._length === 1) {
        this._head = null
        this._tail = null
      } else {
        this._tail.prev.next = null
        this._tail = this._tail.prev
      }

      this._length--
      return true
    }

    return false
  }

  /**
   * Удаляет первый элемент списка со значением, равным переданному.
   * Возвращает true, если элемент был удален и false в противном случае.
   * Сложность: O(n)
   * 
   * @param {*} element 
   * @return {Boolean}
   */
  remove(element) {
    let previousNode = null
    let currentNode = this._head

    while (currentNode) {
      if (currentNode.element === element) {
        if (previousNode) {
          previousNode.next = currentNode.next

          if (currentNode.next === null) {
            this._tail = previousNode
          } else {
            currentNode.next.prev = previousNode
          }

          this._length--
        } else {
          this.removeFirst()
        }

        return true
      }

      previousNode = currentNode
      currentNode = currentNode.next
    }

    return false
  }

  /**
   * Возвращает индекс элемента
   * Сложность: O(n)
   * 
   * @param {*} element 
   */
  indexOf(element) {
    let currentNode = this._head
    let index = -1

    while(currentNode) {
      index++

      if (currentNode.element === element) {
        return index
      }

      currentNode = currentNode.next
    }

    return index
  }

  /**
   * Возвращает элемент списка по индексу
   * Если выходит за пределы списка, возвращает null
   * Сложность: O(n)
   * 
   * @param {Number} index 
   */
  elementAt(index) {
    let count = 0
    let currentNode = this._head

    if (index < 0 || index >= this._length) {
      return null
    }

    while(count < index) {
      count++
      currentNode = currentNode.next
    }

    return currentNode.element
  }

  /**
   * Добавляет элемент по заданному индексу
   * Сложность: O(n)
   * 
   * @param {Number} index 
   * @param {*} element 
   */
  addAt(index, element) {
    const node = new Node(element)
    let previousNode
    let currentNode = this._head
    let currentIndex = 0

    if (index < 0 || index > this._length) {
      return false
    }

    while(currentIndex < index) {
      previousNode = currentNode
      currentNode = currentNode.next
      currentIndex++
    }

    if (previousNode) {
      previousNode.next = node
      node.prev = previousNode
      node.next = currentNode

      if (currentNode === null) {
        this._tail = node
      } else {
        currentNode.prev = node
      }
    } else {
      node.next = this._head

      if (this._tail === null){
        this._tail = node
      } else {
        this._head.prev = node
      }

      this._head = node
    }

    this._length++
    return true
  }

  /**
   * Удаляет элемент по заданному индексу.
   * Сложность: O(n)
   * 
   * @param {Number} index 
   */
  removeAt(index) {
    let previousNode
    let currentNode = this._head
    let currentIndex = 0

    if (index < 0 || index >= this._length) {
      return false
    }

    while(currentIndex < index) {
      previousNode = currentNode
      currentNode = currentNode.next
      currentIndex++
    }

    if (previousNode) {
      previousNode.next = currentNode.next

      if (currentNode.next === null) {
        this._tail = previousNode
      } else {
        currentNode.next.prev = previousNode
      }
    } else {
      this._head = this._head.next

      if (this._head === null){
        this._tail = null
      } else {
        this._head.prev = null
      }
    }

    this._length--
    return true
  }

  /**
   * Преобразует список в обратном порядке
   * Сложность: O(n)
   */
  reverse() {
    let lastNode = this._tail

    if (this._length < 2) {
      return this
    }

    while(lastNode) {
      const next = lastNode.next
      const prev = lastNode.prev

      lastNode.next = prev
      lastNode.prev = next
      lastNode = prev
    }

    const head = this._tail
    const tail = this._head

    this._head = head
    this._tail = tail

    return this
  }
}
