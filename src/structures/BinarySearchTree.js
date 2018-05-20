class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(value) {
    const node = this.root

    if (node === null) {
      this.root = new Node(value)
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value)
          } else if (node.left !== null) {
            searchTree(node.left)
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value)
          } else if (node.right !== null) {
            searchTree(node.right)
          }
        }
      }

      searchTree(node)
    }
  }

  findMin() {
    let current = this.root

    if (current === null) {
      return null
    }

    while (current.left !== null) {
      current = current.left
    }

    return current.value
  }

  findMax() {
    let current = this.root

    if (current === null) {
      return null
    }

    while (current.right !== null) {
      current = current.right
    }

    return current.value
  }

  find(value) {
    let current = this.root

    while (current.value !== value) {
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }

      if (current === null) {
        return null
      }
    }

    return current
  }

  isPresent(value) {
    let current = this.root

    while (current) {
      if (value === current.value) {
        return true
      }

      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null
      }

      if (value === node.value) {
        if (node.left === null && node.right === null) {
          return null
        }

        if (node.left === null) {
          return node.right
        }

        if (node.right === null) {
          return node.left
        }

        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }

        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
        return node
      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }

    this.root = removeNode(this.root, value)
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
  
    if (left < right) {
      return left + 1
    }

    return right + 1
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1
    }

    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)

    if (left > right) {
      return left + 1
    }

    return right + 1
  }

  inOrder() {
    if (this.root === null) {
      return null
    }

    const result = []

    const traverseInOrder = (node) => {       
      node.left && traverseInOrder(node.left)
      result.push(node.value)
      node.right && traverseInOrder(node.right)
    }

    traverseInOrder(this.root)
    return result
  }

  preOrder() {
    if (this.root === null) {
      return null
    }

    const result = []

    const traversePreOrder = (node) => {
      result.push(node.value)
      node.left && traversePreOrder(node.left)
      node.right && traversePreOrder(node.right)
    }

    traversePreOrder(this.root)
    return result
  }

  postOrder() {
    if (this.root === null) {
      return null
    }

    const result = []

    const traversePostOrder = (node) => {
      node.left && traversePostOrder(node.left)
      node.right && traversePostOrder(node.right)
      result.push(node.value)
    }

    traversePostOrder(this.root)
    return result
  }

  levelOrder() {
    const result = []
    let queue = []

    if (this.root !== null) {
      queue.push(this.root)

      while(queue.length > 0) {
        let node = queue.shift()
        result.push(node.value)

        if (node.left !== null) {
          queue.push(node.left)
        }

        if (node.right !== null) {
          queue.push(node.right)
        }
      }

      return result
    }

    return null
  }

  invert(node = this.root) {
    if (node === null) {
      return null
    }

    const left = node.left
    const right = node.right

    node.left = this.invert(right)
    node.right = this.invert(left)
      
    return node
  }
}
