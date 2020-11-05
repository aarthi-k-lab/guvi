var obj = {name : "RajiniKanth", age : 33, hasPets : false};
this.printAllKeys(obj);
function printAllKeys(obj) {
let output=[];
var keys=Object.keys(obj);
 for(var item of keys)
 {
     output.push(item)
 }
 console.log(output);
}