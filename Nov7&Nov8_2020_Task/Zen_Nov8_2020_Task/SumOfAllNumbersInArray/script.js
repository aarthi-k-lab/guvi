var arr=[1,2,3,4,5,6,7,8,9,10];
console.log("Sum of the array numbers is: "+arr.reduce((sum,item)=>{return sum+=item},0));