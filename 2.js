var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');

var robotChoise;
var cCount=0, pCount=0;
console.log(cPoint);
function pl(play){
    // alert(play);
    pChoice.innerText="Player Choice: "+play;
    var random = Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        cChoice.innerText= "Computer choice:scissors";
        robotChoise="scissors"
    }else if(random==1){
        cChoice.innerText= "computer choice:rock";
        robotChoise="rock"
    }else{
        cChoice.innerText= "computer choice: paper";
        robotChoise="paper"
    }
    if(play=="rock" && robotChoise=="scissors"){
        winner.innerText="Winner:Player";
    }else if (play=="scissors" && robotChoise=="paper"){
        winner.innerText="Winner:Player";
    }else if (play=="paper" && robotChoise=="rock"){
        winner.innerText="Winner:Player";
        pCount++;
    }else if (play==robotChoise){
          winner.innerText="Tie"
    }
    else{
        winner.innerText="Winner:Robot";
        cCount++;
    }
    cPoint.innerText="Computer"+cCount;
    pPoint.innerText="Player"+pCount;
}
function reset(reset){ 
    cPoint.innerText="Computer:0";
    pPoint.innerText="Player:0";
    cCount=0;
    pCount=0;
    winner.innerText="winner:";
    pChoice.innerText="Player Choice:";
    cChoice.innerText="Computer Choice:";
}