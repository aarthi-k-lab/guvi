function switchmultiplayer() {
    location.href="multiplayer.html";
}

function switchsingleplayer(){
    location.href="singleplayer.html";
}

let body=document.body;

let tictactoediv=document.createElement("div");
tictactoediv.setAttribute("id","tictactoemain");
tictactoediv.setAttribute("class","container tictactoemainclass");

let titlehead=document.createElement("h2");
titlehead.setAttribute("id","tictactoetitle");
titlehead.setAttribute("class","container title");
titlehead.innerText="Welcome to Tic Tac Toe Game. ";

let modediv=document.createElement("div");
modediv.setAttribute("id","modediv");
modediv.setAttribute("class","container modeclass");
modediv.innerText="Please select the mode";

let singleplayerdiv=document.createElement("div");
singleplayerdiv.setAttribute("id","singleplayerdiv");
let singleplayer=document.createElement("button");
singleplayer.setAttribute("id","singleplayerbtn");
singleplayer.setAttribute("class","btn btn-primary btn-lg");
singleplayer.setAttribute("onclick","switchsingleplayer()");
singleplayer.innerText="Single Player";
singleplayerdiv.appendChild(singleplayer);

let multiplayerdiv=document.createElement("div");
multiplayerdiv.setAttribute("id","multiplayerdiv");
let multiplayer=document.createElement("button");
multiplayer.setAttribute("id","multiplayerbtn");
multiplayer.setAttribute("class","btn btn-primary btn-lg");
multiplayer.setAttribute("onclick","switchmultiplayer()");
multiplayer.innerText="Multi Player";
multiplayerdiv.appendChild(multiplayer);

tictactoediv.append(titlehead,modediv,singleplayerdiv,multiplayerdiv);

body.appendChild(tictactoediv);