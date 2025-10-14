//1 两数之和
function twoSum(nums: number[], target: number): number[] {
    //哈希表 map存储值+索引
    const map: Map<number, number> = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])!]
        }
        map.set(nums[i], i)
    }
    return []
}

// console.log(twoSum([2, 7, 11, 15], 9))
//2. 两数相加
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(0)//哑节点
    let current: ListNode = dummy
    let carry: number = 0//进位
    while (l1 !== null || l2 !== null || carry !== 0) {
        // @ts-ignore
        const x: number = l1 ? l1.val : 0
        // @ts-ignore
        const y: number = l2 ? l2.val : 0
        const sum: number = x + y + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)//链接到原链表
        current = current.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummy.next
}

//3. 无重复字符的最长子串
function lengthOfLongestSubstring(s: string): number {
    let left: number = 0
    let maxLen: number = 0
    const map: Map<string, number> = new Map()
    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        if (map.has(char) && map.get(char)! >= left) {
            left = map.get(char)! + 1
        }
        map.set(char, right)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}

//9. 回文数
function isPalindrome(x: number): boolean {
    // return x.toString() === x.toString().split('').reverse().join('')
    if (x < 0 || (x >= 10 && (x % 10 === 0))) return false
    if (x >= 0 && x <= 9) return true
    let reverted: number = 0
    let n: number = x
    while (reverted < n) {
        reverted = reverted * 10 + (n % 10)
        n = Math.floor(n / 10)
    }
    return reverted === n || n === Math.floor(reverted / 10)
}

//13. 罗马数字转整数
function romanToInt(s: string): number {
    let res: number = 0
    const map: { [key: string]: number } = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    for (let i = 0; i < s.length; i++) {
        const current: number = map[s[i]]
        const next: number = map[s[i + 1]]
        if (current < next) {
            res += next - current
            i++
        } else {
            res += current
        }
        console.log(res)
    }
    return res
}

// console.log(romanToInt('III'))
//14. 最长公共前缀
function longestCommonPrefix(strs: string[]): string {
    let prefix: string = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1)
        }
    }
    return prefix
}

//20. 有效的括号
function isValid(s: string): boolean {
    if ([')', ']', '}'].includes(s[0])) return false
    const map: { [key: string]: string } = {')': '(', ']': '[', '}': '{'}
    const stack: string[] = []
    for (let char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char)
        } else {
            if (stack.pop() !== map[char])
                return false
        }
    }
    return stack.length === 0
}

//21. 合并两个有序链表
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(0)
    let current = dummy
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 === null ? list2 : list1
    return dummy.next
}

//26. 删除有序数组中的重复项
function removeDuplicates(nums: number[]): number {
    let slow: number = 0
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    }
    return slow + 1
}

//27. 移除元素
function removeElement(nums: number[], val: number): number {
    let left: number = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
}

//28. 找出字符串中第一个匹配项的下标
function strStr(haystack: string, needle: string): number {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j: number = 0
        while (haystack[i + j] === needle[j] && j < needle.length) {
            j++
        }
        console.log(j)
        if (j === needle.length) {
            return i
        }
    }
    return -1
}

// console.log(strStr('a', 'a'))
//35. 搜索插入位置
function searchInsert(nums: number[], target: number): number {
    let left: number = 0
    let right: number = nums.length - 1
    let middle: number = Math.floor((left + right) / 2)
    while (left <= right) {
        if (target > nums[middle]) {
            left = middle + 1
        } else if (target < nums[middle]) {
            right = middle - 1
        } else {
            return middle
        }
        middle = Math.floor((left + right) / 2)
    }
    return left
}

// console.log(searchInsert([1, 3, 5, 6], 7))
//58. 最后一个单词的长度
function lengthOfLastWord(s: string): number {
    // if (s === '') return 0
    // const arr = s.trim().split(' ')
    // return arr[arr.length - 1].length
    let i: number = s.length - 1
    let len: number = 0
    while (i >= 0 && s[i] === ' ') {
        i--
    }
    while (i >= 0 && s[i] !== ' ') {
        i--
        len++
    }
    return len
}

//66. 加一
function plusOne(digits: number[]): number[] {
    let flag: boolean = false
    let i = digits.length - 1
    while (i >= 0 && flag) {
        if (digits[i] + 1 > 0) {
            flag = true
        }
        
    }
}

plusOne([1, 2, 3])