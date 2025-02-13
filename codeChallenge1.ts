// Easy case

// 1. Longest Common Prefix

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

// console.log(longestCommonPrefix(["flower","flow","flight"]));

// 2. Roman to Integer

function romanToInt(s: string): number {
  let romanToIntMap: { [num: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
      result += romanToIntMap[s[i + 1]] - romanToIntMap[s[i]];
      i++;
    } else {
      result += romanToIntMap[s[i]];
    }
  }
  return result;
}

// console.log(romanToInt("LVIII"));

// 3. Best Time to Buy and Sell Stock

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  return maxProfit;
}

// console.log(maxProfit([7,1,5,3,6,4]));

// 4. Search Insert Position

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// console.log(searchInsert([1,3,5,6], 6));

// 5. Remove Duplicates from Sorted Array

function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
};

// console.log(removeDuplicates([1,1,2]));

// 6. Remove Element

function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

// console.log(removeElement([3,2,2,3], 3));

// 7. Pascal Triangle

function generate(numRows: number): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = [];
    result[i][0] = 1;
    result[i][i] = 1;
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
}

// console.log(generate(5));

// 8. Excel Sheet Column Title

function convertToTitle(columnNumber: number): string {
  let result = "";
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(65 + (columnNumber % 26)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
}

// console.log(convertToTitle(27));

// 9. Excel Sheet Column Number

function titleToNumber(columnTitle: string): number {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + columnTitle.charCodeAt(i) - 64;
  }
  return result;
}

// console.log(titleToNumber("B"));

// 10. Valid Parentheses

function isValid(s: string): boolean {
  let stack: string[] = [];
  let map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isValid("()[]{}"));

// 11. Two Sum

function twoSum(nums: number[], target: number): number[] {
  let map: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

// console.log(twoSum([2,7,11,15], 20));

// 12. Valid Palindrome

function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome('racecar'));

// 13. Sqrt(x)

function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right - 1;
}

console.log(mySqrt(8));

// 14. Remove Duplicates from Sorted List

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function printLinkedList(head: ListNode | null): void {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

let list = createLinkedList([1, 1, 2, 3, 3]);
let uniqueList = deleteDuplicates(list);
// printLinkedList(uniqueList);

// MEDIUM

// 15. Reverse Integer

function reverse(x: number): number {
  let rev = 0;
  const int_max = 2 ** 31 - 1;
  const int_min = -(2 ** 31);

  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0;
    if (
      rev > Math.floor(int_max / 10) ||
      (rev === Math.floor(int_max / 10) && digit > 7)
    )
      return 0;
    if (
      rev < Math.ceil(int_min / 10) ||
      (rev === Math.ceil(int_min / 10) && digit < -8)
    )
      return 0;
    rev = rev * 10 + digit;
  }

  return rev;
}

// console.log(reverse(321));

// 16. Integer to Roman

function intToRoman(num: number): string {
  const romanMap: { value: number; symbol: string }[] = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// console.log(intToRoman(3749));

// 17. Letter Combinations of a Phone Number

function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const numberMap: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const result: string[] = [];

  function backtrack(index: number, path: string) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    for (const letter of numberMap[digits[index]]) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, "");
  return result;
}

// console.log(letterCombinations("29"));
