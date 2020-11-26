let request=new XMLHttpRequest();
try{
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    let data=JSON.parse(this.response);
    let currency=[];
    data.forEach((item)=>
    {
        let currencyArr= item.currencies;
        currencyArr.forEach((i)=>
        {
            if(i.name==="United States dollar")
            {
                currency.push(item.name);
            }
        })
    }
    );

    //Error Handling
    try{
    if(currency.length!==18)
    {
        throw new SyntaxError("The length of countries with us currency is wrong");
        let countriesUsDollar="";
        currency.forEach((countryCurr)=>
        {
        countriesUsDollar+=countryCurr+"\n";
        console.log(countryCurr);
        });
    }
    }  
    catch(err)
    {
        alert(err.name);
        alert(err.message);
        alert(err.stack);
    }    
}
}
catch(err)
{
    alert(err.name);
}
