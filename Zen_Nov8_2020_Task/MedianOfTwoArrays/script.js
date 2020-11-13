let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,16,17,18,19,20];
let arr3=(arr1+","+arr2).split(",").map(Number);
let len1=Math.round(arr3.length/2);
let len2=len1-1;
console.log("Median Of two array is: ");
console.log((arr3.length%2===0)?(arr3[len1]+arr3[len2])/2:arr2[len1]);