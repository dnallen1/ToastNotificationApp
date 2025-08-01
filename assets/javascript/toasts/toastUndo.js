/**
 * @fileoverview Handles undo toast notification logic for the UI.
 * @description Contains functions to render and manage custom toast messages.
 */

// ====== Variables ======
let toasts = [];
let dismissedToasts = [];


// ====== Functions ======
function toastUndo(message, type = [], id = null, duration) {

  // Creating toast container
  if (!toastContain) {
    toastContain = document.createElement("div");
    toastContain.classList.add("toast-container");
    document.body.appendChild(toastContain);
  }

  // Creating individual toast div
  const toastElement = document.createElement("div");
  toastElement.classList.add("toast", ...type);
  toastElement.innerHTML = message;
  toastElement.classList.add("managed-toast"); //this class is only to track which toasts to remove
  if (id) toastElement.dataset.id = id; //Tracking each toast div to undo

  // Creating close button
  // using custom close button function
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("toast-close");
  closeBtn.setAttribute("aria-label", "Close toast");
  closeBtn.addEventListener("click", () => {
    dismissToastByElement(toastElement); 
  });
  toastElement.appendChild(closeBtn);

  // Animate in
  setTimeout(() => toastElement.classList.add("open"), 10);

  // Adding the timeout with custom close
  let hideTimeout = setTimeout(() => dismissToastByElement(toastElement), duration);

  // Pause on hover
  toastElement.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
  });

  // Resume on leave
  toastElement.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(() => dismissToastByElement(toastElement), duration);
  });

  toastContain.prepend(toastElement);

  return toastElement;
}

function showToastUndo(message, type = [], duration) {
  const id = Date.now() + Math.random(); // creating toast ID to track it
  const toastObj = { id, message, type, duration };
  toasts.push(toastObj);
  renderToasts();
  return id;
}

function renderToasts() {

  const managedToasts = toastContain.querySelectorAll(".managed-toast");
  managedToasts.forEach(toast => toast.remove());

  toasts.forEach(({ id, message, type, duration }) => {
    toastUndo(message, type, id, duration);
  });
}

function dismissToast(id) {
  const index = toasts.findIndex(t => t.id === id);
  if (index !== -1) {
    const [removed] = toasts.splice(index, 1);
    dismissedToasts.push(removed);
    renderToasts();
    showRemovedToast(removed);
  }
}


function dismissToastByElement(el) {
  const id = parseFloat(el.dataset.id);
  if (id) {
    dismissToast(id);
  } else {
    el.classList.remove("open");
    setTimeout(() => {
      if (toastContain.contains(el)) toastContain.removeChild(el);
    }, FADE_DUR);
  }
}

function showRemovedToast(removedToast) {

  const undoElement = document.createElement("div");
  undoElement.classList.add("toast", "undo");
  undoElement.innerText = `Dismissed`;

  const undoBtn = document.createElement("button");
  undoBtn.innerHTML = "<img src=\'assets/images/rotate-left-solid-full.svg\' alt=\'Undo\' style=\'width:20px; vertical-align:middle;\'>";
  undoBtn.classList.add("undo-btn");

  undoBtn.addEventListener("click", () => {
    toasts.push(removedToast);
    dismissedToasts = dismissedToasts.filter(t => t.id !== removedToast.id);
    renderToasts();
    if (toastContain.contains(undoElement)) toastContain.removeChild(undoElement);
  });

  undoElement.appendChild(undoBtn);
  toastContain.appendChild(undoElement);

  setTimeout(() => {
    if (toastContain.contains(undoElement)) {
      undoElement.classList.remove("open");
      setTimeout(() => {
        if (toastContain.contains(undoElement)) toastContain.removeChild(undoElement);
      }, FADE_DUR);
    }
  }, 2000);

  // Animate in
  setTimeout(() => undoElement.classList.add("open"), 10);
}

