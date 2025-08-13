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