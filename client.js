document.addEventListener("DOMContentLoaded", function () {
  const socket = new WebSocket("ws://localhost:8080");

  socket.onmessage = function (event) {
    const msg = document.createElement("div");
    msg.textContent = event.data;
    document.getElementById("chat-field").appendChild(msg);
  };

  function sendMessage() {
    const input = document.getElementById("textInputField");
    socket.send(input.value);
    input.value = "";
  }

  document.getElementById("textInputField").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  document.getElementById("textInput").addEventListener("click", sendMessage);
});
