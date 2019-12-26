

var flagiOfClick = false;
var drowingColor = "black";
var flagEraser = false;
let setPageBtn = document.querySelector(".set-pageBtn");
let myPainterPage = document.querySelector(".my-painterPage");
let eraser = document.querySelector(".eraser");
let arrayElements = document.getElementsByClassName('chooseColor');
var buttonElements = document.querySelectorAll('.btn-size');
var pluse = buttonElements[0];
var min = buttonElements[1];
console.log(buttonElements);


for (let element of arrayElements) {
    element.addEventListener("click", function () {
        flagEraser = false;
        drowingColor = element.style.backgroundColor;
        console.log(drowingColor);
        return drowingColor;
    })
}


/*------dynamic canvas size------*/
function dynamicSize() {
    let canHeight = document.querySelector("#setHeight").value;
    console.log(canHeight);
    let canWidth = document.querySelector("#setWidth").value;
    myPainterPage.style.height = parseInt(canHeight) + 'px';
    myPainterPage.style.width = parseInt(canWidth) + 'px';
}

/*------drowing on the canvas------*/
function drowinInAction() {
    if (flagiOfClick && !flagEraser) {
        console.log(drowingColor);
        var x = event.clientX;
        var y = event.clientY;
        let colorOnCanves = document.createElement('div');
        colorOnCanves.classList.add("colorOnCanves");
        colorOnCanves.style.top = y + "px";
        colorOnCanves.style.left = x + "px";
        colorOnCanves.style.background = drowingColor;
        myPainterPage.appendChild(colorOnCanves);
        let alldiv = myPainterPage.querySelectorAll(":scope >  div");
        console.log(myPainterPage);
        console.log(alldiv);
        return colorOnCanves, alldiv;
    }
}
/*------ Create an eraser with right click------*/
function deleteMyPaint() {

    flagEraser = true;
    if (flagiOfClick) {
        var x = event.clientX;
        var y = event.clientY;
        let colorOnCanves = document.createElement('div');
        colorOnCanves.classList.add("colorOnCanves");
        colorOnCanves.style.top = y + "px";
        colorOnCanves.style.left = x + "px";
        colorOnCanves.style.background = drowingColor;
        myPainterPage.appendChild(colorOnCanves);
        let alldiv = myPainterPage.querySelectorAll(":scope >  div");
        console.log(myPainterPage);
        console.log(alldiv);
        return colorOnCanves, alldiv;
    }
}






eraser.addEventListener("click", deleteMyPaint);
setPageBtn.addEventListener('click', dynamicSize);
myPainterPage.addEventListener('mousedown', function () { flagiOfClick = true; });
myPainterPage.addEventListener('mouseup', function () { flagiOfClick = false; });
myPainterPage.addEventListener('mousemove', drowinInAction);

//   pluse.addEventListener('click', changeBrush);
//   min.addEventListener('click', changeBrush);
     /*  function changeBrush() {
      let paint = document.querySelector('.colorOnCanves');
      let brushSizeH = window.getComputedStyle(paint, null).getPropertyValue('height');
      let brushSizeW = window.getComputedStyle(paint, null).getPropertyValue('width');
      var brushSizeHNew = parseFloat(brushSizeH);
      var brushSizeWNew = parseFloat(brushSizeW);
      paint.style.height = (brushSizeHNew + 2) + 'px';
      paint.style.width = (brushSizeWNew + 2) + 'px';
  }*/

