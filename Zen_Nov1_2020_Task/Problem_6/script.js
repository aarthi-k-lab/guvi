var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
 [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

 console.log(transformEmployeeData(arr));
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(let item in arr)
 {
     let subArr=arr[item];
     let obj={};
     for(let subitem in subArr)
     {
         let changingArr=subArr[subitem];
         obj[changingArr[0]]=changingArr[1];
     }
     tranformEmployeeList.push(obj);
 }
 
 return tranformEmployeeList;
}