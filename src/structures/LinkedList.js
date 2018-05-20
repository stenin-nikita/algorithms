class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * Сложность в среднем O(n)
 * Сложность в худшем случае O(n)
 */
export default class LinkedList {
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
   * Добавляет элемент в конец списка.
   * Сложность: O(1)
   * 
   * @param {*} element 
   */
  add(element) {
    const node = new Node(element)

    if (this._head === null) {
      this._head = node
    } else {
      this._tail.next = node
    }

    this._tail = node
    this._length++
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
    let previousNode
    let currentNode = this._head

    while(currentNode) {
      if (currentNode.element === element) {
        if (previousNode) {
          previousNode.next = currentNode.next

          if (currentNode.next == null) {
            this._tail = previousNode
          }
        } else {
          this._head = this._head.next

          if (this._head === null){
            this._tail = null
          }
        }

        this._length--
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
      node.next = currentNode

      if (currentNode === null) {
        this._tail = node
      }
    } else {
      node.next = this._head
      this._head = node

      if (this._tail === null){
        this._tail = node
      }
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
      }
    } else {
      this._head = this._head.next

      if (this._head === null){
        this._tail = null
      }
    }

    this._length--
    return true
  }
}
