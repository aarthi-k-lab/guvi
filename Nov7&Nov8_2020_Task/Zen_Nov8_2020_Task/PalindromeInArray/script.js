var arr=["madam","12321","umbrella"];
console.log(arr.filter(item=>{
    for(let i=0;i<(item.length)/2;i++)
    {
        if(item[i]!==item[(item.length)-i-1])return false;
    }
    return true;
}));