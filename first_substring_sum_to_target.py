import sys

def substring_sum(nums, target):
    start = 0
    end = 0
    sub_sum = 0
    while end < len(nums):
        if start == end:
            sub_sum = nums[start]
        else:
            sub_sum += nums[end]

        if sub_sum == target:
            return [start, end];
        elif sub_sum < target:
            end += 1
        else:
            start += 1
            end = start
    return [-1, -1]

nums = [int(x) for x in raw_input().split(' ')]
target = int(raw_input())
print nums, target
result = substring_sum(nums, target)
print result
