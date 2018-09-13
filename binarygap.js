function binaryGap(number) {

  let maxGap = 0;
  let tempGap = 0;
  let binaryNumber = parseInt(number, 10).toString(2);

  for (let char of binaryNumber) {
    if (char === '0') {
      tempGap++;
    } else {
      if (tempGap > maxGap) {
        maxGap = tempGap;
      }
      tempGap = 0;
    }
  }
  
  return(maxGap);
  
}