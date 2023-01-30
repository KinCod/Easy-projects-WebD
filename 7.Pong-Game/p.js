const canvas = document.getElementById("canvas");
const ctx  = canvas.getContext("2d");
const start= document.getElementById("b");

let score = document.getElementById("score");
let score2 = document.getElementById("score2");
let s1=0,s2=0;


const p1 = {
    x :0,           //origin
    y :0, 
    h : 80,
    w : 20,          
    dy:0            //movement along y

};
const p2={
    x : canvas.width - 20,
    y :0, 
    h : 80,
    w : 20,
    dy:0

};

const ball = {
    size :10,
    speed:1,
    x:canvas.width/2,
    y:canvas.height/2,
    dx:0,
    dy:0

};

let paddlespeed =4;

window.addEventListener("keydown",pmovement);

start.addEventListener("click",running);

randomballposition();

function running(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawplayer();
    
    
    drawball();
    ballmovement();
    updownplayer();
    constraint();
    requestAnimationFrame(running);

}


function randomballposition(){

    ball.speed = 3;
    let rand = Math.round(Math.random()*1);
    let num = Math.random()*ball.speed;
    if(rand == 0){
        ball.dx=3;
        ball.dy=num;
    }else{
        ball.dx=-2;
        ball.dy=-num;
    }
    ball.x =canvas.width/2;
    ball.y =canvas.width/2;
}

function drawplayer(){
    ctx.fillStyle = "green";
    ctx.fillRect(p1.x,p1.y,p1.w,p1.h);

    ctx.fillStyle = "red";
    ctx.fillRect(p2.x,p2.y,p2.w,p2.h);
}

function drawball(){
    ctx.fillStyle ="white";
    ctx.beginPath();
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2);
    ctx.fill();
}

function pmovement(event){
    const pkey = event.keyCode;
    
    const up = 38;          //for player 1
    const down = 40;

    const u = 87;           //for player 2
    const d = 83;

    switch(true){
        case(pkey == u ):
        p1.dy -= paddlespeed;
        break;

        case(pkey == d ):
        p1.dy += paddlespeed;
        break;

        case(pkey == up ):
        p2.dy -= paddlespeed;
        break;

        case(pkey == down ):
        p2.dy += paddlespeed;
        break;
    }
}

function ballmovement(){
    ball.y += ball.dy;
    ball.x += ball.dx;
}

function updownplayer(){
    p1.y += p1.dy;
    p2.y += p2.dy;
}

function constraint(){
    switch(true){
        case(p1.y+p1.h>canvas.height): 
        p1.y = canvas.height-p1.h;
        p1.dy=0;
        break;

        case(p2.y+p1.h>canvas.height): 
        p2.y = canvas.height-p2.h;
        p2.dy=0;
        break;

        case(p1.y<0): 
        p1.y =0;
        p1.dy=0;
        break;

        case(p2.y<0): 
        p2.dy=0;
        p2.y = 0;
        break;
    }

    switch(true){
        case(ball.x-ball.size<0):
        s2+=1;
        score2.textContent =s2;
        randomballposition();
        break;

        case(ball.x+ball.size>canvas.width): 
        s1+=1;
        score.textContent =s1;
        randomballposition();
        break;

        case(ball.y-ball.size<0): ball.dy*=-1;break;
        case(ball.y+ball.size>canvas.height): ball.dy*=-1;break;

        //case for if the ball hits player

        case(ball.x-ball.size<=p1.x+p1.w):
        if(ball.y>p1.y && ball.y<p1.y+p1.h){
            ball.dx*=-1;

            ball.dx+=0.5;
        }
        break;

        case(ball.x+ball.size>=p2.x):
        if(ball.y>p2.y && ball.y<p2.y+p2.h){
            ball.dx*=-1;
            
            ball.dx-=0.5;
        }
        break;
    }
}
