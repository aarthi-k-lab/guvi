var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: "2019",
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }


   //Looping over the accidents array and Changing atFaultForAccident from true to false.
   var accidents=myCar.accidents;
   for(var item in accidents)
   {
       accidents[item].atFaultForAccident=false;
   }
   console.log(accidents);


   //Printing dates of accident
   let str="Date of Accident:";
   console.log("Dates of accidents")
   for(var item of accidents)
   {
       str+=item.date+",";
       console.log(item.date);
   }

   var date=document.getElementById("dateofaccident");
   date.textContent=str;
