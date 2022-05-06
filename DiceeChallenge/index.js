
let randomnumber1 = Math.floor(Math.random()*6)+1;
let randomphoto1 = "images/dice"+randomnumber1+".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomphoto1);

let randomnumber2 = Math.floor(Math.random()*6)+1;
let randomphoto2 = "images/dice"+randomnumber2+".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomphoto2);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}
else if(randomnumber2>randomnumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}
else{
  document.querySelector("h1").innerHTML = "Draw!!"
}
