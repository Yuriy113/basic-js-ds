const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let cur = null;

    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let last = new ListNode(value);
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = last;
    }
  }

  dequeue() {
    const head = this.head.value;
    this.head = this.head.next;
    return head;
  }
}

module.exports = {
  Queue,
};
