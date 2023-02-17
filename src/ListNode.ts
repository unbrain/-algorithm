class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class DoubleListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(val?: number, next?: ListNode | null, prev?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}



function insert(n0: ListNode, P: ListNode): void {
  const n1 = n0.next;
  n0.next = P.next;
  P.next = n1;
}

function remove(n0: ListNode): void {
  if (!n0.next) return;
  const P = n0.next;
  const n1 = P.next;
  n0.next = n1;
}

function access(head: ListNode | null, index: number): ListNode | null {
  for (let i = 0; i < index; i++) {
    if (!head) {
      return null
    }
    head = head.next;
  }
  return head;
}

function find(head: ListNode | null, target: number): number {
  let index = 0;
  while (head !== null) {
    if (head.val === target) {
      return index
    }
    head = head.next;
    index++;
  }
  return -1;
}

export { ListNode, insert, remove, access, find, DoubleListNode }