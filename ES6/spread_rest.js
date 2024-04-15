// // spread -kind of coping an array elemnts inside it.
// let a=[2,4,5,6,2,4,7,89,0];
// let b=[...a]; //... (tripple dot means spread,all the elements of a will be copy to b)
// console.log(a);
// console.log(b);

// //rest- if we passed 2 parameter but we are calling the function with 4 or 5 (with extra arguments) then using rest we can execute this function.
// let fu = function(a,b,c,...d){
//     console.log(a,b,c,d);// ...d(here it acts as rest)
// }
// fu(1,23,34,32,54,87,90)

const set =new Set();
set.add("kanha")
set.add("subu")
set.add("raula")
const NewSetArr=[...set]
console.log(NewSetArr);


//spread operator

let a =[1,2,3,4,5,6]
let b=[2,3,4,5,6,10,8]
let c =[...a,...b,11,12,13]
console.log(c);

function sum(a, b, c) {
    return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result); // 6


//spread -just copy all elements and extract into new array  syntax- ...
let collegef=["raju","rahul","varun","kumar"]
let schoolf=["karun","varma","komal","sai"]
//features 
//1. to create a new array
//2.merge the array
//3.extends the array
let chaitainyaAllFriend =[...collegef,...schoolf,"krishna","raju","rahul","varun","kumar",]
console.log(chaitainyaAllFriend);



//rest operator -function argument time ...

function Abc(num,...num1){
    console.log("a =",num,"rest numbers=",...num1);

}
Abc(52)
Abc(52,53)
Abc(52,89,90,76,56,87,90)
Abc(52)

