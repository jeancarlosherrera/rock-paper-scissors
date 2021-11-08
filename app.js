const playButton = document.getElementById("play");
const weaponSelector = document.getElementById("weapon");
let playerImage = document.getElementById("player-img");
let machineImage = document.getElementById("machine-img");
let banner = document.querySelector(".banner")

const machineWeapon = () => {
    let rand = Math.floor(Math.random() * 3) + 1;
    return rand === 1 ? "Rock" : rand === 2 ? "Paper" : "Scissors";
}

const play = () => {
    let result;
    const playerWeapon = weapon.value;
    let machineResult = machineWeapon();
    machineWeapon();
    if (playerWeapon === machineResult) {
        result = "Draw";
        machineImage.src = playerImage.src;
    } else if (playerWeapon === "Rock" && machineResult === "Scissors") {
        result = "Rock destroys Scissors. You Won.";
        machineImage.src = "scissors.png";
    } else if (playerWeapon === "Scissors" && machineResult === "Rock") {
        result = "Rock destroys Scissors. Machine Won.";
        machineImage.src = "rock.png";
    } else if (playerWeapon === "Paper" && machineResult === "Rock") {
        result = "Paper wraps Rock. You Won.";
        machineImage.src = "rock.png";
    } else if (playerWeapon === "Rock" && machineResult === "Paper") {
        result = "Paper wraps Rock. Machine Won.";
        machineImage.src = "paper.png";
    } else if (playerWeapon === "Scissors" && machineResult === "Paper") {
        result = "Scissors cut Paper. You Won.";
        machineImage.src = "paper.png";
    } else if (playerWeapon === "Paper" && machineResult === "Scissors") {
        result = "Scissors cut Paper. Machine Won.";
        machineImage.src = "scissors.png";
    }
    const winner = document.createElement("li");
    winner.textContent = result;
    banner.appendChild(winner)
    playButton.disabled = true;
    console.log(`Player Weapon: ${playerWeapon}, Machine Weapon: ${machineResult}, ${result}`);
}

playButton.addEventListener("click", play)

weaponSelector.addEventListener("change", () => {
    weaponSelector.value === "Rock" ? playerImage.src = "rock.png" : weaponSelector.value === "Paper" ? playerImage.src = "paper.png"
        : weaponSelector.value === "Scissors" ? playerImage.src = "scissors.png" : playerImage.src = "question.png"
})