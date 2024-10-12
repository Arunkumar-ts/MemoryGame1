var overlayer = document.querySelector(".overlayer");
var btn = document.querySelector(".btn");
var gamelayer = document.querySelector(".gamelayer");
var timediv=document.querySelector(".timediv");
var scorediv=document.querySelector(".scorediv");

btn.addEventListener("click", () => {
  overlayer.style.display = "none";
  gamelayer.style.display = "flex";
  timediv.style.display="flex";
  scorediv.style.display="flex";
});

var firstget, fbox, sbox, boxval, fcolor, scolor, fboxcolor, sboxcolor, color,score=0;
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
        }, 300);
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
            fboxcolor = "color" + fcolor;
            color=getcolor(fboxcolor);
            setTimeout(() => {
                box.style.backgroundColor = color;
            }, 300);
        }
      else{
        fbox.style.backgroundColor = "rgba(2, 156, 156, 0.5)";
        sbox.style.backgroundColor = "rgba(2, 156, 156, 0.5)";
        firstget = 1;
        fbox = document.getElementById(event.target.id);
        fcolor = random1[Number(event.target.textContent)];
        fboxcolor = "color" + fcolor;
        color=getcolor(fboxcolor);
        setTimeout(() => {
            box.style.backgroundColor = color;
        }, 300);
      }
      
    }
  } else {
    firstget = 1;
    fbox = document.getElementById(event.target.id);
    fcolor = random1[Number(event.target.textContent)];
    fboxcolor = "color" + fcolor;
    color=getcolor(fboxcolor);
    setTimeout(() => {
      box.style.backgroundColor = color;
    }, 300);
    starttimer();
  }
}

// genareting random numbers
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

var timing=document.querySelector("#timing");
var scoring=document.querySelector("#score");
function scoreF(s){
  scoring.textContent=s;
}
