let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];
let arr3=(arr1+","+arr2).split(",").map(Number);
console.log("Median Of two array is: "+(arr3[arr1.length]+arr3[arr1.length-1])/2);