console.log("project 0")
// 3 variables for the levels and assign initial value

let hungervar = 1;
console.log(hungervar)
const hungerElement = document.getElementById("hunger");
console.log(hungerElement)
hungerElement.innerHTML = "Hunger " + hungervar
console.log(hungerElement)

let sleepvar = 1;
console.log(sleepvar)
const sleepElement = document.getElementById("sleep")
sleepElement.innerHTML = "Sleep " + sleepvar

let boredver = 1;
console.log(boredver)
const boredElement = document.getElementById("bored")
boredElement.innerHTML = "bored " + boredver

let age = 1000;
console.log(age)
const ageElement = document.getElementById("age")
ageElement.innerHTML = "age " + age

function eatBtn() {
    console.log("hit");
    document.getElementById("eat");
const hungervar = document.getElementById("hunger");
console.log(hungervar)
}

function lightsBtn(){
console.log("wack")
document.getElementById("lights");
const sleepvar = document.getElementById("sleep");
console.log(sleepvar)
}

function playBtn(){
    console.log("smack")
    document.getElementById("play");
    const boredvar = document.getElementById("bored"); 
    console.log(boredvar)
}



// if (hungerlevel < 10 && tiredLevel < 10 && unhappyLevel < 10){
// hungryLevel++
// tiredlevel++
// unhappyLevel++
// console.log(hungerlevel, tiredLevel, unhappyLevel)

// }
// //}, 1000)

setInterval(() => {
    age = age + 1
    console.log(age);
   ageElement.innerHTML = "age " + age;
}, 30000)
// const sleep = setInterval(() => {
//     tiredLevel--
// }, 5000)
// const play = setInterval(() => {
//     unhappyLevel --
// }, 7000)

// setInterval(() => {
//     clearInterval(timer)
// }, 11000) 