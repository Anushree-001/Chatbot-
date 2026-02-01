const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");

/* ---------------- LOAD INTENTS FROM HTML JSON ---------------- */

const intentScript = document.getElementById("intent-data");
const intents = JSON.parse(intentScript.textContent);

/* ---------------- CHATBOT LOGIC ---------------- */
//INTENT MATCHING

function getBotReply(userMessage) {
  const message = userMessage.toLowerCase().trim();

  for (let i = 0; i < intents.length; i++) {
    for (let j = 0; j < intents[i].keywords.length; j++) {
      if (message.includes(intents[i].keywords[j])) {
        const replies = intents[i].replies;
        return replies[Math.floor(Math.random() * replies.length)];
      }
    }
  }

  return "Sorry, I didn't understand that. Can you try again?";
}

/* ---------------- UI FUNCTIONS ---------------- */

// dynamic dom manipulation 

function createChat(message, type) {
  const chat = document.createElement("li");
  chat.className = `chat ${type}`;

  chat.innerHTML =
    type === "outgoing"
      ? `<p>${message}</p>`//outgoing mans message sent by user 
      : `<span class="material-symbols-outlined">android</span><p>${message}</p>`;

  return chat;
}

function handleChat() {
  const message = chatInput.value.trim();
  if (!message) return;

  chatbox.appendChild(createChat(message, "outgoing"));
  chatInput.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;

  setTimeout(() => {
    const reply = getBotReply(message);
    chatbox.appendChild(createChat(reply, "incoming"));
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 400);
}

/* ---------------- EVENTS ---------------- */

sendBtn.addEventListener("click", handleChat);

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

document.querySelector(".chatbot-toggler").addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
});

document.querySelector(".start-chat-btn").addEventListener("click", () => {
  document.body.classList.add("chatbot-active", "show-chatbot");
});
