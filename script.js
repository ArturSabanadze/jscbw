document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-2");

  // Button 1 – Hintergrundfarbe ändern
  document.getElementById("changeBgBtn").addEventListener("click", function () {
    if (container) {
      container.style.backgroundColor = "#dfe6e9";
    }
  });

  // Button 2 – Schriftgröße erhöhen
  document
    .getElementById("increaseFontBtn")
    .addEventListener("click", function () {
      if (container) {
        container.style.fontSize = "1.5em";
      }
    });

  // Button 3 – Rahmen ein-/ausblenden
  document
    .getElementById("toggleBorderBtn")
    .addEventListener("click", function () {
      if (container) {
        if (container.style.border) {
          container.style.border = "";
        } else {
          container.style.border = "2px solid #2d3436";
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
