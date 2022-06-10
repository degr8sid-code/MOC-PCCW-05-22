let globalVariable = "I can be accessed anywhere."

function myFunction() 
{
    let functionVariable = "I can be accessed inside this function only."
}

function myFunction2() 
{
    a = 0;
    let functionVariabl2="I can be accessed inside this function (and the following block)."
    if (a == 0)
    {
        let blockVariable = "I can be accessed inside this block only."
    }
}

console.log(globalVariable);
console.log(functionVariable);
console.log(functionVariable2);
console.log(blockVariable);