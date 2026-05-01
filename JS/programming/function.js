function calculator(a,b,operator){
    if(operator=="+"){
        return a+b
    }else if(operator=='-'){
        return a-b;
    }else if(operator=="*"){
        return a*b
    }else if(operator=="/"){
        return a/b;
    }else{
        return "invalid operator"
    }
}

console.log(calculator(2,3,'+'));
console.log(calculator(5,3,'-'));
console.log(calculator(9,3,"*"));
console.log(calculator(4,2,"/"));
console.log(calculator(7,1,"~"));




