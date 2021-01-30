let playerToPlay="O";
let playerToStart="Human";
let secondPlayer="AKBot";
let arr=[1,2,3,4,5,6,7,8,9];
let difArr=[1,3,5,7,9];
let botArr=[],humArr=[];
let ele,flag=false;
let start=true;
let matching=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function goHome() {
     location.href="index.html";
}

function disable(){
    difficultLevelSelect.disabled=true;
    playerToStartSelect.disabled=true;
}

function refreshPage(){
    window.location.reload();
} 

function play(element){
    disable();
    if(difficultLevelSelect.value=="Easy"){
        element.innerText=playerToPlay;
        element.disabled=true;
        element.flag=true;
        flag=findMatch();
        if(!flag){
            playerToPlay=(playerToPlay=='O')?'X':'O';            
            spanToPlayName.innerText=playerToPlay;            
            let eleNum=+element.getAttribute("name");
            let delno=arr.indexOf(eleNum);
            arr.splice(delno,1);
    
            var cell = Math.floor(Math.random() * arr.length-1)+1;
            let cellNo=arr.splice(cell-1,1);
            ele=document.getElementsByName(cellNo)[0];
            ele.innerText=playerToPlay;  
            ele.flag=true;  
            ele.disabled=true;      
            flag=findMatch();            
            if(!flag){
            playerToPlay=(playerToPlay=='O')?'X':'O';
            spanToPlayName.innerText=playerToPlay;             
            }
        }  
    }    
    else{
        element.innerText=playerToPlay;
        element.disabled=true;
        element.flag=true;
        flag=findMatch();
        if(!flag){
            playerToPlay=(playerToPlay=='O')?'X':'O';            
            spanToPlayName.innerText=playerToPlay;            
            let eleNum=+element.getAttribute("name");
            let delno=arr.indexOf(eleNum);
            let deldifNo=difArr.indexOf(eleNum);
            arr.splice(delno,1);
            difArr.splice(deldifNo,1);
            humArr.push(eleNum);
            humArr.sort(function(a, b){return a - b});
            
            console.log(arr,difArr,botArr,humArr);
            if(start)
            {
                start=false;
                let cellNo;
                if(cell5.disabled==true)
                {
                var cell = Math.floor(Math.random() * (difArr.length)-1);
                cellNo=difArr.splice(cell,1)[0]; 
                }
                else{
                    cellNo=5; 
                }
                makeMove(cellNo);                
                arr.splice(arr.indexOf(cellNo),1);
                difArr.splice(difArr.indexOf(cellNo),1); 
            }

            else if((cellNo=chanceToWin())!=null){
                makeMove(cellNo);
                arr.splice(arr.indexOf(cellNo),1);
                difArr.splice(difArr.indexOf(cellNo),1);
            }

            
            else if((cellNo=opponentChanceToWin())!==null)
            {
                makeMove(cellNo);   
                arr.splice(arr.indexOf(cellNo),1);
                difArr.splice(difArr.indexOf(cellNo),1);             
            }

            else {
                var cell = Math.floor(Math.random() * (arr.length)-1)+1;
                let cellNo=arr.splice(cell-1,1);  
                difArr.splice(difArr.indexOf(cellNo),1); 
                makeMove(cellNo);
            }
        }
    }       
}

function makeMove(cellNo)
{
    ele=document.getElementsByName(cellNo)[0];
    ele.innerText=playerToPlay; 
    ele.disabled=true;
    ele.flag=true; 
    flag=findMatch(); 
    if(!flag)            
    { 
        playerToPlay=(playerToPlay=='O')?'X':'O';                
        spanToPlayName.innerText=playerToPlay;        
        botArr.push(cellNo); 
        botArr.sort(function(a, b){return a - b});   
        
    }
}

function chanceToWin(){
    return checkchanceToWin(botArr);
}

function opponentChanceToWin(){
    return checkchanceToWin(humArr);
}

function checkchanceToWin(array)
{
    let flag=false;
    if(array.length>=2)
    {
        for(let i=0;i<arr.length;i++)
        {
            array.push(arr[i]);
            const getAllSubsets = 
            theArray => theArray.reduce(
              (subsets, value) => subsets.concat(
               subsets.map(set => [value,...set])
              ),
              [[]]
            );
            
            let subsetArr=getAllSubsets(array);
            subsetArr.forEach(item => {
                if(item.length==3){
                item.sort(function(a, b){return a - b});
                let contains = matching.some(elem =>{
                    return JSON.stringify(item) === JSON.stringify(elem);
                  });
                if(contains)
                {
                    array.pop();
                    flag=true;                    
                }
                }
            
            }); 
        if(flag)return arr[i];      
        array.pop();
        }
    }
    
    return null;
}


function changePlayerToStart() {
    playerToStart=playerToStartSelect.value;
    secondPlayer=(playerToStart=="Human")?"AKBot":"Human";
    player1.innerText="Player 1: "+playerToStart+": 'O'";
    player2.innerText="Player 2: "+secondPlayer+": 'X'";
    if(playerToStart==="AKBot")
    {
        if(difficultLevelSelect.value=="Easy"){
        var cell = Math.floor(Math.random() * (arr.length)-1)+1;
        let cellNo=arr.splice(cell-1,1);
        let ele=document.getElementsByName(cellNo)[0];
        ele=document.getElementsByName(cellNo)[0];
        ele.innerText=playerToPlay;
        playerToPlay=(playerToPlay=='O')?'X':'O';
        ele.disabled=true;
        spanToPlayName.innerText=playerToPlay;
        ele.flag=true;
        disable();
        }
        else{
            start=false;
            let cellNo;
            var cell = Math.floor(Math.random() * (difArr.length)-1);
            cellNo=difArr.splice(cell,1)[0]; 
            arr.splice(arr.indexOf(cellNo),1);
            makeMove(cellNo);               
        }
    }
}


 function findMatch(){
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
       spanToPlayName.innerText="'"+playerToPlay+"'"+"  wins";
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

       swal("Congrats!", "'"+ playerToPlay+"'"+"  won!!!", "success");
       return true;
    }
    else if(cell1.flag&&cell2.flag&&cell3.flag&&cell4.flag&&cell5.flag&&cell6.flag&&cell7.flag&&cell8.flag&&cell9.flag)
    {
        spanToPlay.innerText="";
        spanToPlayName.innerText="Match Draw";
        swal("Match Draw", "click on New Game button to play another", "success");
        return true;
    }
}






let body=document.body;

let singleplayTictacDiv=document.createElement("div");
singleplayTictacDiv.setAttribute("id","singleplayertictac");
singleplayTictacDiv.classList.add("container","singleplayerTicTac");

let h1Title=document.createElement("h4");
h1Title.setAttribute("id","titleSinglePlayer");
h1Title.setAttribute("class","container");
h1Title.innerText="Tic Tac Toe- Single Player";

let levelcheckDiv=document.createElement("div");
levelcheckDiv.setAttribute("id","levelset");
levelcheckDiv.setAttribute("class","row");

let difficultLevelDiv=document.createElement("span");
difficultLevelDiv.setAttribute("id","difficultLevelDiv");
difficultLevelDiv.setAttribute("class","col-6");
let difficultlevelLabel=document.createElement("label");
difficultlevelLabel.setAttribute("id","difficultLevelLabel");
difficultlevelLabel.innerText="Difficult Level";
let difficultLevelSelect=document.createElement("select");
difficultLevelSelect.setAttribute("id","difficultLevel");
difficultLevelSelect.setAttribute("name","DifficultLevel container")
let dlOpt1=document.createElement("option");
dlOpt1.setAttribute("value","Easy");
dlOpt1.innerText="Easy";
let dlOpt2=document.createElement("option");
dlOpt2.setAttribute("value","Hard");
dlOpt2.innerText="Hard";
difficultLevelSelect.append(dlOpt1,dlOpt2);
difficultLevelDiv.append(difficultlevelLabel,difficultLevelSelect);

let playertoStartDiv=document.createElement("span");
playertoStartDiv.setAttribute("id","playerToStartDiv");
playertoStartDiv.setAttribute("class","col-6");
let playerToStartLabel=document.createElement("label");
playerToStartLabel.setAttribute("id","playerToStartLabel");
playerToStartLabel.innerText="Start Player";
let playerToStartSelect=document.createElement("select");
playerToStartSelect.setAttribute("id","playerToStart");
playerToStartSelect.setAttribute("name","playerToStart container");
playerToStartSelect.setAttribute("onchange","changePlayerToStart()")
let ptsOpt1=document.createElement("option");
ptsOpt1.setAttribute("value","Human");
ptsOpt1.innerText="Human";
let ptsOpt2=document.createElement("option");
ptsOpt2.setAttribute("value","AKBot");
ptsOpt2.innerText="AKBot";
playerToStartSelect.append(ptsOpt1,ptsOpt2);
playertoStartDiv.append(playerToStartLabel,playerToStartSelect);

levelcheckDiv.append(difficultLevelDiv,playertoStartDiv);

let playersdiv=document.createElement("div");
playersdiv.setAttribute("id","playerinfo");
playersdiv.setAttribute("class","row");
let player1=document.createElement("div");
player1.setAttribute("id","player1");
player1.setAttribute("class","col-6");
player1.innerText="Player 1: "+playerToStart+": 'O'";
let player2=document.createElement("div");
player2.setAttribute("id","player2");
player2.setAttribute("class","col-6");
player2.innerText="Player 2: "+secondPlayer+": 'X'";
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
cell1.setAttribute("name","1");
cell1.setAttribute("flag","false");
cell1.setAttribute("class","col-3 col-sm-4 col-md-3");
cell1.setAttribute("onclick","play(this)");


let cell2=document.createElement("button");
cell2.setAttribute("id","cell2");
cell2.setAttribute("name","2");
cell2.setAttribute("flag","false");
cell2.setAttribute("class","col-3 col-sm-4 col-md-3");
cell2.setAttribute("onclick","play(this)");

let cell3=document.createElement("button");
cell3.setAttribute("id","cell3");
cell3.setAttribute("name","3");
cell3.setAttribute("flag","false");
cell3.setAttribute("class","col-3 col-sm-4 col-md-3");
cell3.setAttribute("onclick","play(this)");

let cell4=document.createElement("button");
cell4.setAttribute("id","cell4");
cell4.setAttribute("name","4");
cell4.setAttribute("flag","false");
cell4.setAttribute("class","col-3 col-sm-4 col-md-3");
cell4.setAttribute("onclick","play(this)");

let cell5=document.createElement("button");
cell5.setAttribute("id","cell5");
cell5.setAttribute("name","5");
cell5.setAttribute("flag","false");
cell5.setAttribute("class","col-3 col-sm-4 col-md-3");
cell5.setAttribute("onclick","play(this)");

let cell6=document.createElement("button");
cell6.setAttribute("id","cell6");
cell6.setAttribute("name","6");
cell6.setAttribute("flag","false");
cell6.setAttribute("class","col-3 col-sm-4 col-md-3");
cell6.setAttribute("onclick","play(this)");

let cell7=document.createElement("button");
cell7.setAttribute("id","cell7");
cell7.setAttribute("name","7");
cell7.setAttribute("flag","false");
cell7.setAttribute("class","col-3 col-sm-4 col-md-3");
cell7.setAttribute("onclick","play(this)");

let cell8=document.createElement("button");
cell8.setAttribute("id","cell8");
cell8.setAttribute("name","8");
cell8.setAttribute("flag","false");
cell8.setAttribute("class","col-3 col-sm-4 col-md-3");
cell8.setAttribute("onclick","play(this)");

let cell9=document.createElement("button");
cell9.setAttribute("id","cell9");
cell9.setAttribute("name","9");
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

singleplayTictacDiv.append(h1Title,levelcheckDiv,playersdiv,toPlaydiv,playAreaDiv,newGamediv,homediv);
body.appendChild(singleplayTictacDiv);