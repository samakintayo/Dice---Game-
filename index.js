var randomNumber = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2= Math.floor(Math.random() * 6) + 1 ;
var randomDice = './images/dice' + randomNumber + '.png';
var randomDice2 = './images/dice' + randomNumber2 + '.png';
document.querySelector(".img1").setAttribute("src", randomDice);
document.querySelector(".img2").setAttribute("src", randomDice2);
// var playerWins = document

if (randomDice === randomDice2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomDice > randomDice2 ){
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins";
}

else if (randomDice < randomDice2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}