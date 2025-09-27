
const button = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const roll_history = document.getElementById("roll-history");

let rollCount = 0;

function rolldice() {
    const rollresults = Math.floor(Math.random() * 6); 
    const dice_combinations = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
    dice.innerHTML = dice_combinations[rollresults];
    rollCount++;
    const li = document.createElement("li");
    li.innerHTML = `Roll ${rollCount}: <span>${dice_combinations[rollresults]}</span>`;
    roll_history.prepend(li);
}

function clearHistory() {
    roll_history.innerHTML = "";
    rollCount = 0;
}
clearHistory();

button.addEventListener("click", () => {
    dice.classList.add("roll-animation");

    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rolldice(); 
    }, 1000);  
});
