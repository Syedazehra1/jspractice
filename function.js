//function
function Addition (number1,number2) {
  let a =number1+number2
  a++
  return a
}
let p=Addition(43,65)
console.log(p,"function")
// Arrow function
let Multiplication=(number1,number2)=> number1*number2
let q=Multiplication(45,67)
console.log(q,"Arrow function")
// Without parenthesis when you have one value
let Division =number1=>5/number1
let d=Division(6)
console.log(d)