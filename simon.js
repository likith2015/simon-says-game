let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let i=0;
let highscore=0;

let color=["red","blue","orange","purple"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});
function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    //randombtn
    console.log(`level: ${level} `);
    let ind=Math.floor(Math.random()*4);
    let btns=document.querySelectorAll(".btn");
    // console.log(btns[ind]);
    setTimeout(function(){
    flash(btns[ind]);
    },1000);
    console.log(`generated color = ${btns[ind].getAttribute("id")}`);
    let color=btns[ind].getAttribute("id");
    gameSeq.push(color);
    userSeq=[];
    i=0;


}
function flash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},200);
}

function match(){
    // for()
    if(gameSeq[i]==userSeq[i]){
        console.log("game continue");
        i++;
        // levelup();
        if(gameSeq.length==userSeq.length){
            levelup();
        }
    }
    else{
        if(highscore<level){
            highscore=level;
        }
        h2.innerHTML=`Game Over! your score is ${level} 
        <br> your highest score is  ${highscore} <br> press any key to continue`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },250);
        reset1();
    }
}



function userBtnPress(){
    let btn=this;
    flash(btn);
    console.log(this);
    console.log(this.getAttribute("id"));
    let color=this.getAttribute("id");
    userSeq.push(color);
    match(i);
    
    console.log(i);

}
  
    let allBtn=document.querySelectorAll(".btn");
    for(btn of allBtn){
      btn.addEventListener("click",userBtnPress);
    }
  

function reset1(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}