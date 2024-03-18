// -------/////////Array Methods///////////-------

//1.Check a string whether it is pelindrum or not?
function CheckPelindrumsts(str) {
  let newstr = str.split("").reverse().join("");
  str == newstr ? console.log("pelindrum") : console.log("not a pelindrum"); //
}
//2.using filter array method check even numbers from the array
let array = [5, 8, 4, 7, 99, 55, 80, 21, 22, 30];
let NewArr = array.filter((val) => val % 2 === 0);

console.log(NewArr);

//3.using map array method print square of numbers.

let arraynum = [1, 8, 5, 9, 5];
let NumArray = arraynum.map((val) => {
  return val * val;
});
console.log(NumArray);

//4.using reduce method calculate the sum of the num array

let nums = [4,8,4,9,8,2,55,47];
let Newnums = nums.reduce((res , curr) =>{
    return res+curr;
});
console.log("The sum of all numbers is ",Newnums);

//5. using reduce method find the largest number from the array

let myarr =[54,88,43,71,96,66,100];
let Largest = myarr.reduce((prev,now) =>{
    return prev > now ? prev:now;
});
console.log("the largest number from the arrow is ",Largest);

//6.Filter out the marks of student whose marks are greater then 90.

let studentMarks =[89,99,96,82,93,90,92,94,100];
let GreaterNinty =studentMarks.filter((val) =>{
    return val > 90;
});

console.log("The marks which are greater then 90 are ",GreaterNinty);

/*
7.Taake a number n as input from user,create an array of numbers from 1 to n,
 use reduce method to calculate sum of all numbers in the array.
 use reduce method to calculate product of all numbers in the array.

let Number = prompt("Enter a number ");
let arr=[];
for(let i=1;i<=Number;i++){
    arr[i-1]=i;
}
console.log(arr);
const newArrSum = arr.reduce((prev,curr) =>{
    return prev+curr;
});
console.log("The sum of array is ",newArrSum);
*/

/* 
---////////// Document Objhect Model - DOM Manipulation ///////////-----
 we can access our html elements from the page using javascript by the following methods
 1. document.getElementById("id"); - using id selector
 2. document.getElementsByClassName("classname"); -using class selector
 3. document.getElementsByTagName("tagname"); -using tag selector
 4. document.querySelector("id/class/tag"); - using query selector - returns 1st element(use . or #)
 5. document.querySelectorAll(".className"); - using query selector - returns all elements(use . or #)
 
 
 */
const student ={
    name:"kanha",
    school:"saiec",
    phone:"998897",
    available:'Y',
    marks:97.8,
    Mymarks:function(){
        console.log(this.marks);
    }
}
console.log(student);
    
class Bikes{
    enginee(){
        console.log("125 CC");
    }
    break(){
        console.log("Dish Break");
    }
}
console.log(Bikes);

let hero=new Bikes();

const numbers=[45,87,96,25,84]
for (const num of numbers) {
    console.log(num);
    
}
let Greetings="hyy man"
for (const greet of Greetings) {
    console.log(greet);
}