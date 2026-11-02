let count = 0;

const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    counterValue.textContent = count;
    if (count > 0) {
        counterValue.className = "positive";
    } else if (count < 0) {
        counterValue.className = "negative";
    } else {
        counterValue.className = "";
    }
}

incrementBtn.addEventListener("click", function() {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", function() {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});