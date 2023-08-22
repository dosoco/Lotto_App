const ballOne = document.querySelector('[data-lotto-ball1]')
const ballTwo = document.querySelector('[data-lotto-ball2]')
const ballThree = document.querySelector('[data-lotto-ball3]')
const ballFour = document.querySelector('[data-lotto-ball4]')
const userPicks = document.querySelector('[data-user-picks]')
let numString = ""

playLotto()

const pickNumbers = document.querySelector('[data-play-btn]')

pickNumbers.addEventListener('click', playLotto)

function playLotto() {
    let randomNumOne = Math.ceil(Math.random() * 9)
    let randomNumTwo = Math.ceil(Math.random() * 9)
    let randomNumThree = Math.ceil(Math.random() * 9)
    let randomNumFour = Math.ceil(Math.random() * 9)

    let numArr = []

    switch (randomNumOne) {
        case 1:
            ballOne.innerText = "1";
            numArr.push(1);
            break;
        case 2:
            ballOne.innerText = "2";
            numArr.push(2);
            break;
        case 3:
            ballOne.innerText = "3";
            numArr.push(3);
            break;
        case 4:
            ballOne.innerText = "4";
            numArr.push(4);
            break;
        case 5:
            ballOne.innerText = "5";
            numArr.push(5);
            break;
        case 6:
            ballOne.innerText = "6";
            numArr.push(6);
            break;
        case 7:
            ballOne.innerText = "7";
            numArr.push(7);
            break;
        case 8:
            ballOne.innerText = "8";
            numArr.push(8);
            break;
        case 9:
            ballOne.innerText = "9";
            numArr.push(9);
            break;
        
    }
    switch (randomNumTwo) {
        case 1:
            ballTwo.innerText = "1";
            numArr.push(1);
            break;
        case 2:
            ballTwo.innerText = "2";
            numArr.push(2);
            break;
        case 3:
            ballTwo.innerText = "3";
            numArr.push(3);
            break;
        case 4:
            ballTwo.innerText = "4";
            numArr.push(4);
            break;
        case 5:
            ballTwo.innerText = "5";
            numArr.push(5);
            break;
        case 6:
            ballTwo.innerText = "6";
            numArr.push(6);
            break;
        case 7:
            ballTwo.innerText = "7";
            numArr.push(7);
            break;
        case 8:
            ballTwo.innerText = "8";
            numArr.push(8);
            break;
        case 9:
            ballTwo.innerText = "9";
            numArr.push(9);
            break;

    }
    switch (randomNumThree) {
        case 1:
            ballThree.innerText = "1";
            numArr.push(1);
            break;
        case 2:
            ballThree.innerText = "2";
            numArr.push(2);
            break;
        case 3:
            ballThree.innerText = "3";
            numArr.push(3);
            break;
        case 4:
            ballThree.innerText = "4";
            numArr.push(4);
            break;
        case 5:
            ballThree.innerText = "5";
            numArr.push(5);
            break;
        case 6:
            ballThree.innerText = "6";
            numArr.push(6);
            break;
        case 7:
            ballThree.innerText = "7";
            numArr.push(7);
            break;
        case 8:
            ballThree.innerText = "8";
            numArr.push(8);
            break;
        case 9:
            ballThree.innerText = "9";
            numArr.push(9);
            break;

    }
    switch (randomNumFour) {
        case 1:
            ballFour.innerText = "1";
            numArr.push(1);
            break;
        case 2:
            ballFour.innerText = "2";
            numArr.push(2);
            break;
        case 3:
            ballFour.innerText = "3";
            numArr.push(3);
            break;
        case 4:
            ballFour.innerText = "4";
            numArr.push(4);
            break;
        case 5:
            ballFour.innerText = "5";
            numArr.push(5);
            break;
        case 6:
            ballFour.innerText = "6";
            numArr.push(6);
            break;
        case 7:
            ballFour.innerText = "7";
            numArr.push(7);
            break;
        case 8:
            ballFour.innerText = "8";
            numArr.push(8);
            break;
        case 9:
            ballFour.innerText = "9";
            numArr.push(9);
            break;

    }

    numString = numArr.join("")
    console.log(numString)

        userPicks.innerHTML += (`<div> ${numString} </div>`)
    
}

