const longestPalindrome = (s) => {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalindromeLength = right - left + 1;

      if (currentPalindromeLength > maxLength) {
        maxLength = currentPalindromeLength;
        startIndex = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};
console.log(longestPalindrome("rra"));
console.log(longestPalindrome("level"));
console.log(longestPalindrome("babad"));
