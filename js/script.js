/*
class hora(){
    var horaAtual = new Date();
    
    var hora = horaAtual.getHours();
    var minuto = horaAtual.getMinutes();
    var segundo = horaAtual.getSeconds();
    
    function getHora(){
        return this.hora;
    }
    function getMinuto(){
        return this.minuto;
    }
    function getSegundo(){
        return this.segundo;
    }
}

function hora(){
    var pegaHora = new Data();
    
    return pegaHora.getHours();
}

function minuto(){
    var pegaMinuto = new Data();
    return pegaMinuto.getMinutes();
}

function segundo(){
    var pegaSegundo = new Data();
    return pegaSegundo.getSeconds();
}
*/
//let myWindow = window.open("", "", "width=200,height=100");
function time(){
    var currentTime=new Date();
    var hour=currentTime.getHours();
    var minute=currentTime.getMinutes();
    var second=currentTime.getSeconds();
    
    document.getElementById('txt').innerHTML=hour+":"+minute+":"+second;
    
    if(hour == 12 && minute == 1 && second == 1){    
        //myWindow.focus();
        window.open("", "", "width=400,height=200");
        alert("Almoço!")
    }
    
    setTimeout('time()',500);
}

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
 if(minute == 14){
    window.open("", "", "width=400,height=200");
    alert("Bater o ponto");
    reset();
    pause();
     
 }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}