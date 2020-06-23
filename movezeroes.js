//Objective is to move all zeroes in a 1-D array to the back in-place.
//We do these operations in place and in O(1) space.

let nums = [0,1,0,3,12]


//O(n) solution that uses a slow pointer to keep track of where swaps happen.

let curr = 0

//Here, if we pass by a nonzero term, we swap it with the 'curr' pointer, which
//initially starts at the beginning of the array and moves up one every time 
//a swap occurs.

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        let temp = nums[curr]
        nums[curr++] = nums[i]
        nums[i] = temp
    }
}

return nums
