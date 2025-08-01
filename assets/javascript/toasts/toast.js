/**
 * @fileoverview Handles toast notification logic for the UI.
 * @description Contains functions to render and manage custom toast messages.
 */


// ====== Global Variables ======

//Fading duration -- Allows better transition for toast message
const FADE_DUR = 500; 
let toastContain;

// ====== Functions ======
function showToast(message, type, duration) {

    // Creating toast container
    if (!toastContain) {
      toastContain = document.createElement("div");
      toastContain.classList.add("toast-container");
      document.body.appendChild(toastContain);
    }
  
    // Creating individual toast div
    const toastElement = document.createElement("div");
    toastElement.classList.add("toast", ...type); // Adding what type of toast message it is (changes the styling)
    toastElement.innerHTML = message; // use innerHTML instead of innerText so it can display an image emedded in message
  
    // Creating close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("toast-close");
    // Adding onClick event to close button
    closeBtn.addEventListener("click", () => {
      toastElement.classList.remove("open"); 
      setTimeout(() => {
        if (toastContain.contains(toastElement)) {
          toastContain.removeChild(toastElement);
        }
      }, FADE_DUR);
    });
    toastElement.appendChild(closeBtn); 
  
    // Animation entry
    setTimeout(() => toastElement.classList.add("open"), 10);
  
    // Adding the timeout so the toast message will disappear
    let hideTimeout = setTimeout(() => toastElement.classList.remove("open"), duration);
    let removeTimeout = setTimeout(() => {
      if (toastContain.contains(toastElement)) {
        toastContain.removeChild(toastElement);
      }
    }, duration + FADE_DUR);
  
    // Pause timer on hover
    toastElement.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    });
  
    // Resume timer when mouse leaves
    toastElement.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(() => toastElement.classList.remove("open"), duration);
      removeTimeout = setTimeout(() => {
        if (toastContain.contains(toastElement)) {
          toastContain.removeChild(toastElement);
        }
      }, duration + FADE_DUR);
    });

    // Adding the final toast element to the toast container
    toastContain.prepend(toastElement); 
  }

  


