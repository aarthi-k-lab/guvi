var obj = {name : "RajiniKanth", age : 33, hasPets : false};
this.printAllValues(obj);
function printAllValues(obj) {
let output=[];
var keys=Object.keys(obj);
 for(var item of keys)
 {
     output.push(obj[item])
 }
 console.log(output);
}