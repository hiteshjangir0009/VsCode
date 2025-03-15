// 3. Longest Substring Without Repeating Characters
// 26. Remove Duplicates from Sorted Array

const palindrome = (num) => {
    const nums = String(num)
    const last_ele = nums.length - 1
    let a = ''
    for (let i = last_ele; i >= 0; i--) {
        a += nums[i]
        console.log(i)

    }
    // console.log(nums.length);

    if (a == String(num)) {
        return true
    }
    return false

}

const problem_26 = (arr) => {

    let index = 0

    for (let i = 1; i < arr.length; i++) {

      if (arr[i] == arr[index]) {
        index++
        arr[index] = arr[i]
      }

    }

return index+1
}


const longest_prefix=(arr)=>{

    if (arr.length === 0) return ""; // Edge case: empty array

    let prefix = ""; // Store the common prefix
    let firstWord = arr[0]; // Take the first word as a reference

    for (let i = 0; i < firstWord.length; i++) { // Loop through each character of the first word
        let char = firstWord[i]; // Get the current character

        // Compare with each word in the array
        for (let j = 1; j < arr.length; j++) { 
            if (i >= arr[j].length || arr[j][i] !== char) { 
                return prefix; // If mismatch, return the prefix found so far
            }
        }

        prefix += char; // If all words have this character, add to prefix
    }
}
strs = ["flower","flow","flight"]

console.log(longest_prefix(strs))