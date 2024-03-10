// Loops

//JavaScript supports different kinds of loops

//for - loops through a block of code a number of times

/* for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
*/
for( let a=5; a<10; a++) {
  console.log(a)
}
for (let i = 0; i<5; i++) {
  let kisa=i+1
    console.log(kisa)
  }
let ghayas=26
for( let b=1; b<26; b++) {
    ghayas+=b
    console.log(ghayas)
}
//Table of 2
for( let c=1; c<=10; c++) {
  console.log("2 x" + c + "=" + 2*c)
}