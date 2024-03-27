// spread -kind of coping an array elemnts inside it.
let a=[2,4,5,6,2,4,7,89,0];
let b=[...a]; //... (tripple dot means spread,all the elements of a will be copy to b)
console.log(a);
console.log(b);

//rest- if we passed 2 parameter but we are calling the function with 4 or 5 (with extra arguments) then using rest we can execute this function.
let fu = function(a,b,c,...d){
    console.log(a,b,c,d);// ...d(here it acts as rest)
}
fu(1,23,34,32,54,87,90)