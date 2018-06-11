/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (28.86%)
 * Total Accepted:    514.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	if(!l1) return l2;
	if(!l2) return l1;
	l1.val = l1.val + l2.val;
	let sum_next = addTwoNumbers(l1.next,l2.next);
	if(l1.val >= 10){
		sum_next = addTwoNumbers(sum_next, new ListNode(1));
		l1.val -= 10;
	}
	l1.next = sum_next;
	return l1;
};
