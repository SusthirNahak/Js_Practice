let sum =(a,b)=>{
    return a+b
}
let mul =(a,b)=>{
    return a*b
}
let calculation =(a,b,callback)=>{
return callback(a,b)
}
let r1=calculation(4,5,sum)
let r2=calculation(10,5,mul)
console.log(r1);
console.log(r2);