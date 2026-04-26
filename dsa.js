// question solved: 1

// Input: nums = [2, 7, 11, 15], 
// target = 9
// index return = target
// Output: [0, 1]


function output(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const needs = target - current;

        if(map[needs] !== undefined) {
            return [map[needs], i]
        }

        map[current] = i;
    }

}

// console.log(output([2, 7, 11, 15], 9));