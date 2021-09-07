//Get handels to clock hands
const HOURHAND = document.querySelector("#hourHand");
const MINUTEHAND = document.querySelector("#minHand");
const SECONDHAND = document.querySelector("#secHand");

//initial clock values
const TRANSLATE = "translate(-349 -182)";
var rotate = "rotate (0 155 155)";

//set a initial defalt clock value
HOURHAND.setAttribute("transform",rotate + " " + TRANSLATE);
MINUTEHAND.setAttribute("transform",rotate + " " + TRANSLATE);
SECONDHAND.setAttribute("transform",rotate + " " + TRANSLATE);





//get current time values*************Working here
var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();



//convert date components into degrees***************Working here
 var hrTicks = (hour*360/12);
 var minTicks = (minutes*360/60);
 var secTicks =(seconds*360/60);

 var hrPosition = hrTicks +(minTicks/60) ;
 var minPosition = minTicks + (secTicks/60);
 var secPosition = secTicks;





function runClock(){
    
hrPosition +=(3/360)  
minPosition +=(6/60)
secPosition +=6
    
rotate = "rotate (" + secPosition + " 155 155)";
SECONDHAND.setAttribute("transform",rotate + " " + TRANSLATE);
    

rotate = "rotate (" + minPosition + " 155 155)";
MINUTEHAND.setAttribute("transform",rotate + " " + TRANSLATE);

rotate = "rotate (" + hrPosition + " 155 155)";
HOURHAND.setAttribute("transform",rotate + " " + TRANSLATE);
    
}

//run the clock every second
var interval = setInterval(runClock, 1000);
