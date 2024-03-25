//1.How to verify given array is empty or not?
let numbers=[];
if(numbers.length==0){
console.log("The given array is empty");
}
else{
    console.log("The given array is not empty"); 
}
//2.How to verify given object is empty or not?
let shopdetails={
    a:"yyy",
    b:"uuu"
};

let result=Object.keys(shopdetails).length === 0;
console.log(`The object is empty?- ${result}`);

//3.How to print object in browser?
let cars={
    color:"Red",
    company:"BMW",
    owner:"Susthir"
}

document.getElementById("showObj").innerHTML=JSON.stringify(cars);

