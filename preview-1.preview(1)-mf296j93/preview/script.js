'use strict';

const box = document.querySelector('.box');

const newHeight = 0;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`;//200
    elem.style.height = `${h ?? 200}px`;//0

    elem.style.width = `${w ||200}px`;
    elem.innerHTML=(h??200)*(w??200);
}

let leftExpr;
let rightExpr= 10;
console.log(leftExpr ?? rightExpr);
changeParams(box, newHeight, newWidth);
let userName;
let userKey;
// console.log(userName && "User" ?? userKey );