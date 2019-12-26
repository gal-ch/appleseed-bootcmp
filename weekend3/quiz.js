
/*var AllDiv = {}
AllDiv.ques_and_ans_base = ques_base.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_one = ques_one.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_two = ques_two.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_three = ques_three.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_four = ques_four.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_five = ques_five.querySelectorAll(":scope > .question, .A");
AllDiv.ques_and_ans_result = ques_result.querySelectorAll(":scope > .question, .A");*/


let ques_base = document.getElementById("ques_and_ans_base");
let ques_and_ans_base = ques_base.querySelectorAll(":scope > .question, .A");
let ques_one = document.getElementById("ques_and_ans_one");
let ques_and_ans_one = ques_one.querySelectorAll(":scope > .question, .A"); //all_ques_and_ans = NodeList(5) [div.question, div.first.A, div.second.A, div.third.A, div.fourth.A]
let ques_two = document.getElementById("ques_and_ans_two");
let ques_and_ans_two = ques_two.querySelectorAll(":scope > .question, .A");
let ques_three = document.getElementById("ques_and_ans_three");
let ques_and_ans_three = ques_three.querySelectorAll(":scope > .question, .A");
let ques_four = document.getElementById("ques_and_ans_four");
let ques_and_ans_four = ques_four.querySelectorAll(":scope > .question, .A");
let ques_five = document.getElementById("ques_and_ans_five");
let ques_and_ans_five = ques_five.querySelectorAll(":scope > .question, .A");
let ques_result = document.getElementById("ques_and_ans_result");
let ques_and_ans_result = ques_result.querySelectorAll(":scope > .question, .A");


var point = [

]

var diagnuze_result =
{
    res_one: 40,
    res_two: 100,
    res_three: 150,
    res_four: 200
};


function firstQuestion() {
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_one[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
    return ques_and_ans_base;
}

function secoundQuestion() {
    point.point_one = this.event.srcElement.value;
    console.log(point);
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_two[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
    return ques_and_ans_base;
}



function thirdQuestion() {
    point.point_two = this.event.srcElement.value;
    console.log(point);
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_three[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
    return ques_and_ans_base;
}

function fourthQuestion() {
    point.point_three = this.event.srcElement.value;
    console.log(point);
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_four[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
    return ques_and_ans_base;
}

function fifthQuestion() {
    point.point_four = this.event.srcElement.value;
    console.log(point);
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_five[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
    return ques_and_ans_base;
}

function result() {
    point.point_five = this.event.srcElement.value;
    console.log(point);
    console.log((Object.values(point)));
    var summed = 0;
    for (var key in point) {
        summed += parseInt(point[key]);
    }
    console.log(summed);
    const values = Object.values(diagnuze_result)
    const keys = Object.keys(diagnuze_result)
    for (var i = 1; i < values.length; i++) {
        if (summed > values[i] && summed < values[i + 1]) {
            var chose = keys[i + 1]
            let indexs = i + 1
        }
    }
    document.getElementById("num").textContent=summed;
    for (var i = 0; i < ques_and_ans_base.length; i++) {
        var item = ques_and_ans_result[i].innerHTML;
        ques_and_ans_base[i].innerHTML = item;
    }
}


