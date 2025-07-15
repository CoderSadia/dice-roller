const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");
const history = document.getElementById("history");

let historyList = [];

function rollDice() {
    // Start animation
    dice.classList.add("rolling");
    rollBtn.disabled = true;
    
    // Show result after 0.8 seconds
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.textContent = randomNumber;
        dice.classList.remove("rolling");
        rollBtn.disabled = false;
        
        // Add to history
        historyList.unshift(randomNumber); // Newest roll first
        updateHistory();
    }, 800);
}

function updateHistory() {
    history.innerHTML = "<h3>History:</h3>" + 
        historyList.map((roll, i) => 
            `<p>${i+1}. ${roll}</p>`
        ).join("");
}

// Click event
rollBtn.addEventListener("click", rollDice);

// Spacebar support
document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        rollDice();
    }
});

