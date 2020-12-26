function getData(callback){
    let request=new XMLHttpRequest();
    request.open("GET","https://restcountries.eu/rest/v2/all");
    request.send();
    request.onload=function()
    {
        let data=JSON.parse(request.responseText);
        console.log(data);
        data.forEach((item)=> {
            let name=item.name;
            callback(name);
        })
    }
}

function displaydata(name){
    let body=document.body;
     li+=`<li>${name}</li>`;
    body.innerHTML=li;
}
let li='<h1>Callback Function</h1>';
getData(displaydata);


