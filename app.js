document.addEventListener("DOMContentLoaded", () => {
    const resultDisplay = document.querySelector("#result");
    const grid = document.querySelector(".grid");
  
  // card options :
  const cardArray = [
    {
      name: "fires",
      img: "images/fries.png",
    },
    {
      name: "fires",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];


  cardArray.sort(() => 0.5 - Math.random());
  // create your board :
  function createBoard() {
    for (let i = 0; i <= cardArray.length - 1; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click",flipCard);
      grid.appendChild(card);
    }
  }

  //check for match :
   function checkFormMatch(){
       const cards = document.querySelectorAll(".grid img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert("you found a match !");
            cards[optionOneId].setAttribute("src","./images/white.png");
            cards[optionTwoId].setAttribute("src","./images/white.png");
            cardsWon.push(cardsChosen);
            resultDisplay.textContent = cardsWon.length;
        }else{
            alert("sorry try again !");
            cards[optionOneId].setAttribute("src","./images/blank.png");
            cards[optionTwoId].setAttribute("src","./images/blank.png");
        }

        cardsChosen = [];
        cardsChosenId = [];
       
        if(cardsWon.length == cardArray.length/2){
            resultDisplay.textContent = "Congratulations ! You found them all";
        }
   }

  // flip your card :
  function flipCard() {
    var cardId = this.dataset.id;
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkFormMatch, 500);
    }
  }
  createBoard();
});
