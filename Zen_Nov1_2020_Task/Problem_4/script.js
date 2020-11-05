var arr = ["GUVI", "I", "am", "geek"];
console.log(this.transformFirstAndLast(arr));
function transformFirstAndLast(arr) {
 var newObject={};
 newObject[arr[0]]=arr[arr.length-1];
 return newObject;
}