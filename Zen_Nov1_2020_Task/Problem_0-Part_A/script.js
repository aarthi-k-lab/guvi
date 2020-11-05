
var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   

   //Adding height and weight to fluffy

   cat.height=24;
   cat.weight=4;

   //Updating fluffyy name
   cat.name="Fluffyy";

   //Listing all Fluffyy's friend
   let fluffyFriends=cat.catFriends;
   console.log(fluffyFriends);

   //Printing cat friend's name
   let catFriendsName="";
   for(let catFriend of fluffyFriends)
   {
    catFriendsName+=catFriend.name+","
   }
   console.log(catFriendsName);

   //Printing the total weight of flufyy's friends
   let totalweight=0;
   for(let catFriend of fluffyFriends)
   {
    totalweight+= catFriend.weight; 
   }
   console.log(totalweight);

   //Adding total activities of all cat
   let fluffysActivityCount=cat.activities.length;
   let totalActCnt=fluffysActivityCount;
   for(let catFriend of fluffyFriends)
   {
    totalActCnt+=catFriend.activities.length; 
   }
   console.log(totalActCnt);

   //Adding two mor activities to Fluffy's friends
   let barActivity=["sleep","play"];
   let fooActivity=["be grumpy", "running here and there"];
   for(let item in barActivity)
   cat.catFriends[0].activities.push(barActivity[item]);
   for(let item in fooActivity)
   cat.catFriends[1].activities.push(fooActivity[item]);

   //Updating fur color of bar
   cat.catFriends[0].furcolor="Ginger";

   let fluffyProfile=`name:${cat.name}
activities:${cat.activities}
weight:${cat.weight}
height:${cat.height}`;

var fluffy=document.getElementById("fluffyy");
fluffy.textContent=fluffyProfile;

var fluffyFrnd=document.getElementById("flufffyyFriends");
fluffyFrnd.textContent="Fluffy's Friends:"+catFriendsName;

   console.log(cat);




