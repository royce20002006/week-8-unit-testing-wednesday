function isFive(num) {
  if (num === 5) return true;
  else return false;
}

function isOdd(number) {
  if (typeof number !== 'number') throw error;
  else return number % 2 !== 0
  
 
}

function myRange(min, max, step = 1) {
  let arr = [];
  for (let i = min; i <= max; i+= step){
    arr.push(i);
  }
  return arr;
}


module.exports = { isFive, isOdd, myRange };
