console.log("project 0")
// 3 variables for the levels and assign initial value
let dead = 10;
const deathTime = document.getElementById("deathToll");
deathTime.style.display = "none"



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
    hungervar = 1 
    hungerElement.innerHTML = "Hunger " + hungervar
}

function lightsBtn(){
sleepvar = 1
sleepElement.innerHTML = "Sleep " + sleepvar
}

function playBtn(){
    boredver = 1
    boredElement.innerHTML = "bored " + boredver
}


// timers for our buttons and stats 
setInterval(() => {
    age = age + 1
    console.log(age);
   ageElement.innerHTML = "age " + age;
}, 3000)

setInterval(() => {
     hungervar = hungervar + 1
     hungerElement.innerHTML = "Hunger " + hungervar
     if (hungervar === 10) {
        deathTime.style.display = "block"
     }
 }, 3000)
 
 
 setInterval(() => {
    sleepvar = sleepvar + 1
    sleepElement.innerHTML = "sleep " + sleepvar
}, 3000)

 setInterval(() => {
  boredver = boredver + 1
  boredElement.innerHTML = "bored " + boredver
 }, 3000)

//setInterval(() => {
     //clearInterval(timer)
 //}, 11000) 