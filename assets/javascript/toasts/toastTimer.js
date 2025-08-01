/**
 * @fileoverview Handles toast timer notification logic for the UI.
 * @description Contains functions to render and manage custom toast messages.
 */

// TODO: This function is identical to toast.js with the addition of timer bar
function showToastTimer(message, type, duration) {

  if (!toastContain) {
    toastContain = document.createElement("div");
    toastContain.classList.add("toast-container");
    document.body.appendChild(toastContain);
  }

  const toastElement = document.createElement("div");
  toastElement.classList.add("toast", ...type);
  toastElement.innerHTML = message;

  // Create timer bar container
  const timerBar = document.createElement("div");
  timerBar.classList.add("toast-timer");
  toastElement.appendChild(timerBar);

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("toast-close");
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

  // Pause on hover
  toastElement.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
    clearTimeout(removeTimeout);
    timerBar.style.animationPlayState = "paused";
  });

  // Resume on leave
  toastElement.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => toastElement.classList.remove("open"), duration);
    removeTimeout = setTimeout(() => {
      if (toastContain.contains(toastElement)) {
        toastContain.removeChild(toastElement);
      }
    }, duration + FADE_DUR);
    timerBar.style.animationPlayState = "running";
  });

  // Timer Bar Animation -- styling is found in toast.css
  timerBar.style.animation = `timerBarAnim ${duration}ms linear forwards`;

  toastContain.prepend(toastElement);
}
