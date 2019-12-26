



/*------dynamic canvas size------*/
function dynamicSize() {
    let myPainterPage = document.querySelector(".my-painterPage");
    let canHeight = document.querySelector("#setHeight").value;
    let canWidth = document.querySelector("#setWidth").value;
    myPainterPage.style.height = parseInt(canHeight) + 'px';
    myPainterPage.style.width = parseInt(canWidth) + 'px';

    return myPainterPage;
}

/*------drowing on the canvas------*/
function drowinInAction() {
    let flagiOfClick = false;
    let drowingColor = "black";  
    if (flagiOfClick && !flagEraser) {
        console.log(drowingColor);
        let x = event.clientX;
        let y = event.clientY;
        let colorOnCanves = document.createElement('div'); //creat new div--> the paint
        colorOnCanves.classList.add("colorOnCanves");
        colorOnCanves.style.top = y + "px";
        colorOnCanves.style.left = x + "px";
        colorOnCanves.style.background = drowingColor;
        myPainterPage.appendChild(colorOnCanves);
        let alldiv = myPainterPage.querySelectorAll(":scope >  div");
        console.log(myPainterPage);
        console.log(alldiv);
        return colorOnCanves, alldiv, flagiOfClick;
    }
}