var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.eu/rest/v2/all",true);
request1.send();
request1.onload=function(){
    var data=JSON.parse(request1.response);
    console.log(data);
    callback(data,0);
}
   function callback(data,i){
       if(i<data.length)
       {
        var lat=data[i].latlng[0];
        var lon=data[i].latlng[1];
        if(lat&&lon){
        var request2=new XMLHttpRequest();
        var keyId="8f3357a4c0e56a5d38999b62b91799eb";
        let url="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+keyId;
        var request2=new XMLHttpRequest();
        request2.open("GET",url,true);
        request2.send();
        request2.onload=function()
        {
            var data2=JSON.parse(request2.response);        
            console.log(data[i].name+":"+data2.main.temp);
            callback(data,++i);
        }
       }
       else
        {
        callback(data,++i);
        }
    }
    
}
    