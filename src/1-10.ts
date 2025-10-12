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