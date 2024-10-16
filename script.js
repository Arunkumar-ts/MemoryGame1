var overlayer = document.querySelector(".overlayer");
var btn = document.querySelector(".btn");
var gamelayer = document.querySelector(".gamelayer");
var timediv=document.querySelector(".timediv");
var scorediv=document.querySelector(".scorediv");

// overlayer
btn.addEventListener("click", () => {
  overlayer.style.display = "none";
  gamelayer.style.display = "flex";
  timediv.style.display="flex";
  scorediv.style.display="flex";
});

var firstget, fbox, sbox, boxval, fcolor, scolor, fboxcolor, sboxcolor, color,score=0;
var timercall,playdata;

// box onclick function
function get(event) {
  // event.target.className
  // console.log(event.target.textContent);
  var box = document.getElementById(event.target.id);
  box.style.animation = "rot 0.8s linear 1";
  setTimeout(() => {
    box.style.animation = "";
  }, 1000);
  if (firstget) {
    if (firstget == 1) {
      firstget = 2;
      sbox = document.getElementById(event.target.id);
      if(sbox!=fbox){
        scolor = random1[Number(event.target.textContent)];
        sboxcolor = "color" + scolor;
        color=getcolor(sboxcolor);
        setTimeout(() => {
          box.style.backgroundColor = color;
        }, 100);
      }
      else{
        firstget=1;
      }
      if(fboxcolor==sboxcolor && fbox!=sbox){
        fbox.onclick=null;
        sbox.onclick=null;
        score++;
        scoreF(score);
        // console.log(score);
      }
    } 
    else {
        if(fboxcolor==sboxcolor && fbox!=sbox){
            firstget = 1;
            fbox = document.getElementById(event.target.id);
            fcolor = random1[Number(event.target.textContent)];
            scolor=0;
            fboxcolor = "color" + fcolor;
            color=getcolor(fboxcolor);
            setTimeout(() => {
                box.style.backgroundColor = color;
            }, 100);
        }
      else{
        fbox.style.backgroundColor = "rgba(2, 156, 156, 0.5)";
        sbox.style.backgroundColor = "rgba(2, 156, 156, 0.5)";
        firstget = 1;
        fbox = document.getElementById(event.target.id);
        fcolor = random1[Number(event.target.textContent)];
        scolor=0;
        fboxcolor = "color" + fcolor;
        color=getcolor(fboxcolor);
        setTimeout(() => {
            box.style.backgroundColor = color;
        }, 100);
      }
      
    }
  } 
  else {
    firstget = 1;
    fbox = document.getElementById(event.target.id);
    fcolor = random1[Number(event.target.textContent)];
    fboxcolor = "color" + fcolor;
    color=getcolor(fboxcolor);
    setTimeout(() => {
      box.style.backgroundColor = color;
    }, 100);
    timefun();
  }
}

// generating random numbers
var random1 = [];
random1.push(100);
while (random1.length <= 10) {
  var r = Math.ceil(Math.random() * 10);
  if (random1.indexOf(r) === -1) {
    random1.push(r);
  }
}
var random2 = [];
random2.push(100);
while (random2.length <= 10) {
  var r = Math.ceil(Math.random() * 10);
  if (random2.indexOf(r) === -1) {
    random2.push(r);
  }
}
for (let i = 1; i <= 10; i++) {
  random1.push(random2[i]);
}
function getcolor(boxcolor){
    if (boxcolor == "color1") {
        color = "red";
      } else if (boxcolor == "color2") {
        color = "yellow";
      } else if (boxcolor == "color3") {
        color = "purple";
      } else if (boxcolor == "color4") {
        color = "orange";
      } else if (boxcolor == "color5") {
        color = "blue";
      } else if (boxcolor == "color6") {
        color = "green";
      } else if (boxcolor == "color7") {
        color = "pink";
      } else if (boxcolor == "color8") {
        color = "black";
      } else if (boxcolor == "color9") {
        color = "white";
      } else if (boxcolor == "color10") {
        color = "brown";
      }
      return color;
}

// scores and timing
var timing=document.querySelector("#timing");
var scoring=document.querySelector("#score");
var minutes=0,seconds=0,hours=0;

function scoreF(s){
  scoring.textContent=s;
  if(score==10){
    setTimeout(()=>{
      clearInterval(timercall);
      if(minutes){
        alert("You win the game at "+timing.textContent+" minutes !");
      }
      else{
        alert("You win the game at "+timing.textContent+" seconds !");
      }
      playdata=confirm("Do you want play again?");
      if(playdata){
        location.reload();
      }
    },400);
  }
}
function timefun(){
  timercall=setInterval(timerstart,1000);
}

function timerstart(){
  seconds++;
  if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }
  let m=minutes<10 ? "0"+minutes : minutes;
  let s=seconds<10 ? "0"+seconds : seconds;
  let h=hours<10 ? "0"+hours : hours;

  timing.innerHTML=h+":"+m+":"+s;
}
