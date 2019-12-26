
function q1() {
    var a = parseInt(prompt('enter number1:'));

    var b = parseInt(prompt('enter number2:'));



    if (a == 0 || b === 0) {
        console.log('1');
        window.alert('1');
    }

    if (a > b || a == b) {
        c = a / b;
        console.log(c);
        window.alert(c);

    }

    if (b > a) {
        c = b / a;
        console.log(c);
        window.alert(c);

    }

}

function q2() {
    var a = prompt("hi pini, enter somthing:");
    var c = parseInt(a);
    if (isNaN(c)) {
        console.log(a + "!!!");
    }
    else {
        c += 5;
        console.log(c);
    }

}

function q3() {
    var a = prompt("enter a string1:");
    var b = prompt("enter a string1:");

    if (a === b) {
        console.log(true);

    }
    else {
        console.log(false);
    }
}

q1();
q2();
q3();