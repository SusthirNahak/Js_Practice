/**
 ----------------/////Let & Const Important Points\\\\\---------------
 ->let stores variable,const stores constant.
 ->both are braces scoped{},means if we call/access after scope we ll get error.
 ->we cant initialize const without giving a value,but we can create let without giving value.
 ->reassign value is not possible in case of const, but it is possible in the case of let.
 */
// let a;
/*a=78;
console.log(a);
//const a; it will create an error

var abc=5
abc=10

const abcd=7
abcd=8
console.log(abcd);*/


function add(){
    console.log(a);
}
add()
var a=5
function del(){
    console.log(a);
}
del()

let f;
f=6;
console.log(f);
const g=76;
console.log(g);
