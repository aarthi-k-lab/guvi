let request=new XMLHttpRequest();
try{
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
request.onload=function()
{
    let data=JSON.parse(this.response);
    let total_Population=data.reduce((totalPop,item)=>
    {
        return totalPop+item.population;
    },0);
    console.log("Total Population: "+total_Population);

    //Displaying Country name in index.html page
    let countStr="Total Population: "+total_Population;
    let countHtml=document.getElementById("total_population_count");
    countHtml.innerText=countStr;
}
}
catch(err)
{
    alert(err.name,err.message,err.stack);
}
