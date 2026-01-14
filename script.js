const chat = document.getElementById("chat-body");

function botMessage(text) {
    chat.innerHTML += `<div class="bot">${text}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function userMessage(text) {
    chat.innerHTML += `<div class="user">${text}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function showButtons(buttons) {
    let btnHTML = '<div class="buttons">';
    buttons.forEach(btn => {
        btnHTML += `<button onclick="${btn.action}">${btn.text}</button>`;
    });
    btnHTML += '</div>';
    chat.innerHTML += btnHTML;
    chat.scrollTop = chat.scrollHeight;
}

/* ---------- Conversation Flow ---------- */

function startBot() {
    botMessage("Hi 👋 I am EduGuide Bot. How can I help you?");
    showButtons([
        { text: "Courses", action: "courses()" },
        { text: "Exams", action: "exams()" },
        { text: "Careers", action: "careers()" }
    ]);
}

function courses() {
    userMessage("Courses");
    botMessage("Select your education level:");
    showButtons([
        { text: "After Inter", action: "afterInter()" },
        { text: "After Degree", action: "afterDegree()" }
    ]);
}

function afterInter() {
    userMessage("After Inter");
    botMessage("You can choose from:");
    showButtons([
        { text: "B.Tech", action: "btech()" },
        { text: "Degree", action: "degree()" },
        { text: "Diploma", action: "diploma()" }
    ]);
}

function btech() {
    userMessage("B.Tech");
    botMessage("B.Tech branches: CSE, AI & DS, ECE, EEE, MECH, CIVIL.");
    backMenu();
}

function degree() {
    userMessage("Degree");
    botMessage("Degree courses: B.Sc, B.Com, B.A.");
    backMenu();
}

function diploma() {
    userMessage("Diploma");
    botMessage("Diploma options: Polytechnic, ITI, Technical Courses.");
    backMenu();
}

function afterDegree() {
    userMessage("After Degree");
    botMessage("Options: M.Tech, MBA, MCA, Government Exams.");
    backMenu();
}

function exams() {
    userMessage("Exams");
    botMessage("Popular exams:");
    showButtons([
        { text: "EAMCET", action: "examInfo('EAMCET')" },
        { text: "JEE", action: "examInfo('JEE')" },
        { text: "GATE", action: "examInfo('GATE')" }
    ]);
}

function examInfo(exam) {
    userMessage(exam);
    botMessage(exam + " is a popular entrance exam for higher education.");
    backMenu();
}

function careers() {
    userMessage("Careers");
    botMessage("Career options include:");
    showButtons([
        { text: "Software Engineer", action: "careerInfo('Software Engineer')" },
        { text: "Data Analyst", action: "careerInfo('Data Analyst')" },
        { text: "Government Jobs", action: "careerInfo('Government Jobs')" }
    ]);
}

function careerInfo(career) {
    userMessage(career);
    botMessage(career + " requires skill development and consistent practice.");
    backMenu();
}

function backMenu() {
    showButtons([
        { text: "Back to Menu", action: "startBot()" }
    ]);
}

/* Start chatbot */
startBot();
