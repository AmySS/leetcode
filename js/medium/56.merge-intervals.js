/*
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (33.49%)
 * Total Accepted:    257.8K
 * Total Submissions: 770K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
	if (!Array.isArray(intervals) || intervals.length <= 1) {
		return intervals;
	}
	intervals.sort((a,b)=> {
		return a.start - b.start;
	});
	
	let result = [];
	const {start, end} = intervals[0];
	result.push(new Interval(start, end));
	
	for (let i = 1; i < intervals.length; i++){
		const {start, end} = intervals[i];
		const index = result.length -1;
		if (end >= result[index].start && end <= result[index].end) {
			result[index].start = Math.min.call(null, start, result[index].start);
		}else if ( start <= result[index].end && start >= result[index].start) {
			result[index].end = Math.max.call(null, end, result[index].end);
		}else {
			result.push(new Interval(start, end));
		}
	}
	return result;
};
