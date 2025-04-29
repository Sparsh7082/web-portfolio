let timeDisplay = document.querySelector(".timer");
       let startBtn = document.querySelector("#start");
       let stopBtn = document.querySelector("#stop");
       let resetBtn = document.querySelector("#reset");
       let timer = null;
       let [hours,minutes,seconds] = [0,0,0];


       function updateDisplay(){
           let h = hours <10?`0${hours}`: hours;
           let m = minutes <10?`0${minutes}`: minutes;
           let s = seconds <10?`0${seconds}`:seconds;
           timeDisplay.textContent = `${h}: ${m}: ${s}`
       }
       function startTimer(){
           if(timer !== null) return ;
           timer =setInterval(()=>{
               seconds++;
               if(seconds ===60){
                   seconds = 0;
                   minutes++;
              
               if(minutes===60){
                   minutes = 0;
                   hours ++;
               }
           }
           updateDisplay()
           },1000);
       }


       function stopTimer(){
           clearInterval(timer);
           timer = null;
       }


       function resetTimer(){
           clearInterval(timer);
           timer =null;
           [hours,minutes,seconds]=[0,0,0];
           updateDisplay();
       }


       startBtn.addEventListener("click",startTimer);
       stopBtn.addEventListener("click",stopTimer);
       resetBtn.addEventListener("click",resetTimer);
