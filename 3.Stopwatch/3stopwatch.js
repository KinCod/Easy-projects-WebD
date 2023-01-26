Date.now();   //gives us the current date

let time = document.getElementById("hms");// for the timer
let start = document.getElementById("s");
let pausebtn = document.getElementById("p");
let reset = document.getElementById("r");

let startTime=0;        // start time (current time-start time gives elapsed time)
let elapsedTime= 0;     // the time that have elapsed since the clock started
let intervalId;       // used for the set interval
let pause = true;     //it is for when we have clicked pause button

let hour=0,min=0,sec=0;  //the variables for showing hour min and sec



start.addEventListener("click",()=>{
    if(pause){
        pause = false;
        startTime = Date.now() - elapsedTime;

        intervalId = setInterval(update,75);
    }
});


function update(){
    elapsedTime = Date.now()-startTime;
    
    sec = Math.floor((elapsedTime/1000)%60);
    min = Math.floor((elapsedTime/(1000*60))%60);
    hour = Math.floor((elapsedTime/(1000*60*60))%60);

    sec = val(sec);
    min = val(min);
    hour = val(hour);

    time.textContent = `${hour}:${min}:${sec}`;
}


function val(input){
    return ("0"+input).length >2 ? input : "0"+input;
}

pausebtn.addEventListener("click",()=>{
    if(!pause){
        clearInterval(intervalId);  //stopped the working of interval
        pause =true;
    }
})


reset.addEventListener("click",()=>{
    clearInterval(intervalId);
    pause = true;
    startTime =0;
    elapsedTime =0;
    hour=0;
    min =0;
    sec =0;
    time.textContent = `0${hour}:0${min}:0${sec}`;
})

// console.log((Date.now()/1000)%60); //1sec = 1000ms
// console.log((Date.now()/(1000*60))%60); //1min  = 60 sec = 60*1000ms = 60000ms
// console.log((Date.now()/(1000*60*60))%60);// 1hr = 60 min = 60*60 sec = 60*60*1000ms = 3600000ms
