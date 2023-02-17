import { expect, it } from 'vitest';
import { ListNode } from '../ListNode';

it('test list ', (ctx) => {
  const list0 = new ListNode(1);
  const list1 = new ListNode(2, list0);
  const list2 = new ListNode(3, list1);
  const list3 = new ListNode(4, list2)
  expect(list0.val).to.equal(1);
  expect(list0.next).to.equal(null);
  expect(list1.val).to.equal(2);
  expect(list1.next).to.equal(list0);
  expect(list1.val).to.equal(3);
  expect(list1.next).to.equal(list1);
  expect(list1.val).to.equal(4);
  expect(list1.next).to.equal(list2);
})