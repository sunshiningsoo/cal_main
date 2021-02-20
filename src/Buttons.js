import React from "react";
import "./App.css";
import Numberss from "./Numberss";


const Paints = document.querySelector(".paint")


const SHOWING_ON = "showing";

const numbers = [{func: clickNum0, id:0}, 
    {func: clickNum1, id:1}, 
    {func: clickNum2, id:2}, 
    {func: clickNum3, id:3}, 
    {func: clickNum4, id:4}, 
    {func: clickNum5, id:5},
    {func: clickNum6, id:6},
    {func: clickNum7, id:7},
    {func: clickNum8, id:8},
    {func: clickNum9, id:9}];

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
function clickNumPlus() {
    showNum("+");
}
function clickNumMinus() {
    showNum("-");
}
function clickNumMul() {
    showNum("*");
}
function clickNumDiv() {
    showNum("/");
}
function clickResult(){
    Paints.innerHTML = Paints.innerHTML + "=" + eval(Paints.innerHTML); 
}
function reset() {
    Paints.innerHTML = "";
}

function showNum(num){
    Paints.classList.add(SHOWING_ON);
    Paints.innerHTML += `${num}`;
}




function Buttons()  {
    return (
        <div>
            <p>
            <button class="numberClick" onClick={clickNum1}>1</button>
            <button class="numberClick" onClick={clickNum2}>2</button>
            <button class="numberClick" onClick={clickNum3}>3</button>
            </p>
            <p>
            <button class="numberClick" onClick={clickNum4}>4</button>
            <button class="numberClick" onClick={clickNum5}>5</button>
            <button class="numberClick" onClick={clickNum6}>6</button>
            </p>
            <p>
            <button class="numberClick" onClick={clickNum7}>7</button>
            <button class="numberClick" onClick={clickNum8}>8</button>
            <button class="numberClick" onClick={clickNum9}>9</button>
            </p>
            <p>
            <button class="numberClick" onClick={clickNum0}>0</button>
            </p>
            <button class="operater" onClick={clickNumPlus}>+</button>
            <button class="operater" onClick={clickNumMinus}>-</button>
            <button class="operater" onClick={clickNumMul}>*</button>
            <button class="operater" onClick={clickNumDiv}>/</button>
            <button class="result" onClick={clickResult}>=</button>
            <button class="reset" onClick={reset}>reset</button>
        </div>
         
    )
}


export default Buttons;