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
    let countriesUsDollar="";
    currency.forEach((countryCurr)=>
    {
        countriesUsDollar+=countryCurr+"\n";
        console.log(countryCurr);
    });


    //Displaying Country name in index.html page
    
    let us_dollar_country=document.getElementById("usdollar_country");
    us_dollar_country.innerText=countriesUsDollar;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
