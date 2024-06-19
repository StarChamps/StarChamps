function checkAnswers() {
    const answers = {
        q1: "Uruguay",
        q2: "1958",
        q3: "Francia",
        q4: "España",
        q5: "2-0"
    };

    let score = 0;
    const form = document.getElementById('quizForm');

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = form[key].value.trim();
        if (userAnswer.toLowerCase() === value.toLowerCase()) {
            score++;
        }
    }

    const resultText = `Tu puntaje es: ${score} / 5`;
    document.getElementById('result').innerText = resultText;

    sendEmail(score);
}

function sendEmail(score) {
    const email = "ramonalatristeangelgabriel@gmail.com"; 
    const subject = "Resultados del Quiz de la Copa del Mundo";
    const body = `El usuario obtuvo un puntaje de ${score} / 5 en el quiz.`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
