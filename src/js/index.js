import "../style/styles.css";

window.onload = function() {
  generateRandomCardOn("#cardLeft");
  generateRandomCardOn("#cardCenter");
  generateRandomCardOn("#cardRight");
};

function generateRandomCardOn(htmlCardId) {
  console.log("generateCard: " + htmlCardId);
  document.querySelector(htmlCardId).classList.add(generateRandomCards());
  document.querySelector(htmlCardId).innerHTML = generateRandomNumber();
}

function generateRandomCards() {
  const arrSuits = ["spades", "hearts", "diamonds", "clubs"];

  let indexSuit = Math.floor(Math.random() * arrSuits.length);
  return arrSuits[indexSuit];
}

function generateRandomNumber() {
  const arrNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let indexNumber = Math.floor(Math.random() * arrNumbers.length);
  return arrNumbers[indexNumber];
}
