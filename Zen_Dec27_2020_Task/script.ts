class lodashFun{

    chunkfun(arr:Array<number>,val:number){ 
        let chunkarr=[]; 
        for(let i=0;i<arr.length;i+=val)
        {
            (chunkarr).push(arr.slice(i,i+val));
        }
        return chunkarr;
    }

    reducefun(arr:Array<number>,initialvalue:number)
    {
        return arr.reduce((total,item)=>{
            return total+item;
        },initialvalue);
    }

    filterfun(arr:Array<number>,age:number)
    {
        return arr.filter((value)=>{
            return value>=age;
        });
    }

    findfun(arr:Array<number>,findNum:number)
    {
        return arr.find((value)=>{
            return value==findNum;
        });
    }

    somefun(arr:Array<number>)
    {
        return arr.some((value)=>value%2==0);
    }
    
}

let lodashobj=new lodashFun();

console.log(lodashobj.chunkfun([1,2,3,4,5],2));
console.log(lodashobj.reducefun([1,2,3,4,5],0));
console.log(lodashobj.filterfun([18,12,23,14,35],18));
console.log(lodashobj.findfun([1,2,3,4,5],2));
console.log(lodashobj.somefun([1,2,3,4,5]));
