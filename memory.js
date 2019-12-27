
let CardsIsOpenWait = false;
let PreviousCard = null;
let isProcessing = null;
let flippedCouplesCount = 0;

function displayCard() {
//dont flip if prvioues cards is opens      
    if (CardsIsOpenWait === true) {
        return;
    }
// If the user clicked an already flipped card - do nothing and return from the function
    if (newImage.classList.contains('flipped')) {
        return;
    }
    newImage.classList.add('flipped');
    if (PreviousCard === null) {
        PreviousCard = newImage;
    }
// get the value from both card
    else {
        let card1 = PreviousCard.getAttribute('data');
        let card2 = newImage.getAttribute('data');
// no match--> count one sec and than fllip them back
        if(card1 !== card2)
        {
                isProcessing = 0;
                setTimeout(function () {
                    newImage.classList.remove('flipped');
                    PreviousCard.classList.remove('flipped');
                    isProcessing = 0;
                    PreviousCard = null;
                }, 1000)
                isProcessing = 1;
        }
// it a match!
        else
        {
            flippedCouplesCount++;
            PreviousCard = null;
        }
    }
}


var imgcard = ['./cards/1.jpeg', './cards/2.jpeg','./cards/3.jpeg','./cards/4.jpeg','./cards/5.jpeg','./cards/6.jpeg','./cards/7.jpeg','./cards/8.jpeg','./cards/9.png','./cards/10.jpeg','./cards/11.jpeg','./cards/12.jpg','./cards/13.jpg','./cards/14.jpeg','./cards/15.jpg','./cards/16.jpg','./cards/1.jpeg', './cards/2.jpeg','./cards/3.jpeg','./cards/4.jpeg','./cards/5.jpeg','./cards/6.jpeg','./cards/7.jpeg','./cards/8.jpeg','./cards/9.png','./cards/10.jpeg','./cards/11.jpeg','./cards/12.jpg','./cards/13.jpg','./cards/14.jpeg','./cards/15.jpg','./cards/16.jpg'];

console.log(backFront);
for (let index = 0; index < imgcard.length; index++) {
    var newImage = document.createElement("img");
    var backCard = document.createElement("img");
    var backFront= document.createElement("div");
    backFront.classList.add('backAndFront');
    newImage.src = imgcard[index];
    backCard.src = './cards/back.jpg';
    newImage.classList.add(`frontcard-${index}`);
   // newImage.classList.add('flipped');
    backCard.classList.add(`back-${index}`);
    newImage.setAttribute('data', [index]);  
    console.log(backFront);
    document.querySelector("#container").appendChild(backFront);
    backFront.appendChild(newImage);
    backFront.appendChild(backCard);
    newImage.style.width = 150 + "px";
    newImage.style.height = 150 + "px";
    backCard.style.width = 150 + "px";
    backCard.style.height = 150 + "px";   
}

backFront = document.querySelector(".backAndFront");
backFront.addEventListener('click',displayCard);






// if user click on open card do nothing and return from the function 
// if it the first card he click save it and dont flip it-> we need to creat gluble var that equal to null and check if he is null and if save the first to it value

//see if they match 
// no match----> flip them in 3 sec
//yes match --> count the number of flip cards





















function chooseThem() {
    //show the them
    //whan the user choose one make the image he chosse as the img array
}




function shuffled() {
    // shuffled the card
    //display on screen the shuffled card 

}







