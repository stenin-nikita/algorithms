
export default class CircularQueue {
  constructor(size) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }

  enqueue(item) {
    let write = this.write % (this.max + 1)

    if (this.queue[write] !== null) {
      return null
    }

    this.queue[write++] = item
    this.write = write

    return item
  }

  dequeue() {
    let read = this.read % (this.max + 1)
    const item = this.queue[read]

    if (item === null) {
      return null
    }

    this.queue[read++] = null
    this.read = read

    return item
  }
}
