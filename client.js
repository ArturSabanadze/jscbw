const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = function (event) {
  const msg = document.createElement("div");
  msg.textContent = "User: " + event.data;
  document.getElementById("chat-field").appendChild(msg);
};

function sendMessage() {
  const input = document.getElementById("textInputField");
  socket.send(input.value);
  input.value = "";
}
