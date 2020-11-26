let request=new XMLHttpRequest();
try{
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    let data=JSON.parse(this.response);
    
    let countrydetailstr="";
    data.forEach((item)=>
    {
        countrydetailstr+="Country name: "+item.name+"  Capital: "+item.capital+" flag: "+item.flag+"\n"
        console.log(item.name,item.capital,item.flag);
    })
    console.log(countrydetailstr);
    //Displaying Country name in index.html page
    let countryDet=document.getElementById("country_details");
    countryDet.innerText=countrydetailstr;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
