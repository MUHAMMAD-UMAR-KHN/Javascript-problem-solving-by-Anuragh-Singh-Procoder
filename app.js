// var number = prompt("enter the number: ");
// for(let i = 1; i < number;i++){
//     console.log(i);
// }

// ================ 🙂 Problem 1 ======================
// var btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     var number = document.getElementById("nums").value;
//     for (let i = 1; i < number; i++) {
//         console.log(i)
//     }
// })

// ================== 😀 Problem 2 ======================

// var number = 10;
// for (let i = 1; i <= number; i++) {
//     console.log(number - i + 1)
// }


//=============== 😃 problem 3 =========================

// var number = 20;
// for(let i = 1; i <= number; i++){
//   if(i % 2 == 0){
//       console.log(i)
//   }
// }

// ================😎 problem 4 =====================

// var inputNumber = 5;
// var number = 0;
// for(let i = 1; i<= inputNumber; i++){
//     number = number + i;
// }
// console.log(`the sum of number from 1 to ${inputNumber} is "${number}"`);


// ==============😄 problem 5 =====================

// var inputNumber = 5;
// var number = 1;
// for(let i = 1; i<= inputNumber; i++){
//     number = number * i;
// }
// console.log(`the factorial of number ${inputNumber} is "${number}"`);


// =============== 😍 Problem 6 ======================
// var number = 20;
// var evenSum = 0;
// for(let i = 1; i <= number; i++){
//   if(i % 2 == 0){
//       evenSum += i;
//   }
// }
// console.log(`The sum of even numbers is ${evenSum}`);

// ==================== 😎 Problem 7 =================

// var number = 10;
// for(let i = 1; i <= number;i++){
//     var sqNum = i*i;
//     console.log(`the square of "${i}" is ${sqNum}.`);
// }

// =============== 🏠 Home work Problem 1 ====================

// var number =  100;
// for(let i = 1; i <= number; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(`${i} is the number which is divisible by 3 and 5`);
//     }
// }

// =============== 🏠 Home work Problem 2 ====================

// var number =  100;
// var sumOdd = 0;
// for(let i = 1; i <= number; i++){
//     if(i % 2 != 0){
//         sumOdd += i;
//     }
// }
// console.log(`The sum of all the odd number from 1 to ${number} is ${sumOdd}`);

// this is second approach to calculate the sum of odd numbers by using formula of sum of odd numbers which is :- n*n or square of n.

// var numb = 9;
// var oddNumbersSum = Math.pow(numb,2);
// console.log(oddNumbersSum);

// =============== 🏠 Home work Problem 3 ====================

// var number = 10;
// for(let i = 1; i<= number; i++){
//     console.log(`The cube of the ${i} is ${i**3}`);
// }

// =============== 🏠 Home work Problem 4 ====================

// var number = 50;
// for(let i = 1; i<= number; i++){
//     var squares = i**2;
//     if (squares % 2 == 0 && squares <= 100) {
//         console.log(`The ${squares} is the square of ${i} and fulfill the both conditions even and perfect square.`)
//     }
// }



//==================== 😍 Day 2 start =========================

// ===================🤗 Problem 1 ======================

// var a = 2;
// var b = 30;
// var c = 20;
// if (a>b && a>c) {
//     console.log(`${a} is the greatest.`)
// }
// else if(b>a && b>c){
//     console.log(`${b} is the greatest.`)
// }
// else{
//     `${c} is the greatest.`
// }


// another approach 💡

// var max;
// function checkNumber(a,b,c){
// if (a>=b && a>=c) {
//     max = a;
//     console.log(`${a} is the greatest.`)
// }
// else if(b>=a && b>=c){
//     max=b;
//     console.log(`${b} is the greatest.`)
// }
// else{
//     max = c;
//     `${c} is the greatest.`
// }
// return max;
// }
// checkNumber(3,1,5);
// var greatest = max;
// console.log(greatest);


// another approach 💡

// var numbs = [3,1,4];
// var greatest = numbs[0];
// for(let i = 0; i < numbs.length; i++){
//     if(numbs[i] > greatest){
//         console.log(`${numbs[i]} is the greatest.`)
//     }
// }

// another approach 💡

// var max = Math.max(3,2,5,8,1);
// console.log(max);

// ============== 🤗 Problem 2 =======================

// var check;
// function numberChecker(a) {
//     if (a > 0) {
//         check = a;
//         console.log(`${check} is positive`)
//     }
//     else if (a < 0) {
//         check = a;
//         console.log(`${check} is negative`)
//     }
//     else {
//         check = a;
//         console.log(`${check} is zero`)
//     }
// }
// numberChecker(9);

// ============== 🤗 Problem 3 =======================

// var units = 900;
// var unitCharges;
// var bill = 0;

// if (units <= 100) {
//     unitCharges = 5;
//     bill = units * unitCharges;
//     console.log(`Your electricity bill is ${bill}`);
// }
// else if (units > 100 && units <= 200) {
//     unitCharges = 7;
//     bill = units * unitCharges;
//     console.log(`Your electricity bill is ${bill}`);
// }
// else if (units > 200 && units <= 300) {
//     unitCharges = 9;
//     bill = units * unitCharges;
//     console.log(`Your electricity bill is ${bill}`);
// }
// else if (units == 0) {
//     bill = 0;
//     console.log("tum ne kunda mara hua hai.");
// }
// else {
//     console.log("tumhara bill bht zyada hai tum office ajao bijli k.");
// }

// if (bill > 0) console.log(bill);

// ============== 🤗 Problem 4 =======================

// var alp = prompt("Enter the alphabet: ").toLowerCase();
// if(alp == "a" || alp == "e" || alp == "i" || alp == "o" || alp == "u"){
//     console.log(alp,"is vowel");
// }
// else{
//     console.log(alp,"is consonant");
// }

// ================== 😎 Problem 5 =======================

// leap year problem.


// ================== 🤩 Day 3 problem solving ===================

// ================== 😉 Prblem 01 ===================

// var starLine = 3;
// for (let i = 1; i <= starLine; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


// ================== 😉 Prblem 02 ===================

// var starLine = 3;
// for (let i = 1; i <= starLine; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
