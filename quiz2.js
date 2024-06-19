function checkAnswers() {
    const answers = {
        q1: "2",
        q2: "2002",
        q3: "Franz Beckenbauer",
        q4: "1",
    };

    let score = 0;
    const form = document.getElementById('quizForm');

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = form[key].value.trim();
        if (userAnswer.toLowerCase() === value.toLowerCase()) {
            score++;
        }
    }

    const resultText = `Tu puntaje es: ${score} / 4`;
    document.getElementById('result').innerText = resultText;

    sendEmail(score);
}

function sendEmail(score) {
    const email = "ramonalatristeangelgabriel@gmail.com"; 
    const subject = "Resultados del Quiz de Entrenadores";
    const body = `El usuario obtuvo un puntaje de ${score} / 5 en el quiz.`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}