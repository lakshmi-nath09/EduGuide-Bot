const chat = document.getElementById("chat-body");
const input = document.getElementById("textInput");

/* ---------- BASIC FUNCTIONS ---------- */
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
    buttons.forEach(btn => {
        html += `<button onclick="${btn.action}">${btn.text}</button>`;
    });
    html += `</div>`;
    chat.innerHTML += html;
    chat.scrollTop = chat.scrollHeight;
}

/* ---------- START BOT ---------- */
function startBot() {
    botMessage("Hi 👋 I am EduGuide Bot. How can I help you?");
    showButtons([
        { text: "Courses", action: "afterInter()" },
        { text: "Exams", action: "exams()" },
        { text: "Careers", action: "careers()" }
    ]);
}

/* ---------- COURSES ---------- */
function afterInter() {
    userMessage("Courses after Inter");
    botMessage("You can choose:");
    showButtons([
        { text: "B.Tech", action: "btechBranches()" },
        { text: "Degree", action: "degree()" },
        { text: "Diploma", action: "diploma()" }
    ]);
}

function btechBranches() {
    userMessage("B.Tech");
    botMessage("Choose a B.Tech branch:");
    showButtons([
        { text: "CSE", action: "cse()" },
        { text: "AI & DS", action: "ai()" },
        { text: "ECE", action: "ece()" },
        { text: "EEE", action: "eee()" },
        { text: "MECH", action: "mech()" }
    ]);
}

function cse() {
    botMessage("💻 CSE (Computer Science Engineering): Programming, software development, AI, ML, data science and web technologies.");
    backMenu();
}

function ai() {
    botMessage("🤖 AI & DS: Artificial Intelligence, Machine Learning, Data Analytics, Deep Learning and automation.");
    backMenu();
}

function ece() {
    botMessage("📡 ECE: Communication systems, VLSI, embedded systems and signal processing.");
    backMenu();
}

function eee() {
    botMessage("⚡ EEE: Power systems, electrical machines, renewable energy and control systems.");
    backMenu();
}

function mech() {
    botMessage("🛠️ Mechanical Engineering: Design, manufacturing, automobiles, thermodynamics and robotics.");
    backMenu();
}

function degree() {
    botMessage("🎓 Degree Courses: B.Sc, B.Com, B.A with options in science, commerce and arts.");
    backMenu();
}

function diploma() {
    botMessage("📘 Diploma: Polytechnic & ITI courses focused on practical technical skills.");
    backMenu();
}

/* ---------- EXAMS ---------- */
function exams() {
    userMessage("Exams");
    botMessage("Choose an exam:");
    showButtons([
        { text: "EAMCET", action: "eamcet()" },
        { text: "JEE", action: "jee()" },
        { text: "GATE", action: "gate()" }
    ]);
}

function eamcet() {
    botMessage("📝 EAMCET: State-level exam for engineering and pharmacy admissions.");
    backMenu();
}

function jee() {
    botMessage("📝 JEE: National-level exam for IITs, NITs and top engineering colleges.");
    backMenu();
}

function gate() {
    botMessage("📝 GATE: Exam for M.Tech admissions and PSU jobs.");
    backMenu();
}

/* ---------- CAREERS ---------- */
function careers() {
    userMessage("Careers");
    botMessage("Choose a career option:");
    showButtons([
        { text: "Software Engineer", action: "software()" },
        { text: "Data Analyst", action: "data()" },
        { text: "Government Jobs", action: "govt()" }
    ]);
}

function software() {
    botMessage("👨‍💻 Software Engineer: Builds software, websites and applications using programming skills.");
    backMenu();
}

function data() {
    botMessage("📊 Data Analyst: Analyzes data to help organizations make decisions.");
    backMenu();
}

function govt() {
    botMessage("🏛️ Government Jobs: UPSC, SSC, Banking, Railways and State services.");
    backMenu();
}

/* ---------- BACK MENU ---------- */
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
    } else if (msg.includes("course")) {
        afterInter();
    } else if (msg.includes("exam")) {
        exams();
    } else if (msg.includes("career")) {
        careers();
    } else if (msg.includes("bye")) {
        botMessage("Thank you for using EduGuide Bot 👋");
    } else {
        botMessage("Sorry, I can help only with education-related queries.");
    }
}

/* ---------- ENTER KEY ---------- */
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleText();
    }
});

/* ---------- VOICE INPUT ---------- */
function startVoice() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Voice input not supported. Use Google Chrome.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (event) {
        input.value = event.results[0][0].transcript;
        handleText();
    };
}

/* ---------- INIT ---------- */
startBot();
