function x(){
    //this is the lexical environment
    let a=90
    //a closure is the combination of a function bundled together with its surrounding state(lexical environment)
    function y(){
        console.log(a)
    }
    y()
}
x()