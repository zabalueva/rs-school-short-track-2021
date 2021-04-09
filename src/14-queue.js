const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    let size;
    const node = this.head;
    while (node !== null) {
      size += 1;
    }
    return size;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    newNode.next = null;
    return newNode;
  }

  dequeue() {
    if (!this.next) {
      return this.value;
    }
    return this.value;
  }
}

module.exports = Queue;
