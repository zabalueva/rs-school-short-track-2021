const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.newNode = new ListNode();
    this.head = this.newNode;
    this.tail = this.newNode;
  }

  get size() {
    let size;
    const node = this.value;
    while (node !== null) {
      size += 1;
    }
    return size;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.head.value || !this.tail) {
      this.head = node;
      this.tail = node;
      return this;
    }
    this.value = element;
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const temp = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

module.exports = Queue;
