//Primitive Data type
//Number
let integerValue=1;
let floatValue=1.1;

//String
let strValue="aarthi";
let another=strValue;
for(let i=0;i<strValue.length;i++)
{
    const newLocal = 'a';
    strValue[i]=newLocal;
}
console.log(strValue,another);

//Boolean
let booleanValue=true;


let undefinedValue;
let nullValue=null;

if(undefinedValue==nullValue)
{
    console.log("Both have empty values in it");
}


let anotherValue=nullValue;
anotherValue="aa";
console.log(nullValue,anotherValue);

var num1=20;
var num2=num1;
num1=100;
console.log(num1,num2);  //20,100


var arr1=[1,2,3];
var arr2=JSON.parse(JSON.stringify(arr1));
arr2[0]='a';
console.log("array1:"+arr1);  //1,2,3
console.log("array2:"+arr2);  //a,2,3

