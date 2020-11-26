let request=new XMLHttpRequest();
try{
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    let data=JSON.parse(this.response);
    let countriesInAsia=data.filter((item)=>
    {
        return item.region==="Asia"
    });
    console.log("Countries in Asia",countriesInAsia);


    //Displaying Country name in index.html page
    let countryString="";
    countriesInAsia.forEach((item)=>
    {
        countryString+=item.name+"\n";
    });
    let countStr="Total Countries in Asia: "+countriesInAsia.length;
    let countHtml=document.getElementById("country_count");
    countHtml.innerText=countStr;
    let asianCountriesDiv=document.getElementById("asian_countries");
    asianCountriesDiv.innerText=countryString;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
