let arr=[1,2,3,4,5];
let k=2;

//Result should be 4,5,1,2,3
k=k%arr.length;
let no=arr.length-k;
for(let i=0;i<no;i++)
{
    let element=arr.shift();
    arr.push(element)
}
console.log(arr);