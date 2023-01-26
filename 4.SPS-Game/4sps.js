let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let player = document.getElementById("player");
let comp = document.getElementById("computer");
let res = document.getElementById("result");

let random;
let valcmp;            //stores the val of random(sign of comp)
let valpl;            //stores val for the person



rock.addEventListener("click",()=>{
        player.textContent = `Player : Rock`;
        valcmp = shape();
        valpl = 1;
        resu(valcmp,valpl);
    
})
paper.addEventListener("click",()=>{
    player.textContent = `Player : Paper`;
    valcmp = shape();
    valpl = 2;

    resu(valcmp,valpl);
})
scissor.addEventListener("click",()=>{
    player.textContent = `Player : Scissors`
    valcmp = shape();
    valpl = 3;

    resu(valcmp,valpl);
})



 function shape(){
    random = Math.floor(Math.random()*3)+1;
    if(random == 1) comp.textContent = `Computer : Rock`;
    else if(random ==2) comp.textContent = `Computer : Paper`;
    else comp.textContent = `Computer : Scissors`;
    return random;
 }

 function resu(cmp,pl){       //takes user and comp input and gives result
    if(cmp==pl) res.textContent = `DRAW!!`;
    else if(cmp==1 && pl==2) res.textContent = `Player wins!`;
    else if(cmp==2 && pl==3) res.textContent = `Player wins!`;
    else if(cmp==3 && pl==1) res.textContent = `Player wins!`;
    else res.textContent = `Computer Wins!`;

 }