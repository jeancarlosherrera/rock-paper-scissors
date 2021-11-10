const playButton = document.getElementById("play");
const weaponSelector = document.getElementById("weapon");
let playerImage = document.getElementById("player-img");
let machineImage = document.getElementById("machine-img");
let banner = document.querySelector(".banner");
let playerScoreDisplay = document.getElementById("player-score");
let machineScoreDisplay = document.getElementById("machine-score");

const machineWeapon = () => {
    let rand = Math.floor(Math.random() * 3) + 1;
    return rand === 1 ? "Rock" : rand === 2 ? "Paper" : "Scissors";
}

let playerScore = 0;
let machineScore = 0;
let isGameOver = false;
let winningScore = 3;

const play = () => {
    if (!isGameOver) {
        let result;
        const playerWeapon = weapon.value;
        let machineResult = machineWeapon();
        machineWeapon();
        if (playerWeapon === machineResult) {
            result = "Draw";
            machineImage.src = playerImage.src;
        } else if (playerWeapon === "Rock" && machineResult === "Scissors") {
            result = "Rock destroys Scissors";
            machineImage.src = "scissors.png";
            playerScore += 1;
        } else if (playerWeapon === "Scissors" && machineResult === "Rock") {
            result = "Rock destroys Scissors";
            machineImage.src = "rock.png";
            machineScore += 1;
        } else if (playerWeapon === "Paper" && machineResult === "Rock") {
            result = "Paper wraps Rock";
            machineImage.src = "rock.png";
            playerScore += 1;
        } else if (playerWeapon === "Rock" && machineResult === "Paper") {
            result = "Paper wraps Rock";
            machineImage.src = "paper.png";
            machineScore += 1;
        } else if (playerWeapon === "Scissors" && machineResult === "Paper") {
            result = "Scissors cut Paper";
            machineImage.src = "paper.png";
            playerScore += 1;
        } else if (playerWeapon === "Paper" && machineResult === "Scissors") {
            result = "Scissors cut Paper";
            machineImage.src = "scissors.png";
            machineScore += 1;
        }

        const winner = document.createElement("li");
        banner.appendChild(winner)
        winner.textContent = result;
        machineScoreDisplay.textContent = machineScore;
        playerScoreDisplay.textContent = playerScore;
        playButton.innerText = "Next Round"

        if (playerScore === 3) {
            isGameOver = true;
            result = "You Won!"
            weaponSelector.disabled = true;
            winner.textContent = result;
            const playAgainButton = document.createElement("button");
            banner.appendChild(playAgainButton);
        } else if (machineScore === 3) {
            isGameOver = true;
            result = "Machine Won!"
            weaponSelector.disabled = true;
            winner.textContent = result;
            const playAgainButton = document.createElement("button");
            banner.appendChild(playAgainButton);
        }
    }
}

playButton.addEventListener("click", play)

weaponSelector.addEventListener("change", () => {
    weaponSelector.value === "Rock" ? playerImage.src = "rock.png" : weaponSelector.value === "Paper" ? playerImage.src = "paper.png"
        : weaponSelector.value === "Scissors" ? playerImage.src = "scissors.png" : playerImage.src = "question.png"
})