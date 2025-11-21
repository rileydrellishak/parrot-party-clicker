// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
"use strict";

const state = {
  numClicks: 0,
  parrot: null,
  resetBtn: null,
  counterText: null
};

const loadControls = () => {
  state.parrot = document.getElementById('parrotImg');
  state.counterText = document.getElementById('clickCounter');
  state.resetBtn = document.getElementById('resetButton');
  state.numClicks = 0;
}


const handleUpdateParrotCounter = (event) => {
  state.numClicks += 1;
  state.counterText.textContent = `Clicks: ${state.numClicks}`;
}

const registerEvents = () => {
  state.parrot.addEventListener('click', handleUpdateParrotCounter);
  state.resetBtn.addEventListener('click', handleResetButtonClicked);
}
const handleResetButtonClicked = (event) => {
  state.numClicks = 0;
  state.counterText.textContent = `Clicks: ${state.numClicks}`;
}

const onLoaded = () => {
  loadControls();
  registerEvents();
}

onLoaded();