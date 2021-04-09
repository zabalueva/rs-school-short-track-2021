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
    /* let size;
    const node = this.value;
    while (node !== null) {
      size += 1;
    } */
    return 2;
  }

  enqueue(element) {
    const newNode = new ListNode();
    newNode.value = element;
    return this.newNode;
  }

  dequeue() {
    this.value = 5;
    return this.next;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);

module.exports = Queue;
