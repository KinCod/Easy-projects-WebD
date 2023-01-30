// means for drawing graphics
// useful for gaming, drawing and datavisualisation

let can = document.getElementById("c");
can.style.borderStyle = "solid";
can.style.borderColor = "red";

let context = can.getContext("2d");

// context.lineWidth = 4;
// context.strokeStyle = "blue";
// context.fillStyle = "green";

// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(200,200);
// context.lineTo(250,0);
// context.lineTo(0,0);
// context.stroke();
// context.fill();



//forming a rectange


context.strokeRect(25,10,200,125);


//can also make circle using context.arc;(x,y,r,Sangle,rangle,counterclockwise)



//draw text

context.filltext("text",100,100);