var obj = {name: "ISRO", age: 35, role: "Scientist"};
convertObjectToList(obj);
function convertObjectToList(obj) {
    let list=[];
    let keys=Object.keys(obj);
    for(var key of keys)
    {
        let list1=[key,obj[key]];
        list.push(list1);
        
    }
    console.log(list);
 
}