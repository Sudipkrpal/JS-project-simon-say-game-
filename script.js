let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","blue","green"];
let level = 0
let h2 = document.querySelector('h2');
let p = document.querySelector("p");
let highscore = 0
let started = false;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started = true;
        levelUp();  //--> calling our levelUp function after button click
       
    }
})
function  btnFlash(elements){
    elements.classList.add("flash")
    setTimeout(function(){
        elements.classList.remove("flash")
    },230) 
}
function levelUp(){
    level++   // level will increase from 0 to 1 after very first click
    h2.innerText=(`level ${level}`); // display of h2 will change to level 1 after very first click
    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`); //randColor will generate random elements from btns[] which is similar color class that we are chooing by queryselector.
    gameSeq.push(randColor); // as soon as random color generate we push that color to gameSeq[].
    console.log(gameSeq)
    btnFlash(randBtn); // now fllashing that random btn.
}
function checkAns(idx){   // here idx = userSeq.length-1 which is current length of userSeq[].
    if(gameSeq[idx]===userSeq[idx]){  // when element in both array matches.
        if(userSeq.length == gameSeq.length){  // now if all element unltil now in both array matches
            setTimeout(levelUp,1000); // levelUp function will be called after gap of 1 sec.
        }
    }else{
        h2.innerHTML=(`Game Over!your score is: <b> ${level} </b><br>Press any key to start.`);
        p.innerHTML=(`High score:${level}`);
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";  
        },1000);
        reset();
    }
}
function btnPress(){
    let btn = this     // 'this' means which buuton user is clicking and we storing 'this' in btn variable.
    btnFlash(btn)     // passing a user click button as argument for performing flash on that button.
    userColor = btn.getAttribute("id") // selecting the id of the button user clicked,id contain color which get store in usercolor variable.
    userSeq.push(userColor)  // pushing the userColor var to userSeq[].
    checkAns(userSeq.length-1); // passing currtent length of userSeq[]
}
let allBtns = document.querySelectorAll(".btn") // selecting all button with class btn
for(btn of allBtns){
    btn.addEventListener("click",btnPress); // when user click any button btnPress event will perform.
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}