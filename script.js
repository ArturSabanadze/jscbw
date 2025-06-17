document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-2");
  const textField = document.getElementById("chat-field");

  // Button 1 – Hintergrundfarbe ändern
  document.getElementById("changeBgBtn").addEventListener("click", function () {
    if (container.style.backgroundColor) {
      container.style.backgroundColor = null;
    } else {
      container.style.backgroundColor = "#224e83";
    }
  });

  // Button 2 – Schriftgröße erhöhen
  document
    .getElementById("increaseFontBtn")
    .addEventListener("click", function () {
      if (container.style.fontSize) {
        container.style.fontSize = null;
      }
      else {
        container.style.fontSize = "1.8em"
      }
    });

  // Button 3 – Rahmen ein-/ausblenden
 document
  .getElementById("toggleBorderBtn")
  .addEventListener("click", function () {
    const container = document.getElementById("container"); // ensure this exists
    if (container) {
      if (container.style.border) {
        container.style.border = "";
        container.style.borderRadius = "";
      } else {
        container.style.border = "4px solid rgb(149, 230, 125)";
        container.style.borderRadius = "24px";
      }
    }
  });


  // Button 4 – Stil zurücksetzen
  document
    .getElementById("resetStyleBtn")
    .addEventListener("click", function () {
      if (container) {
        container.removeAttribute("style");
      }
    });

  
  
});
