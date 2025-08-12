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