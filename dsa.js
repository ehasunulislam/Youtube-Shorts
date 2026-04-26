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







// question solved: 2
// Input: nums = [1,1,1]   k = 2
// Output: 2


function subArray(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let sum = 0;

        for(let j = i; j < nums.length; j++) {
            sum += nums[j];

            if(sum === k) {
                count++;
            }
        }
    }

    return count
}

const nums = [1,1,1, 5, 8, 10];
const k = 5;
console.log(subArray(nums, k));
