//1
function outerFunction() {
    let x = 10;
  
    function innerFunction() {
      console.log(x); 
    }
  
    return innerFunction;
  }
  
  const innerFunction = outerFunction();
  innerFunction(); 