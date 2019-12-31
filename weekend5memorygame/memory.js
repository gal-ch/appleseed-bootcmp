

let PreviousCard = null;
let isProcessing = null;
let CardsIsOpenWait = false;
var imgcard = ['./cards/1.jpeg', './cards/2.jpeg', './cards/3.jpeg', './cards/4.jpeg', './cards/5.jpeg', './cards/6.jpeg', './cards/7.jpeg', './cards/8.jpeg', './cards/9.png', './cards/10.jpeg', './cards/11.jpeg', './cards/12.jpg', './cards/13.jpg', './cards/14.jpeg', './cards/1.jpeg', './cards/2.jpeg', './cards/3.jpeg', './cards/4.jpeg', './cards/5.jpeg', './cards/6.jpeg', './cards/7.jpeg', './cards/8.jpeg', './cards/9.png', './cards/10.jpeg', './cards/11.jpeg', './cards/12.jpg', './cards/13.jpg', './cards/14.jpeg'];

/*----------shuffle the image array----------*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log("enter shuff")
    return array;
}

/*----------display the card if it match----------*/
function displayCard(arrDiv) {
    console.log(this);
   console.log(event.target);
   
    //dont flip if prvioues cards is opens      
    if (CardsIsOpenWait === true) {
        return;
    }
    // If the user clicked an already flipped card - do nothing and return from the function
    let card = this.children[0];
    let cardBack = this.children[1];
    console.log(card);
    if (cardBack.classList.contains('flipped')) {
        return;
    }
    cardBack.classList.add('flipped');
    if (PreviousCard === null) {
        PreviousCard = this.children[0];
        PreviousBack = this.children[1];
        console.log(PreviousCard);
    }
    // get the value from both card
    else {
        let card1 = PreviousCard.getAttribute('data');
        let card2 = this.children[0].getAttribute('data');
        // no match--> count one sec and than fllip them back
        if (card1 !== card2) {
            CardsIsOpenWait = false;
            setTimeout(function () {
                cardBack.classList.remove('flipped');
                PreviousBack.classList.remove('flipped');
                CardsIsOpenWait = false;
                PreviousCard = null;
            }, 1000)
            CardsIsOpenWait = true;
        }
        // it a match!
        else {
            countTheFlippCard();
            PreviousCard = null;
        }
    }

}


/*--------adding img to screen-------*/
function newGame() {
    shuffle(imgcard);
    for (let index = 0; index < imgcard.length; index++) {
        var newImage = document.createElement("img");
        var backCard = document.createElement("img");
        var backFront = document.createElement("div");
        backFront.classList.add('backAndFront');
        newImage.src = imgcard[index];
        backCard.src = './cards/back.jpg';
        newImage.classList.add('frontcard');
        backCard.classList.add('back');
        newImage.setAttribute('data', imgcard[index]);
        console.log(backFront);
        document.querySelector(".container").appendChild(backFront);
        backFront.appendChild(newImage);
        backFront.appendChild(backCard);

    }
    event();
}

/*--------counting the flipp card and if user won display the overlay-------*/
function count() {
    let flippedCouplesCount = 0;
    return function private() {
        flippedCouplesCount++;
        console.log("flipped cards " + flippedCouplesCount);
        if (flippedCouplesCount === 14) {
            overlayOn();
        }
    }
}
let countTheFlippCard = count();

function event() {
    console.log("event function");
    
    //add EventListener to each img
    let arrDiv = document.querySelectorAll(".container>div");
    console.log(arrDiv);
    for (let index = 0; index < arrDiv.length; index++) {
        arrDiv[index].addEventListener('click', displayCard);
        //  arrDiv[index].lastElementChild.classList.add('flipped');
        //   console.log(arrDiv[index].lastElementChild.classList);
    }
    return arrDiv;
}
/*
function playAgian(arrDiv) {
    console.log("play again")

    event();
    overlayOff();
    shuffle(imgcard);
    console.log(arrDiv);
    for (let index = 0; index < arrDiv.length; index++) {
        console.log(arrDiv);
        arrDiv[index].lastElementChild.classList.remove('flipped');
        console.log(arrDiv[index].lastElementChild.classList);
    }
}
*/

function overlayOn(arrDiv) {
    document.getElementById("overlay").style.display = "block";
    document.querySelector("#text").addEventListener('click', function playAgian(arrDiv){
        console.log("play again");
        event();
        overlayOff();
        shuffle(imgcard);
        console.log(arrDiv);
        for (let index = 0; index < arrDiv.length; index++) {
            console.log(arrDiv);
            arrDiv[index].lastElementChild.classList.remove('flipped');
            console.log(arrDiv[index].lastElementChild.classList);
        }
    });
}
function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

newGame();


