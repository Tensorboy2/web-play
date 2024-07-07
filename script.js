// script.js

// Initialize the counter value
let counterValue = 0;

// Function to update the counter display
function updateCounterDisplay() {
  const counterElement = document.getElementById('counter');
  counterElement.textContent = counterValue;
}

// Function to handle increment
function incrementCounter() {
  counterValue += 1;
  updateCounterDisplay();
}

// Function to handle decrement
function decrementCounter() {
  counterValue -= 1;
  updateCounterDisplay();
}

// Add event listeners to the buttons
document.getElementById('increment').addEventListener('click', incrementCounter);
document.getElementById('decrement').addEventListener('click', decrementCounter);

// Initial display update
updateCounterDisplay();
