'use strict';

let a = 5;
console.log(a)
var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let persone = {
    name: "John",
    age: 25,
    isMarried: false,
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

//alert("Hello World!");

//let anwser = confirm("Are you here");

//console.log(anwser);

//let anwser = +prompt("Есть ли вам 18", "Да");

//console.log(typeof(anwser));

//console.log("arr" + "-object");
//console.log(4 + +"- object");
let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);