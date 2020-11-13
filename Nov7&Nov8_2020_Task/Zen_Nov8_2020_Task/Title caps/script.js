var strArr=["aarthi", "guvi", "technology", "aspiring full stack developer"];
console.log(strArr.map(item=>{
    let str="";
    let strArr=item.split(" ");
    for(let i in strArr){str+=strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1)+" "}
    return str}));