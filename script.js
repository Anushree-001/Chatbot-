const chatbox = document.querySelector(".chatbox"); //container — where messages will be displayed.
const chatInput = document.querySelector(".chat-input textarea");//Refers to the text area where the user types a message.
const sendBtn = document.querySelector(".chat-input span");//Finds the send button (paper plane icon).

// Simple responses
const responses = {
    "hello": "Hello! How can I help you?",
    "hi": "Hi there! Nice to meet you!",
    "hey": "Hey! What's up?",
    "hola": "Hola! Nice to meet you!",
    "namaste": "Namaste! Welcome!",
    "howdy": "Howdy! How are you doing?",
    "greetings": "Greetings! How can I assist you today?",
    "how are you": "I'm doing great, thanks for asking! How are you?",
    "what is your name": "I'm your friendly AI chatbot!",
    "who are you": "I'm an AI assistant here to chat with you.",
    "good morning": "Good morning! Hope you have a wonderful day!",
    "morning": "Good morning! Hope you have a wonderful day!",
    "good afternoon": "Good afternoon! How's your day going?",
    "afternoon": "Good afternoon! How's your day going?",
    "good evening": "Good evening! How was your day?",
    "evening": "Good evening! How was your day?",
    "good night": "Good night! Sweet dreams!",
    "night": "Good night! Sweet dreams!",
    "see you later": "See you later! Take care!",
    "see you": "See you! Have a great day!",
    "take care": "You too! Take care and stay safe!",
    "catch you later": "Catch you later! It was fun chatting!",
    "have a good day": "You too! Have an amazing day!",
    "have a nice day": "Thank you! You have a nice day too!",
    "time": `Current time: ${new Date().toLocaleTimeString()}`,
    "date": `Today's date: ${new Date().toLocaleDateString()}`,
    "help": "I'm here to chat! Ask me anything or just say hello.",
    "what can you do": "I can have conversations, answer basic questions, tell jokes, share fun facts, and keep you company!",
    "bye": "Goodbye! It was nice chatting with you!",
    "goodbye": "See you later! Take care!",
    "thanks": "You're welcome! Happy to help!",
    "thank you": "My pleasure! Anything else I can help with?",
    "how old are you": "I'm timeless! I exist in the digital world.",
    "where are you from": "I'm from the world of code and algorithms!",
    "what do you like": "I enjoy having conversations, telling jokes, and helping people!",
    "favorite color": "I love all colors, but blue and purple are pretty cool! 💙💜",
    "favorite food": "I don't eat, but I imagine pizza would be amazing! 🍕",
    "hobby": "I love chatting with people and learning new things!",
    "music": "I can't hear music, but I bet it's wonderful! What's your favorite song? 🎵",
    "movie": "I can't watch movies, but I'd love to hear about your favorites! 🎬",
    "book": "I process lots of text, but what's a good book you'd recommend? 📚",
    "sport": "I can't play sports, but they sound exciting! What's your favorite? ⚽",
    "travel": "I exist everywhere on the internet! Where would you like to travel? ✈️",
    "weather": "I can't check the weather, but I hope it's nice where you are! ☀️",
    "fun fact": "Did you know honey never spoils? Archaeologists have found edible honey in ancient Egyptian tombs! 🍯",
    "fact": "Octopuses have three hearts and blue blood! 🐙",
    "amazing": "Bananas are berries, but strawberries aren't! Nature is weird! 🍌🍓",
    "cool": "A group of flamingos is called a 'flamboyance'! How fancy! 🦩",
    "interesting": "Dolphins have names for each other - they use unique whistle signatures! 🐬"
};

// Jokes array
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why did the math book look so sad? Because it had too many problems! 📚",
    "What do you call a sleeping bull? A bulldozer! 🐂",
    "Why don't skeletons fight each other? They don't have the guts! 💀",
    "What do you call a fish wearing a crown? A king fish! 👑🐟",
    "Why did the coffee file a police report? It got mugged! ☕",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks! 🦕",
    "Why don't programmers like nature? It has too many bugs! 🐛",
    "What do you call a computer that sings? A Dell! 🎵💻",
    "Why did the robot go on a diet? He had a byte problem! 🤖",
    "What's a computer's favorite snack? Microchips! 💻🍟"
];

// Fun facts array
const funFacts = [
    "Honey never spoils! Archaeologists have found edible honey in ancient Egyptian tombs! 🍯",
    "Octopuses have three hearts and blue blood! 🐙",
    "Bananas are berries, but strawberries aren't! 🍌🍓",
    "A group of flamingos is called a 'flamboyance'! 🦩",
    "Dolphins have names for each other using unique whistle signatures! 🐬",
    "Wombat poop is cube-shaped! 📦",
    "There are more possible games of chess than atoms in the observable universe! ♟️",
    "A day on Venus is longer than its year! 🪐",
    "Sharks are older than trees! 🦈🌳",
    "The shortest war in history lasted only 38-45 minutes! ⚔️",
    "Bubble wrap was originally invented as wallpaper! 🫧",
    "The human brain uses about 20% of the body's total energy! 🧠",
    "Penguins can jump 6 feet high! 🐧",
    "A group of pandas is called an 'embarrassment'! 🐼",
    "The Great Wall of China isn't visible from space with the naked eye! 🏯"
];

// Create chat message
function createChat(message, type) {// message -text to be displayed, type:outgoing(by user) and incoming(by bot)
    const chat = document.createElement("li");//message bubble in the chatbox
    chat.className = `chat ${type}`;
    chat.innerHTML = type === "outgoing" ? //if msg is outgoing,only text bubble
        `<p>${message}</p>` : 
        `<span class="material-symbols-outlined">android</span><p>${message}</p>`;//if message is incoming ie from bot to user ,disply text + robot symbol
    return chat;
}

// Generate response
function getResponse(input) {
    const text = input.toLowerCase().trim();// converts text to lowercase and remove extra spaces
    
    // Check for exact matches first
    if (responses[text]) {
        return responses[text];
    }
    
    // Special cases for jokes and facts
    if (text.includes('joke') || text.includes('funny')) {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    if (text.includes('fact') || text.includes('interesting') || text.includes('cool') || text.includes('amazing')) {
        return funFacts[Math.floor(Math.random() * funFacts.length)];
    }
    
    // Check for partial matches (longer phrases first)
    const sortedKeys = Object.keys(responses).sort((a, b) => b.length - a.length);
    for (let key of sortedKeys) {
        if (text.includes(key)) {
            return responses[key];
        }
    }
    
    // Default responses for unknown input
    const defaultResponses = [
        "That's interesting! Tell me more.",
        "I see! What else would you like to talk about?",
        "Hmm, I'm not sure about that. Can you ask something else?",
        "That's a good point! What do you think about it?",
        "I'd love to learn more about that topic!"
    ];  //Predefined generic messages
       //Used when bot doesn’t understand the input.
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Handle chat
function handleChat() {
    const message = chatInput.value.trim();//reads the msg that user types
    if (!message) return;
    
    // Add user message
    chatbox.appendChild(createChat(message, "outgoing"));//creates user chat bubble
    chatInput.value = "";//clears input box
    chatbox.scrollTop = chatbox.scrollHeight;
    
    // Add bot response
    setTimeout(() => { //Creates typing delay for realism
        const response = getResponse(message);// gets bot message
        chatbox.appendChild(createChat(response, "incoming"));//adds a bot message bubble
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);
}

// Event listeners
sendBtn.addEventListener("click", handleChat);//When user clicks send icon → send message.
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {    
        e.preventDefault();
        handleChat();
    }
});  //If Enter pressed (without Shift), That means user wants to send.
//If user presses Shift+Enter → allows new line.

// Toggle chatbot
document.querySelector(".chatbot-toggler").addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

//close chat by clicking on X button
document.querySelector(".close-btn").addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

// Start chat button
document.querySelector(".start-chat-btn").addEventListener("click", () => {
    document.body.classList.add("chatbot-active", "show-chatbot"); /*Hides welcome screen
Opens chatbot window*/
});