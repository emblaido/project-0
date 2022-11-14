console.log("project 0")
// 3 variables for the levels and assign initial value

let hungervar = 0;
console.log(hungervar)
let sleepvar = 0;
console.log(sleepver)
let boredver = 0;
console.log(boredver)


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



if (hungerlevel < 10 && tiredLevel < 10 && unhappyLevel < 10){
hungryLevel++
tiredlevel++
unhappyLevel++
console.log(hungerlevel, tiredLevel, unhappyLevel)

}
//}, 1000)

const feed = setInterval(() => {
    hungerlevel--
}, 3000)
const sleep = setInterval(() => {
    tiredLevel--
}, 5000)
const play = setInterval(() => {
    unhappyLevel --
}, 7000)

setInterval(() => {
    clearInterval(timer)
}, 11000) 