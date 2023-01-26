// document.getElementById("d").onclick = ()=>window.alert("Sure?");

let ele = document.getElementById("d");

ele.addEventListener("click",event=>{
    setTimeout(event, 5000);
})


document.getElementById("para").contentEditable = "true";