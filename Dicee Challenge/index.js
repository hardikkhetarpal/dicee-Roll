var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");



if(randomNumber1>randomNumber2){
    document.querySelector("p").innerHTML="<b>Player 1 wins</b> Refresh me to Roll again";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("p").innerHTML="<b>Draw</b> Refresh me to Roll again";
}
else{
    document.querySelector("p").innerHTML="<b>player 2 wins</b> Refresh me to Roll again";
}