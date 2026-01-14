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

/* ---------- COURSES AFTER INTER ---------- */
function afterInter() {
    userMessage("Courses after Inter");
    botMessage("You can choose:");
    showButtons([
        { text: "B.Tech", action: "btechBranches()" },
        { text: "Degree", action: "degreeOptions()" },
        { text: "Medical", action: "medical()" },
        { text: "Diploma", action: "diploma()" }
    ]);
}

/* ---------- B.TECH ---------- */
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
    botMessage("💻 CSE: Programming, software development, AI, ML, data science, cybersecurity and web technologies.");
    backMenu();
}

function ai() {
    botMessage("🤖 AI & DS: Artificial Intelligence, Machine Learning, Data Analytics, Deep Learning and automation.");
    backMenu();
}

function ece() {
    botMessage("📡 ECE: Communication systems, VLSI, embedded systems, IoT and signal processing.");
    backMenu();
}

function eee() {
    botMessage("⚡ EEE: Power systems, electrical machines, renewable energy and control systems.");
    backMenu();
}

function mech() {
    botMessage("🛠️ Mechanical: Design, manufacturing, automobiles, robotics and thermal engineering.");
    backMenu();
}

/* ---------- DEGREE ---------- */
function degreeOptions() {
    userMessage("Degree");
    botMessage("Choose a Degree course:");
    showButtons([
        { text: "B.Sc", action: "bsc()" },
        { text: "B.Com", action: "bcom()" },
        { text: "B.A", action: "ba()" }
    ]);
}

function bsc() {
    botMessage(
        "🔬 B.Sc:\nSubjects include Mathematics, Physics, Chemistry, Computer Science, Biotechnology, Data Science.\nCareers: Scientist, Analyst, Teacher, M.Sc."
    );
    backMenu();
}

function bcom() {
    botMessage(
        "📊 B.Com:\nFocus on Accounting, Finance, Taxation, Economics and Business Management.\nCareers: Accountant, Banker, CA, MBA."
    );
    backMenu();
}

function ba() {
    botMessage(
        "📚 B.A:\nIncludes History, Political Science, Economics, Psychology, English.\nCareers: Civil Services, Teaching, Journalism, Law."
    );
    backMenu();
}

/* ---------- MEDICAL ---------- */
function medical() {
    userMessage("Medical");
    botMessage("🩺 Medical courses after Inter (BiPC):");
    showButtons([
        { text: "MBBS", action: "mbbs()" },
        { text: "BDS", action: "bds()" },
        { text: "BAMS", action: "bams()" },
        { text: "BHMS", action: "bhms()" }
    ]);
}

function mbbs() {
    botMessage(
        "👩‍⚕️ MBBS:\nDuration: 5.5 years.\nEntrance: NEET.\nCareer: Doctor, MD/MS, hospitals."
    );
    backMenu();
}

function bds() {
    botMessage(
        "🦷 BDS:\nDuration: 5 years.\nEntrance: NEET.\nCareer: Dentist, dental clinics."
    );
    backMenu();
}

function bams() {
    botMessage(
        "🌿 BAMS:\nAyurvedic medicine.\nEntrance: NEET.\nCareer: Ayurvedic doctor."
    );
    backMenu();
}

function bhms() {
    botMessage(
        "💊 BHMS:\nHomeopathy medicine.\nEntrance: NEET.\nCareer: Homeopathy doctor."
    );
    backMenu();
}

/* ---------- DIPLOMA ---------- */
function diploma() {
    botMessage("📘 Diploma: Polytechnic & ITI courses focused on practical skills and early jobs.");
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
    botMessage("📝 EAMCET: State-level engineering & pharmacy entrance exam.");
    backMenu();
}

function jee() {
    botMessage("📝 JEE: National-level exam for IITs and NITs.");
    backMenu();
}

function gate() {
    botMessage("📝 GATE: For M.Tech admissions and PSU jobs.");
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
    botMessage("👨‍💻 Software Engineer: Develops applications and systems.");
    backMenu();
}

function data() {
    botMessage("📊 Data Analyst: Analyzes data for business decisions.");
    backMenu();
}

function govt() {
    botMessage("🏛️ Government Jobs: UPSC, SSC, Banking, Railways.");
    backMenu();
}

/* ---------- BACK ---------- */
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

    if (msg === "hi" || msg === "hello") startBot();
    else if (msg.includes("course")) afterInter();
    else if (msg.includes("exam")) exams();
    else if (msg.includes("career")) careers();
    else if (msg.includes("thank")) botMessage("You're welcome 😊 Happy to help!");
    else if (msg.includes("bye")) botMessage("Thank you for using EduGuide Bot 👋");
    else botMessage("Sorry, I can help only with education-related queries.");
}

/* ---------- ENTER KEY ---------- */
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleText();
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
