// An effecient way of solving this:

// var counter1;
// localStorage.setItem("counter1", counter1);
// var counter2;
var randomNumber1=0;
var randomNumber2=0;
var randomDiceImage, randomDiceImage2;
var randomImageSource, randomImageSource2;
var image1, image2;
var counter1 = 0;
var counter2 = 0;

document.querySelector("body").addEventListener("keypress", keyboardKeys);
document.querySelectorAll(".clicked")[0].addEventListener("click", randomNumber0Generator);
document.querySelectorAll(".clicked")[1].addEventListener("click", randomNumber1Generator);
document.querySelector(".rollDices").addEventListener("click", randomNumberGenerator, correctImage);

// for (var i=0; i < (document.querySelectorAll(".clicked").length); i++) {
//   var  functionConcatenation = "randomNumber" + i + "Generator";
//   console.log("functionConcatenation = " + functionConcatenation);
//   if (i===0){
//     document.querySelectorAll(".clicked")[i].addEventListener("click", randomNumber0Generator);
//     document.querySelector(".rollDices").addEventListener("click", randomNumberGenerator);
//   }
//   else if (i===1){
//     document.querySelectorAll(".clicked")[i].addEventListener("click", randomNumber0Generator);
//     document.querySelector(".rollDices").addEventListener("click", randomNumberGenerator);
//   }
// }

function keyboardKeys(event){
  var key = event.key;
  switch (key) {
    case("1"):
    randomNumber0Generator();
    break;
    case("2"):
    randomNumber1Generator();
    break;
    case(" "):
    randomNumberGenerator();
    break;
    default:
    console.log(key);
    alert("PRESS 1 for PLAYER 1 and PRESS 2 for PLAYER 2");
  }


}

function randomNumber0Generator () {
  randomNumber1 = Math.floor(Math.random()*6)+1;
  console.log("randomNumber1= " + randomNumber1);
  randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
  randomImageSource = "images/" + randomDiceImage; //images/dice1.png to images/dice6.png

  image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  correctImage();
}

function randomNumber1Generator () {
  randomNumber2 = Math.floor(Math.random()*6)+1;
  console.log("randomNumber2=" + randomNumber2);
  randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png to dice6.png
  randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png to images/dice6.png

  image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);
  correctImage();
}

function randomNumberGenerator(){
  // The code had to be written again, because correctImage() function would be called twice since that is redundant in both the functions
  randomNumber1 = Math.floor(Math.random()*6)+1;
  console.log("randomNumber1= " + randomNumber1);
  randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
  randomImageSource = "images/" + randomDiceImage; //images/dice1.png to images/dice6.png

  image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  randomNumber2 = Math.floor(Math.random()*6)+1;
  console.log("randomNumber2=" + randomNumber2);
  randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png to dice6.png
  randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png to images/dice6.png

  image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  correctImage();
}




// function () {
//
// }

function correctImage(buttonDetails) {
  var buttonInnerHTML = this.innerHTML;
  // console.log(buttonInnerHTML);
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    counter1++;
    console.log("counter1 = " + counter1);
    document.querySelector("h3").innerHTML = "🚩 Player 1 =" + counter1 + "&nbsp; &nbsp; Player 2 = " + counter2 ;
    // counter = localStorage.getItem("counter1") + 1;
    // console.log(counter);
    // localStorage.setItem("counter1", counter1);
    // document.querySelectorAll("h3")[0].innerHTML = "Player 1 🚩 = " + localStorage.getItem("counter1");
  }
  else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    counter2++;
    console.log("counter2 = " + counter2);
    document.querySelector("h3").innerHTML = "Player 1 = " + counter1 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🚩 Player 2 =" + counter2 ;
  }
  else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  }
}



// *********** One way to solve this *********** //

// To get random numbers from 1 to 6

/*
var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1*6) + 1; //range woll be between 0 to 5, if we don't add 1
randomNumber1 = Math.floor(randomNumber1); //this will give us a whole number

if (randomNumber1===1){
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (randomNumber1===2){
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1===3){
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1===4){
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1===5){
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6) + 1;
randomNumber2 = Math.floor(randomNumber2);

if (randomNumber2===1){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber2===2){
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2===3){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2===4){
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2===5){
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

*/
