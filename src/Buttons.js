import React from "react";
import "./App.css";

const Paints = document.querySelector(".paint")

const SHOWING_ON = "showing";

function showNum(num){
    console.log(num);
    Paints.classList.add(SHOWING_ON);
    Paints.innerHTML = Paints.innerHTML+`${num}`;
}

function clickNum1() {
    showNum(1);
}
function clickNum2() {
    showNum(2);
}
function clickNum3() { 
    showNum(3);
}
function clickNum4() {
    showNum(4);
}
function clickNum5() {
    showNum(5);
}
function clickNum6() {
    showNum(6);
}
function clickNum7() {
    showNum(7);
}
function clickNum8() {
    showNum(8);
}
function clickNum9() {
    showNum(9);
}
function clickNum0() {
    showNum(0);
}



function reset() {
    Paints.innerHTML = "";
}
function Buttons()  {
    return (
        <div>
            <button class="numberClick" onClick={clickNum1}>1</button>
            <button class="numberClick" onClick={clickNum2}>2</button>
            <button class="numberClick" onClick={clickNum3}>3</button>
            <button class="numberClick" onClick={clickNum4}>4</button>
            <button class="numberClick" onClick={clickNum5}>5</button>
            <button class="numberClick" onClick={clickNum6}>6</button>
            <button class="numberClick" onClick={clickNum7}>7</button>
            <button class="numberClick" onClick={clickNum8}>8</button>
            <button class="numberClick" onClick={clickNum9}>9</button>
            <button class="numberClick" onClick={clickNum0}>0</button>
            <button class="reset" onClick={reset}>reset</button>
        </div>
         
    )
}


export default Buttons;