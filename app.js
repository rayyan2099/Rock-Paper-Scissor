// let r=0,p=1,s=2
// console.log(`rp=${(r-p+3)%3} lose`)
// console.log(`rs=${(r-s+3)%3} win`)
// console.log(`pr=${(p-r+3)%3} win`)
// console.log(`ps=${(p-s+3)%3} lose`)
// console.log(`sr=${(s-r+3)%3} lose`)
// console.log(`sp=${(s-p+3)%3} win`)
const rimg = 'rock.png'
const pimg = 'paper.png'
const simg = 'scissor.png'
const plrImage = document.querySelector('#plrImg')
const cpuImage = document.querySelector('#cpuImg')
plrImage.src='player.png'
cpuImage.src='cpu.png'
const rBut = document.querySelector('#rBut')
const pBut = document.querySelector('#pBut')
const sBut = document.querySelector('#sBut')
const resetBut = document.querySelector('#reset')
const plrScore = document.querySelector('#plrScore')
const cpuScore = document.querySelector('#cpuScore')
let plrPoints = 0
let cpuPoints = 0
let plrInput = 0
let cpuInput = 0
let isGameOver = false
const winScoreSelect = document.querySelector("#playto")
const whoWins = document.querySelector('#whoWins')
let winScore = 3

function disableButtons(){
    rBut.disabled=true
    pBut.disabled=true
    sBut.disabled=true
}

function enableButtons(){
    rBut.disabled=false
    pBut.disabled=false
    sBut.disabled=false
}

function reset() {
    winScore = parseInt(winScoreSelect.value);
    plrPoints = 0
    cpuPoints = 0
    plrScore.textContent = plrPoints
    cpuScore.textContent = cpuPoints
    plrImage.src = 'player.png'
    cpuImage.src = 'cpu.png'
    isGameOver = false
    whoWins.textContent = ""
    whoWins.classList.remove('has-text-danger','has-text-success')
    enableButtons();
}

function CPU() {
    return Math.floor(Math.random() * 3)
}

// function decide(x, y) {
//     if (plrPoints !== winScore && cpuPoints !== winScore) {
//         if (x === y) return;
//         else if ((x - y + 3) % 3 === 1) {
//             plrPoints += 1
//             plrScore.textContent = plrPoints
//         }
//         else if((x-y+3)%3==2){
//             cpuPoints += 1
//             cpuScore.textContent = cpuPoints
//         }
//     }
//     else {
//         if (plrPoints >= winScore) {
//             whoWins.textContent = "Player Wins"
//             isGameOver = true
//         }
//         else if (cpuPoints >= winScore) {
//             whoWins.textContent = "Glory to the Machine GOD"
//             isGameOver = true
//         }
//         disableButtons()
//     }
// }
function decide(x, y) {
    if (x === y) return;

    if ((x - y + 3) % 3 === 1) {
        plrPoints += 1;
        plrScore.textContent = plrPoints;
    } else {
        cpuPoints += 1;
        cpuScore.textContent = cpuPoints;
    }

    if (plrPoints >= winScore) {
        whoWins.textContent = "Player Wins";
        isGameOver = true;
        whoWins.classList.add('has-text-success')
        disableButtons();
    } else if (cpuPoints >= winScore) {
        whoWins.textContent = "Glory to the Machine GOD";
        isGameOver = true;
        whoWins.classList.add('has-text-danger')
        disableButtons();
    }
}
function imgGen(x) {
    if (x === 0) {
        return rimg;
    }
    else if (x == 1) {
        return pimg;
    }
    else if (x == 2) {
        return simg;
    }
    else {
        return;
    }
}
rBut.addEventListener('click', function () {
    if(!isGameOver){
    cpuInput = CPU()
    plrImage.src = imgGen(0)
    cpuImage.src = imgGen(cpuInput)
    decide(0, cpuInput)}
})
pBut.addEventListener('click', function () {
    if(!isGameOver){
    cpuInput = CPU()
    plrImage.src = imgGen(1)
    cpuImage.src = imgGen(cpuInput)
    decide(1, cpuInput)}
})
sBut.addEventListener('click', function () {
    if(!isGameOver){
    cpuInput = CPU()
    plrImage.src = imgGen(2)
    cpuImage.src = imgGen(cpuInput)
    decide(2, cpuInput)}
})

winScoreSelect.addEventListener('change',function(){
    winScore=parseInt(this.value)
    reset()
})

resetBut.addEventListener('click', reset)

