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
    let total_Population_Asia=countriesInAsia.reduce((total,item)=>
    {
        return total+item.population;
    },0);
    console.log("Total Population in asia: "+total_Population_Asia);

    //Displaying Country name in index.html page
   
    let total_pop_asia_str="Total Population in Asia: "+total_Population_Asia;
    let total_pop_asia=document.getElementById("total_pop_asia");
    total_pop_asia.innerText=total_pop_asia_str;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
