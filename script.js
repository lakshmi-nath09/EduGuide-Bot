const chat = document.getElementById("chat-body");
const input = document.getElementById("textInput");

/* ---------- BASIC FUNCTIONS ---------- */
function botMessage(text) {
    chat.innerHTML += `<div class="bot">${text.replace(/\n/g, "<br>")}</div>`;
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
    botMessage("Choose your path:");
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
    botMessage("💻 CSE:\nProgramming, software development, AI, ML, data science, cybersecurity.");
    backMenu();
}

function ai() {
    botMessage("🤖 AI & DS:\nArtificial Intelligence, Machine Learning, Data Analytics, Deep Learning.");
    backMenu();
}

function ece() {
    botMessage("📡 ECE:\nCommunication systems, VLSI, embedded systems, IoT.");
    backMenu();
}

function eee() {
    botMessage("⚡ EEE:\nPower systems, electrical machines, renewable energy.");
    backMenu();
}

function mech() {
    botMessage("🛠️ Mechanical:\nDesign, manufacturing, automobiles, robotics.");
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
    botMessage("🔬 B.Sc:\nSubjects: Maths, Physics, CS, Data Science.\nCareers: Analyst, Scientist, M.Sc.");
    backMenu();
}

function bcom() {
    botMessage("📊 B.Com:\nAccounting, Finance, Taxation.\nCareers: Accountant, Banking, MBA, CA.");
    backMenu();
}

function ba() {
    botMessage("📚 B.A:\nHistory, Economics, Psychology.\nCareers: UPSC, Teaching, Journalism.");
    backMenu();
}

/* ---------- MEDICAL ---------- */
function medical() {
    userMessage("Medical");
    botMessage("🩺 Medical courses after Inter:");
    showButtons([
        { text: "MBBS", action: "mbbs()" },
        { text: "BDS", action: "bds()" },
        { text: "BAMS", action: "bams()" },
        { text: "BHMS", action: "bhms()" }
    ]);
}

function mbbs() {
    botMessage("👩‍⚕️ MBBS:\nDuration: 5.5 years\nExam: NEET\nCareer: Doctor, MD/MS.");
    backMenu();
}

function bds() {
    botMessage("🦷 BDS:\nDuration: 5 years\nExam: NEET\nCareer: Dentist.");
    backMenu();
}

function bams() {
    botMessage("🌿 BAMS:\nAyurvedic medicine\nExam: NEET.");
    backMenu();
}

function bhms() {
    botMessage("💊 BHMS:\nHomeopathy medicine\nExam: NEET.");
    backMenu();
}

/* ---------- DIPLOMA ---------- */
function diploma() {
    botMessage("📘 Diploma:\nPolytechnic & ITI – practical skills & early jobs.");
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
    botMessage("📝 EAMCET:\nState-level engineering & pharmacy exam.");
    backMenu();
}

function jee() {
    botMessage("📝 JEE:\nNational-level exam for IITs & NITs.");
    backMenu();
}

function gate() {
    botMessage("📝 GATE:\nFor M.Tech admissions & PSU jobs.");
    backMenu();
}

/* ---------- CAREERS ---------- */
function careers() {
    userMessage("Careers");
    botMessage("Choose a career:");
    showButtons([
        { text: "Software Engineer", action: "software()" },
        { text: "Data Analyst", action: "data()" },
        { text: "Government Jobs", action: "govt()" }
    ]);
}

/* ---------- SOFTWARE ENGINEER ---------- */
function software() {
    botMessage(
        "👨‍💻 Software Engineer:\n\n" +
        "Stages:\n" +
        "1️⃣ Learn Programming (C/Java/Python)\n" +
        "2️⃣ DSA & Problem Solving\n" +
        "3️⃣ Web/App Technologies\n" +
        "4️⃣ Projects & Internships\n" +
        "5️⃣ Technical + HR Interview\n\n" +
        "Job Roles:\n" +
        "• Software Developer\n• Web Developer\n• Full Stack Developer\n• Backend Engineer"
    );
    backMenu();
}

/* ---------- DATA ANALYST ---------- */
function data() {
    botMessage(
        "📊 Data Analyst:\n\n" +
        "Stages:\n" +
        "1️⃣ Excel & Statistics\n" +
        "2️⃣ SQL & Python\n" +
        "3️⃣ Power BI / Tableau\n" +
        "4️⃣ Projects\n" +
        "5️⃣ Interview\n\n" +
        "Job Roles:\n" +
        "• Data Analyst\n• Business Analyst\n• Reporting Analyst"
    );
    backMenu();
}

/* ---------- GOVERNMENT JOBS ---------- */
function govt() {
    botMessage("🏛️ Government Jobs:\nChoose category:");
    showButtons([
        { text: "UPSC", action: "upsc()" },
        { text: "SSC", action: "ssc()" },
        { text: "Banking", action: "banking()" },
        { text: "Railways", action: "railways()" }
    ]);
}

function upsc() {
    botMessage(
        "🇮🇳 UPSC:\n" +
        "Exams: IAS, IPS, IFS\n" +
        "Stages: Prelims → Mains → Interview\n" +
        "Jobs: Civil Services Officers"
    );
    backMenu();
}

function ssc() {
    botMessage(
        "🏢 SSC:\n" +
        "Exams: CGL, CHSL\n" +
        "Stages: Tier-1 → Tier-2 → Skill Test\n" +
        "Jobs: Clerk, Inspector, Assistant"
    );
    backMenu();
}

function banking() {
    botMessage(
        "🏦 Banking:\n" +
        "Exams: SBI PO, IBPS PO\n" +
        "Stages: Prelims → Mains → Interview\n" +
        "Jobs: PO, Clerk, Manager"
    );
    backMenu();
}

function railways() {
    botMessage(
        "🚆 Railways:\n" +
        "Exams: NTPC, Group-D\n" +
        "Stages: CBT → Skill Test → DV\n" +
        "Jobs: Station Master, Technician"
    );
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
    if (!msg) return;

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
input.addEventListener("keypress", e => {
    if (e.key === "Enter") handleText();
});

/* ---------- VOICE INPUT ---------- */
function startVoice() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Voice input supported only in Chrome.");
        return;
    }
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = e => {
        input.value = e.results[0][0].transcript;
        handleText();
    };
}

/* ---------- INIT ---------- */
startBot();
