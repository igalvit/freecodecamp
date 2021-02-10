function palindrome(str) {
    let cleanString = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let cleanAndReverseString = cleanString.split('').reverse().join('')
    return cleanString === cleanAndReverseString?true:false
  }