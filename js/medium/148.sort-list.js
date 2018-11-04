/*
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (31.48%)
 * Total Accepted:    148.1K
 * Total Submissions: 468.3K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
		return head;	
	}
	let right = head,
		left = head,
		prev = head;
	while(right && right.next) {//快慢指针,将链表进行二分
		prev = left;
		left = left.next;
		right = right.next.next;
	}
	prev.next = null;
	right = left;
	left = head;
	return mergeSortList(sortList(left), sortList(right)); //归并排序
};
// 合并两个有序的链表
function mergeSortList(left, right) {
	if (!left) {
		return right;
	}
	if(!right) {
		return left;
	}
	let head = new ListNode(-1), p = head;
	while(left && right) {
		if (left.val <= right.val) {
			p.next = left;
			left = left.next;
		}else {
			p.next = right;
			right = right.next;
		}
		p = p.next;
	}
	if (left) {
		p.next = left;
	}
	if (right) {
		p.next = right;
	}
	return head.next;
}
