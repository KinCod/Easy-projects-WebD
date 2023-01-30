const gameBoard = document.getElementById("board");     //this is basically the id of the canvas
const context = gameBoard.getContext("2d");             //this is used to connect the canvas with the properties 

const scoreText = document.getElementById("score");     // prints the score
const resetBtn  =document.getElementById("reset");      // Resets the score
const width = gameBoard.width;                          //width of the canvas
const height = gameBoard.height;                        // height of the canvas

const boardBg = "black";                                // using this we'll set the background of the canvas using rect fill
const snakeColor = "lightgreen";                        // this is the snakes color used with attribute - fillrect for every snake obj
const snakeBorder = "black";                            // border of the snake pixels - done using the attr - storke rect
const foodColor = "red";                                //Color of the food

const unitSize = 15;                                    // size of one unit in whole game (pixel of snake,size of food)

let gameRunning = false;                                //if the game is running or not
let xVel = unitSize;                                    //movement along x;
let yVel = 0;           
let foodX;                                              // coordinates at which food will be located randomly
let foodY;
let score=0;                                            // Initially will be zero

let snake = [                                           // made an object to store the snake pixels
    {x:unitSize*4,y:0},                                 // will start from top of canvas so y is 0 & x increases as the snake has 
    {x:unitSize*3,y:0},                                 // multiple pixel body(  ||    ||    ||    ||   and so on)
                                                        //                     (0,0) (1,0) (2,0) (3,0)
    {x:unitSize*2,y:0}, 
    {x:unitSize*1,y:0},                                 // size along x axis initially (box of unitsize*unitsize pixel)
    {x:0,y:0}                                           //making object for pixel part of body 
]



window.addEventListener("keydown",changeDirection);     //This api detects the key clicked and sends as an event to chage dir
resetBtn.addEventListener("click",resetGame);           //Button for resetting game which click goes to resetGame func

gameStart();


function gameStart(){                                   //Game Starts (this is parent func inside which we'll keep all elements)
    gameRunning=true;
    scoreText.textContent = score;
    createfood();                                   //start game and create the apple
    drawFood();                                     //draw the apple using the given x and y                    
    nextTick();                                     //it will move the snake according to the input given(runs in ms speed)
};
function nextTick(){
    let interval =150;
    
    if(gameRunning){
        setTimeout(() => {
            clearBoard();                          // Initially clean the canvas
            drawFood();                            // draw new food
            moveSnake();                           // by responding to the arrow keys
            drawSnake();                           // drawing the snake each 100ms
            checkGameOver();
            nextTick();
        }, interval);
    }else{
        displayGameOver();                         // obviously if game is not running the the game is over LOL
    }
};
function clearBoard(){
    context.fillStyle = boardBg;
    context.fillRect(0,0,width,height);
};
function createfood(){
    function randomFood(min,max){
        randNum = Math.round((Math.random()*(max-min)+min)/unitSize) *unitSize;
        return randNum;
    }
    
    foodX = randomFood(0,width-unitSize);
    foodY = randomFood(0,height-unitSize);
};
function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodX,foodY,unitSize,unitSize);
};
function moveSnake(){
    // first create head in the direction we move and then delete the tail
        const head = {x: snake[0].x + xVel,
                      y: snake[0].y +yVel };
                      snake.unshift(head);

                      if(snake[0].x == foodX && snake[0].y==foodY){            //if food is eaten
                                score+=1;
                                scoreText.textContent = score;
                                createfood();
                      }else{
                        snake.pop();
                      }
};
function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart =>{
        context.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);    //filling the snake body with rect that are at chromatic positions  
        context.strokeRect(snakePart.x,snakePart.y,unitSize,unitSize);  //stroke style for color and this for implementation of border
    })
};
function changeDirection(event){
    const keyPressed = event.keyCode;            //key pressed gives us the key number which will be used;

    const LEFT=37;
    const UP =38;
    const RIGHT=39;
    const DOWN=40;

    const goingUp = (yVel == -unitSize);
    const goingDown = (yVel == unitSize) 
    const goingLeft = (xVel == -unitSize); 
    const goingRight = (xVel ==unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):                 // we dont wanna go to the opposite dir as snake eats itself
        xVel = -unitSize;
        yVel =0;
        break;

        case(keyPressed == RIGHT && !goingLeft):                 
        xVel = unitSize;
        yVel =0;
        break;

        case(keyPressed == UP && !goingDown):                 
        yVel = -unitSize;
        xVel=0;
        break;

        case(keyPressed == DOWN && !goingUp):                 
        yVel = unitSize;
        xVel =0;
        break;

    }

};
function checkGameOver(){
    switch(true){                           // if the snake crosses the sides of canvas
        case(snake[0].x <0):
        gameRunning =false;
        break;
        case(snake[0].x >=width):
        gameRunning =false;
        break;
        case(snake[0].y <0):
        gameRunning =false;
        break;
        case(snake[0].y >=height):
        gameRunning =false;
        break;
    }

    for(let i=1;i<snake.length;i++){        //looping through length of snake array to see if head matches the coordinates of any
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) gameRunning=false;
    }
};
function displayGameOver(){
    //Displaying game over in Canvas
    gameRunning=false
    context.font = "30px Mv Boli";
    context.fillStyle = "gold";
    context.textAlign = "center";
    context.fillText("Game Over!!!",width/2,height/2);
};
function resetGame(){
    score =0;
    xVel=unitSize;
    yVel=0;
    
    snake = [
        {x:unitSize*4,y:0}, 
        {x:unitSize*3,y:0}, 
        {x:unitSize*2,y:0}, 
        {x:unitSize*1,y:0},           // size along x axis initially (box of unitsize*unitsize pixel)
        {x:0,y:0}                     //making object for pixel part of body 
    ]

    gameStart();
};
