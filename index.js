var randomNumberGenerator1= Math.floor(Math.random()*6)+1;
var randomNumberGenerator2= Math.floor(Math.random()*6)+1;

var image1 = "./images/dice"+randomNumberGenerator1+ ".png"
var image2 = "./images/dice"+randomNumberGenerator2+ ".png"

document.querySelector(".dice1 img").setAttribute("src", image1)
document.querySelector(".dice2 img").setAttribute("src", image2)

if(randomNumberGenerator1>randomNumberGenerator2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!"
}
else if(randomNumberGenerator2>randomNumberGenerator1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML = "It's a draw."
}