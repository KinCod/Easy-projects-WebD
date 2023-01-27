let one = document.getElementById("0");
let two = document.getElementById("1");
let three = document.getElementById("2");
let four = document.getElementById("3");
let five = document.getElementById("4");
let six = document.getElementById("5");
let seven = document.getElementById("6");
let eight = document.getElementById("7");
let nine = document.getElementById("8");



const arrval = new Array(9).fill(0);

let win = document.getElementById("winner");
let turn = document.getElementById("turn");
let winn=false;

let val,pval;               // using num we'll see the turn,, pval is prev v of val used for the turn
let num=0;               // no for the turn 

function v(){
    if(num%2==0) {val = "X";pval="O";}
    else {val ="O";pval="X";}
}


setInterval(() => {
    if(num>8){win.textContent = `DRAW!!!`;setTimeout(() => {
        location.reload()
    }, 1000);}
    if(winn==true){
        setTimeout(() => {
            location.reload()
        }, 1000);
    }
}, 100);



one.addEventListener("click",()=>{
    if(arrval[0]==0){
        arrval[0]==1;
        v();
    one.textContent = val;
    one.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    
    num++;
    console.log(one.v);
    }
})

two.addEventListener("click",()=>{
    if(arrval[1]==0){
        arrval[1]=1;
    v();
    two.textContent = val;
    two.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})
three.addEventListener("click",()=>{
    if(arrval[2]==0){
        arrval[2]=1;
        v();
    three.textContent = val;
    three.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;

    }
    
})
four.addEventListener("click",()=>{
    if(arrval[3]==0){
        arrval[3]=1;
        v();
    four.textContent = val;
    four.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;
    }
    

})
five.addEventListener("click",()=>{
    if(arrval[4]==0){
        arrval[4]=1;
    v();
    five.textContent = val;
    five.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})
six.addEventListener("click",()=>{
    if(arrval[5]==0){
        arrval[5]=1;
    v();
    six.textContent = val;
    six.v = val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})
seven.addEventListener("click",()=>{
    if(arrval[6]==0){
        arrval[6]=1;
    v();
    seven.textContent = val;
    seven.v =val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})
eight.addEventListener("click",()=>{
    if(arrval[7]==0){
        arrval[7]=1;
    v();
    eight.textContent = val;
    eight.v=val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})
nine.addEventListener("click",()=>{
    if(arrval[8]==0){
        arrval[8]=1;
    v();
    nine.textContent = val;
    nine.v=val;
    turn.textContent = `${pval}'s turn`;
    winner();
    num++;}

})


function winner(){
    if(one.v == "X" && two.v=="X"&& three.v=="X"){
    win.textContent = `Winner : ${val}`;
    val = null; num=0;winn=true;  arrval.fill(0); }
    else if(four.v == "X" && five.v=="X"&& six.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0;winn=true; arrval.fill(0);    }
    else if(seven.v == "X" && eight.v=="X"&& nine.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0;winn=true; arrval.fill(0);    }    
    else if(one.v == "X" && four.v=="X"&& seven.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0;  winn=true;arrval.fill(0);   }    
    else if(two.v == "X" && five.v=="X"&& eight.v=="X"){
    win.textContent = `Winner : ${val}`;
    val = null; num=0;winn=true; arrval.fill(0);    }
    else if(three.v == "X" && six.v=="X"&& nine.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0; winn=true; arrval.fill(0);   }
    else if(three.v == "X" && six.v=="X"&& nine.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0;winn=true;arrval.fill(0);   }
    else if(one.v == "X" && five.v=="X"&& nine.v=="X"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0; winn=true;arrval.fill(0);  }  
        else if(three.v == "X" && five.v=="X"&& seven.v=="X"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0; winn=true;arrval.fill(0);  }     
    else if(one.v == "O" && two.v=="O"&& three.v=="O"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0; winn=true;arrval.fill(0);   }
        else if(four.v == "O" && five.v=="O"&& six.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0; winn=true;arrval.fill(0);    }
        else if(seven.v == "O" && eight.v=="O"&& nine.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0;winn=true; arrval.fill(0);    }    
        else if(one.v == "O" && four.v=="O"&& seven.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0;winn=true;arrval.fill(0);     }    
        else if(two.v == "O" && five.v=="O"&& eight.v=="O"){
        win.textContent = `Winner : ${val}`;
        val = null; num=0;winn=true; arrval.fill(0);    }
        else if(three.v == "O" && six.v=="O"&& nine.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0;winn=true; arrval.fill(0);    }
        else if(three.v == "O" && six.v=="O"&& nine.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0;winn=true;arrval.fill(0);   }
        else if(one.v == "O" && five.v=="O"&& nine.v=="O"){
            win.textContent = `Winner : ${val}`;
            val = null; num=0;winn=true;arrval.fill(0);   }  
            else if(three.v == "O" && five.v=="O"&& seven.v=="O"){
                win.textContent = `Winner : ${val}`;
                val = null; num=0;winn=true;arrval.fill(0);   }              
   }