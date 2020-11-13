var arr=[1,2,3,4,5,6,7,8,9,10];

//Normal function
function printOddNumbers(arr)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===1)
        {
            res.push(arr[i]);
        }
    }
    return res;
}

//Annonymous Functiom
var res=function(arr)
{
    return arr.filter(item=>(item%2===1));
}

//IIFE
var result=function(arr)
{
    return arr.filter(item=>(item%2===1));
}([1,2,3,4,5,6,7,8,9,10]);


//Arrow Function
var arrowFunctionResult=()=>{
    return arr.filter(item=>item%2===1)
}

console.log("Printing odd numbers using normal function \n Odd Numbers:"+printOddNumbers(arr));
console.log("Printing odd numbers using Anonymous function \n Odd Numbers:"+res(arr));
console.log("Printing odd numbers using IIFE \n Odd Numbers:"+result);
console.log("Printing odd numbers using Arrow function \n Odd Numbers:"+arrowFunctionResult(arr));

let normalVar=arr.filter(item=>item%2===1);
console.log("OddNumbers: "+ normalVar);
console.log(((arr)=>{return arr.filter(item=>item%2===1)})(arr));