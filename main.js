document.getElementById("number1").addEventListener("click", number1);
document.getElementById("number2").addEventListener("click", number2);
document.getElementById("number3").addEventListener("click", number3);
document.getElementById("number4").addEventListener("click", number4);
document.getElementById("number5").addEventListener("click", number5);
document.getElementById("submit").addEventListener("click", submit);

function number1() {
    document.getElementById("selectionNumber").innerText = " 1";
}

function number2() {
    document.getElementById("selectionNumber").innerText = " 2";
}

function number3() {
    document.getElementById("selectionNumber").innerText = " 3";
}

function number4() {
    document.getElementById("selectionNumber").innerText = " 4";
}

function number5() {
    document.getElementById("selectionNumber").innerText = " 5";
}

function submit() {
    document.getElementById("thankYou").style.visibility = "visible";
}

