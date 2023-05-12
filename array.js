function createNewArray(arr) {
    if (arr.length < 1) {
      return "Array must have at least one element";
    } else {
      let newArray = [arr[0], arr[arr.length - 1]];
      return newArray;
    }
  }
  
  
  console.log(createNewArray([1, 2, 3, 4, 5]));
  console.log(createNewArray([10, 20, 30])); 
  console.log(createNewArray([5])); 
  console.log(createNewArray([])); 
  