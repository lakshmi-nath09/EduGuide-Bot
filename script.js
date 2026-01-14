function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();
    let chat = document.getElementById("chat");

    chat.innerHTML += "<p><b>You:</b> " + message + "</p>";

    let reply = "";

    if (message.includes("hi") || message.includes("hello")) {
        reply = "Hello! I am EduGuide Bot 😊";
    }
    else if (message.includes("courses after inter")) {
        reply = "You can choose B.Tech, B.Sc, B.Com, Diploma, or Degree courses.";
    }
    else if (message.includes("btech branches")) {
        reply = "B.Tech branches include CSE, AI & DS, ECE, EEE, MECH, CIVIL.";
    }
    else if (message.includes("exams")) {
        reply = "Popular exams are EAMCET, JEE, GATE, CAT, UPSC.";
    }
    else if (message.includes("career")) {
        reply = "Career options include Software Engineer, Data Analyst, Government Jobs, Higher Studies.";
    }
    else if (message.includes("skills")) {
        reply = "Important skills: Programming, Communication, Problem Solving, AI basics.";
    }
    else if (message.includes("bye")) {
        reply = "Thank you for using EduGuide Bot 👋";
    }
    else {
        reply = "Sorry, I can guide only on education and career topics.";
    }

    chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p><br>";
    input.value = "";
}
