//1.slice()
//2.substring()
//1.substr()

//1.slice(first index,last index) -staring to ending that piece it will cut and print a new string,negative index allowed 
let names ="Good Morning Susthir"
let output=names.slice(3,11)
console.log(output);


//2.substring(first index,last index) -same works like slice but here less then 0 value countr as 0
let name1 ="Good Morning kanha"
let output1=name1.substring(3,9)
console.log(output1);


//3.subst(first index,length) 
let name2 ="Good Morning kanha"
let output2=name2.substr(3,3)
console.log(output2);

//4.toUpperCase()
let str="degweeiuheskud"
let outputstr=str.toUpperCase()
console.log(outputstr);

//5.toUpperCase()
let outputstr1=str.toLowerCase()
console.log(outputstr1);

//6.Concat() -usemto concat two strings
let text1 ="hyyyy"
let text2 ="Good Morning"
let opconcat=text1.concat(" ",text2)
console.log(opconcat);

//7.trim()

