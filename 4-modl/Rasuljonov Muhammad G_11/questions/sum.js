console.log("-------SUM------");

/**
 * @param {number[]} nums
 * @param {string[]} operations
 * @return {number}
 */
function sum(nums, operations) {
  let summ = nums[0];
  if (nums.length === 1 || operations.length === 0) return 0;
  for (let i = 1; i < nums.length; i++) {
    switch (operations[i - 1]) {
      case "+":
        summ += nums[i];
        break;
      case "-":
        summ -= nums[i];
        break;
      case "*":
        summ *= nums[i];
        break;
      case "/":
        summ /= nums[i];
        break;
      default:
        break;
    }
  }
  return summ;
}

console.log(sum([4, 4, 1], ["+", "-", "*"]) === 7); // 4 + 4 - 1 -> 7
console.log(sum([1, 1], []) === 0); // 0
console.log(sum([1], ["*", "/", "+"]) === 0); // 0
console.log(sum([4, 5, 5, 5], ["*", "*", "/"]) === 20); // 4 * 5 -> 20
console.log(sum([5, 4], ["*", "*", "/"]) === 20);
console.log(sum([3, 3], ["-", "*", "/"]) === 0);
