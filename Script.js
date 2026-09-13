function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = input.value.trim();

  if (message === "") return;

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;

  chatBox.appendChild(userMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Noor AI reply
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";

    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      botMessage.textContent =
        "Hello! 👋 Welcome to Noor AI.";
    }
    else if (text.includes("how are you")) {
      botMessage.textContent =
        "I'm doing great! 😊 How can I help you?";
    }
    else if (text.includes("your name")) {
      botMessage.textContent =
        "My name is Noor AI. 🤖";
    }
    else if (text.includes("who are you")) {
      botMessage.textContent =
        "I am Noor AI, your AI chat assistant. ✨";
    }
    else if (text.includes("bye")) {
      botMessage.textContent =
        "Goodbye! 👋 Have a nice day.";
    }
    else {
      botMessage.textContent =
        "I am Noor AI 🤖. Your question is: " + message;
    }

    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

  }, 700);
}


// Press Enter to send
document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
