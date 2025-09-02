const clickButton = document.getElementById("clickMe");
const countSpan = document.getElementById("count");
const resetButton = document.getElementById("reset");

let count = 0;

function updateDisplay() {
  countSpan.textContent = count;
  resetButton.disabled = count === 0;
}

clickButton.addEventListener("click", function () {
  count++;
  updateDisplay();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
