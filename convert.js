function convertToHoursAndMinutes(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + " hours, " + minutes + " minutes";
  }
  
  
  console.log(convertToHoursAndMinutes(123)); 
  console.log(convertToHoursAndMinutes(60)); 
  console.log(convertToHoursAndMinutes(45)); 
  