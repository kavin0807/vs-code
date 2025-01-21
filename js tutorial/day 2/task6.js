
let a=1; //Input 1;
let b=2; //Input 2;

function arithmeic(a,b){
    let sum = a+b;
    let sub =a-b;
    let mul = a*b;
    let div =a/b;
    return sum,sub,mul,div;
}
document.write("sum: "+arithmeic(a,b),"sub :"+arithmeic(a,b),"mul :"+arithmeic(a,b),"div: "+arithmeic(a,b));

/* here the function is defined with two parameters a and b and the function is called with the values of
 a and b and the function returns the sum,sub,mul,div of the values of a amount and b amount and the value
  is printed in the console.*/