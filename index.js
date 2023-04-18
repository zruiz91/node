// console.log("hello world!");


// //jshhint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt")

const superheroes = require("superheroes");

const supervillains = require("supervillains");


let mySupeheroName = superheroes.random();

let mySuperVillainName = supervillains.random();

console.log("Your super villain name is: " + mySuperVillainName);

console.log("Your super hero name is: " + mySupeheroName);