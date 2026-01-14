const chat = document.getElementById("chat-body");
const input = document.getElementById("textInput");

/* -------- Display Messages -------- */
function botMessage(text) {
    chat.innerHTML += `<div class="bot">${text}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function userMessage(text) {
    chat.innerHTML += `<div class="user">${text}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function showButtons(buttons) {
    let html = `<div class="buttons">`;
    buttons.forEach(b => {
        html += `<button onclick="${b.action}">${b.text}</button>`;
    });
    html += `</div>`;
    chat.innerHTML += html;
    chat.scrollTop = chat.scrollHeight;
}

/* -------- Conversation Flow -------- */
function startBot() {
    botMessage("Hi 👋 I am EduGuide Bot. How can I help you?");
    showButtons([
        { text: "Courses after Inter", action: "afterInter()" },
        { text: "Exams", action: "exams()" },
        { text: "Career", action: "careers()" }
    ]);
}

function afterInter() {
    userMessage("Courses after Inter");
    botMessage("You can choose:");
    showButtons([
        { text: "B.Tech", action: "simpleReply('B.Tech branches: CSE, AI & DS, ECE, EEE, MECH')" },
        { text: "Degree", action: "simpleReply('Degree courses: B.Sc, B.Com, B.A')" },
        { text: "Diploma", action: "simpleReply('Diploma options: Polytechnic, ITI')" }
    ]);
}

function exams() {
    userMessage("Exams");
    botMessage("Popular exams include EAMCET, JEE, NEET, GATE.");
    backMenu();
}

function careers() {
    userMessage("Career");
    botMessage("Career options: Software Engineer, Data Analyst, Government Jobs.");
    backMenu();
}

function simpleReply(text) {
    botMessage(text);
    backMenu();
}

function backMenu() {
    showButtons([{ text: "Back to Menu", action: "startBot()" }]);
}

/* -------- TEXT INPUT HANDLING -------- */
function handleText() {
    let msg = input.value.toLowerCase();
    if (!msg) return;
    userMessage(msg);
    input.value = "";

    if (msg.includes("hi")) {
        startBot();
    }
    else if (msg.includes("courses")) {
        afterInter();
    }
    else if (msg.includes("exam")) {
        exams();
    }
    else if (msg.includes("career")) {
        careers();
    }
    else if (msg.includes("bye")) {
        botMessage("Thank you for using EduGuide Bot 👋");
    }
    else {
        botMessage("Sorry, I can guide only on education topics.");
    }
}

/* -------- VOICE INPUT -------- */
function startVoice() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice not supported in this browser");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        const speech = event.results[0][0].transcript;
        input.value = speech;
        handleText();
    };
}

/* Start bot */
startBot();
