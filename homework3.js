function pow(x, y) {
  let result = 1; 
 
  
  for (let i = 0; i < y; i++) {
    result = result * x;
  }
 
  return result; 
}
 
console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(7, 0)); // 1