var win1=Math.random()*6;
win1=Math.floor(win1)+1;
var win2=Math.random()*6;
win2=Math.floor(win2)+1;

var image1="dice"+win1+".png";
var imagesource1="images/"+image1;
var im1=document.querySelectorAll("img")[0];
im1.setAttribute("src",imagesource1);

var image2="dice"+win2+".png";
var imagesource2="images/"+image2;
var im2=document.querySelectorAll("img")[1];
im2.setAttribute("src",imagesource2);

if(win1>win2)
{
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="🚩Player 1 Wins";
}
else if(win2>win1){
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins🚩";
  }
  else{
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw!";
  }
