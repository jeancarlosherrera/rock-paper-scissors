const playButton = document.getElementById("play");
const weaponSelector = document.getElementById("weapon");
const playerImage = document.getElementById("player-img");
const machineImage = document.getElementById("machine-img");
const playerScoreDisplay = document.getElementById("player-score");
const machineScoreDisplay = document.getElementById("machine-score");
const banner = document.getElementById("banner");
const resetButton = document.getElementById("reset");

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

        machineScoreDisplay.textContent = machineScore;
        playerScoreDisplay.innerText = playerScore;
        playButton.innerText = "Next Round"
        banner.textContent = result;

        if (playerScore === 3) {
            isGameOver = true;
            result = "You Won!"
            weaponSelector.disabled = true;
            banner.textContent = result;
            playButton.disabled = true;
            resetButton.textContent = "Play Again";

        } else if (machineScore === 3) {
            isGameOver = true;
            result = "Machine Won!"
            weaponSelector.disabled = true;
            banner.textContent = result;
            playButton.disabled = true;
            resetButton.textContent = "Play Again";
        }
    }
}

const reset = () => {
    playerScore = 0;
    machineScore = 0;
    isGameOver = false;
    playButton.disabled = false;
    weaponSelector.disabled = false;
    weaponSelector.selectedIndex = 0;
    playerScoreDisplay.textContent = playerScore;
    machineScoreDisplay.textContent = machineScore;
    playerImage.src = "question.png";
    machineImage.src = "question.png"
    resetButton.textContent = "Reset";
    playButton.textContent = "Play";
    banner.textContent = "Choose Your Weapon";
}

playButton.addEventListener("click", play);

resetButton.addEventListener("click", reset);

weaponSelector.addEventListener("change", () => {
    weaponSelector.value === "Rock" ? playerImage.src = "rock.png" : weaponSelector.value === "Paper" ? playerImage.src = "paper.png"
        : weaponSelector.value === "Scissors" ? playerImage.src = "scissors.png" : playerImage.src = "question.png"
})