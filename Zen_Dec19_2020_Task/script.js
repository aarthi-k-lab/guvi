var i=10;
var variable;
function display(cb){
    setTimeout(cb,11000);
    variable=setInterval(mytimer,1000);    
}

function mytimer(){
    document.getElementById("timer").innerText =i;
    i--;
    if(i===0){
        stop();
    }
}

function stop(){
    clearInterval(variable);
}


function independence() {
    document.getElementById("timer").innerText ="Happy Independence Day!!!!!!";

}

display(independence);
