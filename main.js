let ganda=document.getElementById("ganda");
let mintune=document.getElementById("mintune");
let sec=document.getElementById("sec");


setInterval(()=>{
    let currenttime= new Date();
    // console.log(currenttime);
    ganda.innerHTML=(currenttime.getHours()<10?"0":"") +currenttime.getHours()
    mintune.innerHTML=(currenttime.getMinutes()<10?"0":"") +currenttime.getMinutes()
    sec.innerHTML=(currenttime.getSeconds()<10?"0":"") +currenttime.getSeconds()
} ,1000)