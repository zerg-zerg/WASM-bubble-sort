function swap(a, b) {
    return [b, a];
}

function bubbleSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = swap(nums[j], nums[j + 1]);
            }
        }
    }
    return nums;
}

if (typeof module !== 'undefined') {
    module.exports = {bubbleSort};
}