"use strict";
let X = prompt("X:") === "true";
let Y = prompt("Y:") === "true";
let Z = prompt("Z:") === "true";
alert(`а) ${(X || Y) ? (!X || Y) : true}\nб) ${(X || Y) === (Y && X)}\nв) ${(X && Y) || (!X || Y)}\nг) ${(X === Y) ? Y : true}\nд) ${(X || Y) ? (Z === X) : true}\nе) ${(X === (Z || Y)) || ((!X || Z) && (!Y || X))}\nж) ${Y ? (Z === X) : true}\nз) ${X === (Y ? Z : true)}`);