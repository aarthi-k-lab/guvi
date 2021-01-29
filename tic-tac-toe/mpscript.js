let playerToPlay="O";

function goHome() {
     location.href="index.html";
}

function play(element){
    element.innerText=playerToPlay;
    playerToPlay=(playerToPlay=='O')?'X':'O';
    element.disabled=true;
    spanToPlayName.innerText=playerToPlay;
    element.flag=true;
    let match1=(cell1.innerText==cell2.innerText)&&(cell1.innerText==cell3.innerText)&&cell1.flag;
    let match2=(cell4.innerText==cell5.innerText)&&(cell4.innerText==cell6.innerText)&&cell4.flag;
    let match3=(cell7.innerText==cell8.innerText)&&(cell7.innerText==cell9.innerText)&&cell7.flag;
    let match4=(cell1.innerText==cell4.innerText)&&(cell1.innerText==cell7.innerText)&&cell1.flag;
    let match5=(cell2.innerText==cell5.innerText)&&(cell2.innerText==cell8.innerText)&&cell2.flag;
    let match6=(cell3.innerText==cell6.innerText)&&(cell3.innerText==cell9.innerText)&&cell3.flag;
    let match7=(cell1.innerText==cell5.innerText)&&(cell1.innerText==cell9.innerText)&&cell1.flag;
    let match8=(cell3.innerText==cell5.innerText)&&(cell3.innerText==cell7.innerText)&&cell3.flag;
    if(match1||match2||match3||match4||match5||match6||match7||match8)
    {
       cell1.disabled=true,cell2.disabled=true,cell3.disabled=true,cell4.disabled=true,cell5.disabled=true,cell6.disabled=true,cell7.disabled=true,
       cell8.disabled=true,cell9.disabled=true;
       spanToPlay.innerText="";
       spanToPlayName.innerText="'"+element.innerText+"'"+"  wins";
       if(match1)
       {
            cell1.classList.add("strikethroughhori");
            cell2.classList.add("strikethroughhori");
            cell3.classList.add("strikethroughhori");
       }
       else if(match2){
            cell4.classList.add("strikethroughhori");
            cell5.classList.add("strikethroughhori");
            cell6.classList.add("strikethroughhori");
       }
       else if(match3){
            cell7.classList.add("strikethroughhori");
            cell8.classList.add("strikethroughhori");
            cell9.classList.add("strikethroughhori");
        }
        
       else if(match4)
       {
            cell1.classList.add("strikethroughvert");
            cell4.classList.add("strikethroughvert");
            cell7.classList.add("strikethroughvert");
       }
       else if(match5){
            cell2.classList.add("strikethroughvert");
            cell5.classList.add("strikethroughvert");
            cell8.classList.add("strikethroughvert");
       }
       else if(match6){
            cell3.classList.add("strikethroughvert");
            cell6.classList.add("strikethroughvert");
            cell9.classList.add("strikethroughvert");
        } 
        else if(match7)
       {
            cell1.classList.add("strikethroughdiag2");
            cell5.classList.add("strikethroughdiag2");
            cell9.classList.add("strikethroughdiag2");
       }
       else if(match8){
            cell3.classList.add("strikethroughdiag");
            cell5.classList.add("strikethroughdiag");
            cell7.classList.add("strikethroughdiag");
       }

       swal("Congrats!", "'"+ element.innerText+"'"+"  won!!!", "success");
    }
    else if(cell1.flag&&cell2.flag&&cell3.flag&&cell4.flag&&cell5.flag&&cell6.flag&&cell7.flag&&cell8.flag&&cell9.flag)
    {
        spanToPlay.innerText="";
        spanToPlayName.innerText="Match Draw";
        swal("Match Draw", "click on New Game button to play another", "success");
    }
}

function refreshPage(){
    window.location.reload();
} 

let body=document.body;

let multiplayTictacDiv=document.createElement("div");
multiplayTictacDiv.setAttribute("id","multiplayertictac");
multiplayTictacDiv.classList.add("container","multiplayerTicTac");

let h1Title=document.createElement("h1");
h1Title.setAttribute("id","titleMultiPlayer");
h1Title.setAttribute("class","container");
h1Title.innerText="Tic Tac Toe- Multi Player";

let playersdiv=document.createElement("div");
playersdiv.setAttribute("id","playerinfo");
playersdiv.setAttribute("class","row");

let player1=document.createElement("div");
player1.setAttribute("id","player1");
player1.setAttribute("class","col-6");
player1.innerText="Player 1: 'O'";

let player2=document.createElement("div");
player2.setAttribute("id","player2");
player2.setAttribute("class","col-6");
player2.innerText="Player 2: 'X'";

playersdiv.append(player1,player2);

let toPlaydiv=document.createElement("p");
toPlaydiv.setAttribute("id","toPlay");
toPlaydiv.setAttribute("class","container");
let spanToPlay=document.createElement("span");
spanToPlay.innerText="To Play: ";
let spanToPlayName=document.createElement("span");
spanToPlayName.innerText=playerToPlay;
toPlaydiv.append(spanToPlay,spanToPlayName);

let playAreaDiv=document.createElement("div");
playAreaDiv.setAttribute("id","playarea");
playAreaDiv.setAttribute("class","playareadiv row");

let cell1=document.createElement("button");
cell1.setAttribute("id","cell1");
cell1.setAttribute("flag","false");
cell1.setAttribute("class","col-3 col-sm-4 col-md-3");
cell1.setAttribute("onclick","play(this)");

let cell2=document.createElement("button");
cell2.setAttribute("id","cell2");
cell2.setAttribute("flag","false");
cell2.setAttribute("class","col-3 col-sm-4 col-md-3");
cell2.setAttribute("onclick","play(this)");

let cell3=document.createElement("button");
cell3.setAttribute("id","cell3");
cell3.setAttribute("flag","false");
cell3.setAttribute("class","col-3 col-sm-4 col-md-3");
cell3.setAttribute("onclick","play(this)");

let cell4=document.createElement("button");
cell4.setAttribute("id","cell4");
cell4.setAttribute("flag","false");
cell4.setAttribute("class","col-3 col-sm-4 col-md-3");
cell4.setAttribute("onclick","play(this)");

let cell5=document.createElement("button");
cell5.setAttribute("id","cell5");
cell5.setAttribute("flag","false");
cell5.setAttribute("class","col-3 col-sm-4 col-md-3");
cell5.setAttribute("onclick","play(this)");

let cell6=document.createElement("button");
cell6.setAttribute("id","cell6");
cell6.setAttribute("flag","false");
cell6.setAttribute("class","col-3 col-sm-4 col-md-3");
cell6.setAttribute("onclick","play(this)");

let cell7=document.createElement("button");
cell7.setAttribute("id","cell7");
cell7.setAttribute("flag","false");
cell7.setAttribute("class","col-3 col-sm-4 col-md-3");
cell7.setAttribute("onclick","play(this)");

let cell8=document.createElement("button");
cell8.setAttribute("id","cell8");
cell8.setAttribute("flag","false");
cell8.setAttribute("class","col-3 col-sm-4 col-md-3");
cell8.setAttribute("onclick","play(this)");

let cell9=document.createElement("button");
cell9.setAttribute("id","cell9");
cell9.setAttribute("flag","false");
cell9.setAttribute("class","col-3 col-sm-4 col-md-3");
cell9.setAttribute("onclick","play(this)");

playAreaDiv.append(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8,cell9);

let newGamediv=document.createElement("div");
newGamediv.setAttribute("id","newgame");
let newGameButton=document.createElement("button");
newGameButton.setAttribute("id","newgamebtn");
newGameButton.setAttribute("class","btn btn-primary btn-lg");
newGameButton.innerText="New Game";
newGameButton.setAttribute("onclick","refreshPage()");
newGamediv.appendChild(newGameButton);

let homediv=document.createElement("div");
homediv.setAttribute("id","homediv");
let homeButton=document.createElement("button");
homeButton.setAttribute("id","homebtn");
homeButton.setAttribute("class","btn btn-primary btn-lg");
homeButton.setAttribute("onclick","goHome()");
homeButton.innerText="Go- Home";
homediv.appendChild(homeButton);

multiplayTictacDiv.append(h1Title,playersdiv,toPlaydiv,playAreaDiv,newGamediv,homediv);
body.appendChild(multiplayTictacDiv);