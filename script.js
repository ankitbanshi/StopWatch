let timedisplay=document.querySelector('.time');
let startbtn=document.getElementById('startbtn');
let stopbtn=document.getElementById('stopbtn');
let restartbtn=document.getElementById('rebtn');

let msec= 0o0;
let sec= 0o0;
let min= 0o0;

let timerid=null;
startbtn.addEventListener("click",function(){
  if(timerid !==null){
    clearInterval(timerid);
  }
  timerid=setInterval(starttimer, 10);

});
stopbtn.addEventListener("click",function(){
 
    clearInterval(timerid);
  

});
restartbtn.addEventListener("click",function(){

    clearInterval(timerid);
  
  timedisplay.innerHTML =`00 : 00 : 00`;
  msec = sec = min = 0o0;

});


function starttimer(){
  msec++;
  if(msec==100){
    msec=0;
    sec++;
    if(sec==60){
      sec=0;
      min++;

    }
  }
  let msecString= msec  < 10 ? `0${msec}` : msec;
  let secString= sec < 10 ? `0${sec}` : sec;
  let minString= min < 10 ? `0${min}` : min;
  timedisplay.innerHTML =`${minString } : ${secString} : ${msecString}`;
}