/**
 * @fileoverview Handles home view logic.
 * @description Contains functions that run specifically for the home view page.
 */


// Runs as soon as the page load
document.addEventListener("DOMContentLoaded", () => {
    showToast("You have logged in!", ['info'], 5000)
})


document.getElementById('hello-btn').addEventListener('click', () => {
    showToast('Hello!!', ['other'], 3000);
});

document.getElementById('success-btn').addEventListener('click', () => {
    showToast('You clicked the success button!', ['success'], 3000);
});

document.getElementById('warning-btn').addEventListener('click', () => {
    showToast('This is your warning message!', ['warning'], 3000);
});

document.getElementById('error-btn').addEventListener('click', () => {
    showToast('Uh oh, something went wrong. Please try again later.', ['error'], 3000);
});

document.getElementById('long-btn').addEventListener('click', () => {
    showToast('This is an extra long toast message! Hover your mouse over this message. It will pause the toast message so it does not disappear. This will give you plenty of time to read the full message! Once you have finished reading it, just move your mouse off of the toast message and it will disappear as normal. If you read to the end of this message, check out the bottom of the page, there is a surprise joke!', 
                ['info'], 
                3000);
});

document.getElementById('timer-btn').addEventListener('click', () => {
    showToastTimer('You should be able to see a progress bar on this toast now!', ['info'], 5000);
});

document.getElementById('undo-btn').addEventListener('click', () => {
    showToastUndo('You can undo this toast message. If you wait for it to disappear or click the exit button, you will have the option to undo it.', 
                ['info'], 
                3000);
});

document.getElementById('joke-btn').addEventListener('click', () => {
    showToast('Because it needed a filling! <img src=\'assets/images/tooth-solid-full.svg\' alt=\'Tooth\' style=\'width:20px; vertical-align:middle; margin-left:8px;\'>', 
            ['other'], 
            5000);
});