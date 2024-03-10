//Assigning a variable with "let"
let a=21 
console.log(a) //you can print with console.log
 a="kisa" //you can also update the variable when you assigning with "let"
console.log(a)
const code=23 // When you assign a variable with "const" type so you can't recreate the same variable again. 
console.log(code)
// Primitive Datatypes
let b=21 //number
let c=null //null
let d=true //boolean
let e=BigInt("345") //bigint
let f="Kisa Mubarka" //string
let g=Symbol("$") //symbol
let h=undefined //undefined
console.log(b,c,d,e,f,g,h)
console.log(typeof f) //typeof
//Objects In JS
const car = { //car is object
    color:"blue", //color is property and blue is value
    model:"500",
    type:"fiat"
}
console.log(car["color"])
// Arithmetic Operators in JS
let x=5
let y=12
let z=x+y //Addition
console.log(z)
let i=x*y //Multiplication
console.log(i)
let j=x-y //Subtraction
console.log(j)
let k=x/y //Division
console.log(k)
let l=x^y //Power or Exponentiation
console.log(l)
let m=x%y //Modulus returns the division remainder
console.log(m)
let n=2
n++ //Increment
console.log(n)
let o=5
o-- //Decrement
console.log(o)
// Assignment Operators In JS
let p=1
p+=5 // I can also do this like in all arithmetic operators
console.log(p)
// Comparison Operators
let q=2
let r=6
console.log(q==r) // == equals to
console.log(q!=r) // != not equals to
console.log(q===r) // === equal value and type
console.log(q!==r) // !== not equal value and type
console.log(q>r) // q> greater then
console.log(q<r) // q< less then
console.log(q>=r) // q>= greater then equal to
console.log(q<=r) // q<= less then equal to
// Logical Operators
let s=5
let t=6
console.log(s<t && s!=t) // "&&"" if both are true it gives true result
console.log(s>t || s!=t) // "||" if anyone of them is true it gives true
console.log(!true) // "!" it gives opposite condition
/* This is a multiline 
comment */