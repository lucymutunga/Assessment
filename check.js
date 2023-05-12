function checkForEight(num1, num2) {
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(checkForEight(4, 12)); // true
  console.log(checkForEight(7, 1)); // true
  console.log(checkForEight(2, 3)); // false
  