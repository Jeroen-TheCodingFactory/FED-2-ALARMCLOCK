//var hourUp hier zit het HTML element in met de ID js--hour-up dat is een span
var hourUp = document.getElementById("js--hour-up");
var hourDown = document.getElementById("js--hour-down");


var hour = 0;
var timeHour = document.getElementById("js--time-hour");
hourUp.onclick = function(){
    hour += 1;
    if(hour > 23){
        hour = 0;
    }
    if(hour < 10){
        timeHour.innerText = "0" + hour;
    }
    else{
        timeHour.innerText = hour;
    }
    
}

hourDown.onclick = function(){
    hour -= 1;
    if(hour < 0){
        hour = 23;
    }
    if(hour < 10){
        timeHour.innerText = "0" + hour;
    }
    else{
        timeHour.innerText = hour;
    }
}

var minute = 0;
var timeMinute = document.getElementById("js--time-minute");
var minuteUp = document.getElementById("js--minute-up");
minuteUp.onclick = function(){
    minute += 1;
    if(minute > 59){
        minute = 0;
    }
    if(minute < 10){
        timeMinute.innerText = "0" + minute;
    }
    else{
        timeMinute.innerText = minute;
    }

}
var minuteDown = document.getElementById("js--minute-down");
minuteDown.onclick = function(){
    minute -= 1;
    if(minute < 0){
        minute = 59;
    }
    if(minute < 10){
        timeMinute.innerText = "0" + minute;
    }
    else{
        timeMinute.innerText = minute;
    }
}

var toggle = document.getElementById("js--toggle");
var timer = null;
toggle.checked = false;
var getTimerOut = null;
var dialogue = document.getElementById("js--dialogue");
var audio = new Audio("/sounds/520674__zhr__relaxation-music-2.mp3");
toggle.onchange = function(){
    if(toggle.checked === true){
        dialogue.innerText = "Je alarm is gezet om " + hour + " uur en " + minute + " minuten.";
        toggle.classList.add("alarm__toggle--checked");
        dialogue.style.display = "flex";
        getTimerOut = setTimeout(function(){
            dialogue.style.display = "none";
        }, 3500)
        timer = setInterval(function(){
            var date = new Date();
            var dateHour = date.getHours(); 
            var dateMinute = date.getMinutes(); 
    
            if(hour === dateHour && minute === dateMinute){
               audio.play();
            }
        },1000);
    }
    else{
        dialogue.style.display = "none";
        toggle.classList.remove("alarm__toggle--checked");
        clearTimeout(getTimerOut);
        clearInterval(timer);
    }
}

