const chat = document.getElementById("chat-body");
const input = document.getElementById("textInput");

/* ---------- Helpers ---------- */
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

/* ---------- Bot Flow ---------- */
function startBot() {
    botMessage("Hi 👋 I am EduGuide Bot. How can I help you?");
    showButtons([
        { text: "Courses", action: "afterInter()" },
        { text: "Exams", action: "exams()" },
        { text: "Careers", action: "careers()" }
    ]);
}

function afterInter() {
    userMessage("Courses after Inter");
    botMessage("You can choose:");
    showButtons([
        { text: "B.Tech", action: "reply('B.Tech branches: CSE, AI & DS, ECE, EEE, MECH')" },
        { text: "Degree", action: "reply('Degree courses: B.Sc, B.Com, B.A')" },
        { text: "Diploma", action: "reply('Diploma options: Polytechnic, ITI')" }
    ]);
}

function exams() {
    userMessage("Exams");
    botMessage("Popular exams: EAMCET, JEE, GATE.");
    backMenu();
}

function careers() {
    userMessage("Careers");
    botMessage("Career options: Software Engineer, Data Analyst, Government Jobs.");
    backMenu();
}

function reply(text) {
    botMessage(text);
    backMenu();
}

function backMenu() {
    showButtons([
        { text: "Back to Menu", action: "startBot()" }
    ]);
}

/* ---------- TEXT INPUT ---------- */
function handleText() {
    let msg = input.value.trim().toLowerCase();
    if (msg === "") return;

    userMessage(msg);
    input.value = "";

    if (msg === "hi" || msg === "hello") {
        startBot();
    }
    else if (msg.includes("course")) {
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

/* ---------- ENTER KEY SUPPORT ---------- */
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleText();
    }
});

/* ---------- VOICE INPUT ---------- */
function startVoice() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice recognition not supported. Use Google Chrome.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
        const speech = event.results[0][0].transcript;
        input.value = speech;
        handleText();
    };
}

/* ---------- START ---------- */
startBot();
