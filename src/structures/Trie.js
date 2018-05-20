class Node {
  constructor() {
    this.keys = new Map()
    this.end = false
  }

  setEnd() {
    this.end = true
  }

  isEnd() {
    return this.end
  }
}

export default class Trie {
  constructor() {
    this.root = new Node()
  }

  add(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd()
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node())
      this.add(input.substr(1), node.keys.get(input[0]))
    } else {
      this.add(input.substr(1), node.keys.get(input[0]))
    }
  }

  print() {
    return search(this.root, "")
  }

  isWord(word) {
    let node = this.root
    
    while(word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false
      }
      
      node = node.keys.get(word[0])
      word = word.substr(1)
    }

    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false
  }
}

function search(node, string, words = []) {
  if (node.keys.size != 0) {
    for (let letter of node.keys.keys()) {
      search(node.keys.get(letter), string.concat(letter), words)
    }
    if (node.isEnd()) {
      words.push(string)
    }
  } else {
    if (string.length > 0) {
      words.push(string)
    }
  }

  return words
}
