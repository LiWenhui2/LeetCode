"use strict";
//1 两数之和
function twoSum(nums, target) {
    //哈希表 map存储值+索引
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
        map.set(nums[i], i);
    }
    return [];
}
// console.log(twoSum([2, 7, 11, 15], 9))
//2. 两数相加
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0); //哑节点
    let current = dummy;
    let carry = 0; //进位
    while (l1 !== null || l2 !== null || carry !== 0) {
        // @ts-ignore
        const x = l1 ? l1.val : 0;
        // @ts-ignore
        const y = l2 ? l2.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10); //链接到原链表
        current = current.next;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    return dummy.next;
}
//3. 无重复字符的最长子串
function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLen = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.get(char)) {
            left = map.get(char) + 1;
        }
        map.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
console.log(lengthOfLongestSubstring('abcabcbb'));
