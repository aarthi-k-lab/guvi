var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
console.log(fromListToObject(arr));

function fromListToObject(arr) {
 var newObject = {};
 for(let i in arr)
 {
     let subArr=arr[i];
     newObject[subArr[0]]=subArr[1];
 }
 return newObject;
}