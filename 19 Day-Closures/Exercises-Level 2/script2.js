//1
const innerFuncs = outerFunction()

function outerFunction() {
    let count = 0;
  
    function plusOne() {
      count+=3
      return count
    }
  
    function minusOne() {
      count-=5
      return count
    }
  
    function multiple() {
      let count = 0;
      count*=2
      return count
    }
  
    return {
        plusOne,
        minusOne,
        multiple

    }
  }
let count = 0;
let func = outerFunction(count);

  
  console.log(func.plusOne)
  console.log(func.minusOne)
  console.log(func.multiple)
