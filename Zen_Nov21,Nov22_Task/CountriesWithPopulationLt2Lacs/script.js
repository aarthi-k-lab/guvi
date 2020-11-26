let request=new XMLHttpRequest();
try{
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    let data=JSON.parse(this.response);
    let lesspopulatedCountries=data.filter((item)=>
    {
        return item.population<200000;
    });
    console.log("Countries with population less than 2 lakhs",lesspopulatedCountries);


    //Displaying Country name in index.html page
    let countryString="";
    lesspopulatedCountries.forEach((item)=>
    {
        countryString+=item.name+"\n";
    });
    let countStr="Total No of Less Populated Countries( less than 2 laks): "+lesspopulatedCountries.length;
    let countHtml=document.getElementById("count");
    countHtml.innerText=countStr;
    let lessPopulatedCountry=document.getElementById("lessPopulatedCountry");
    lessPopulatedCountry.innerText=countryString;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
