let arr=[1,1,2,2,3,3,4,4,5,5];
console.log("Before Removing the duplicates"+arr);
let dup=[];
arr.reduce((res,item,index)=>{
    if(res[item]===undefined){res[item]=1;dup.push(item);}
    return res;
},{});
console.log("After Removing Dupliacte in Array"+dup);