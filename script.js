document.addEventListener("DOMContentLoaded", function () {
    console.log("MoodVibes JavaScript Loaded Successfully!");
 
    // 1. Card Quote Click Handlers
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const quote = this.getAttribute("data-quote");
            alert("✨ " + title + " Vibes:\n\n" + quote);
        });
    });
 
    // 2. Form Submit Handler
    const moodForm = document.getElementById("mood-form");
    if (moodForm) {
        moodForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const userMood = document.getElementById("mood-name").value;
            const messages = [
                "“What a beautiful aesthetic! Your creativity knows no bounds.”",
                "“This vibe brings amazing energy. Make today absolutely count!”",
                "“Your custom theme is stunning! Keep styling your own wonderful path.”"
            ];
            const randomQuote = messages[Math.floor(Math.random() * messages.length)];
            alert("🎉 Suggested Mood: " + userMood + "\n\n" + randomQuote);
            moodForm.reset();
        });
    }
 
    // 3. Quiz Data & Handlers
    const quizData = [
        {
            question: "What is your ideal way to recharge after a long day?",
            options: ["Listening to soft music", "Going out with friends", "Cozying up with a warm tea", "Taking a walk outdoors"],
            correct: 0
        },
        {
            question: "Which aesthetic color spectrum matches your mood right now?",
            options: ["Soft Pastel Pink", "Vibrant Electric Rose", "Dreamy Blue Sky", "Fresh Botanical Mint"],
            correct: 2
        },
        {
            question: "How do you handle unexpected daily changes?",
            options: ["Stay calm & breathe", "Power through with high energy", "Reflect and adjust slowly", "Adapt easily like a breeze"],
            correct: 0
        }
    ];
 
    let currentQuestion = 0;
    let score = 0;
 
    function loadQuestion() {
        const q = quizData[currentQuestion];
        
        const qCounter = document.getElementById("question-counter");
        const qText = document.getElementById("question-text");
        const progressBar = document.getElementById("progress-bar");
        const optionsContainer = document.getElementById("answer-options");
        const feedback = document.getElementById("feedback-message");
 
        if (qCounter) qCounter.innerText = `Question ${currentQuestion + 1} of ${quizData.length}`;
        if (qText) qText.innerText = q.question;
        
        if (progressBar) {
            const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
 
        if (optionsContainer) {
            optionsContainer.innerHTML = "";
            q.options.forEach((optionText, index) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "quiz-option-btn";
                btn.innerText = optionText;
                btn.addEventListener("click", () => selectAnswer(index));
                optionsContainer.appendChild(btn);
            });
        }
 
        if (feedback) feedback.innerText = "";
    }
 
    function selectAnswer(selectedIndex) {
        const feedback = document.getElementById("feedback-message");
        const scoreCounter = document.getElementById("score-counter");
 
        if (selectedIndex === quizData[currentQuestion].correct) {
            score++;
            if (feedback) {
                feedback.innerText = "✨ Great choice! That brings great positive vibes.";
                feedback.style.color = "#2ed573";
            }
        } else {
            if (feedback) {
                feedback.innerText = "🌸 Beautiful vibe selected!";
                feedback.style.color = "#ff477e";
            }
        }
 
        if (scoreCounter) scoreCounter.innerText = `Score: ${score}`;
 
        const buttons = document.querySelectorAll(".quiz-option-btn");
        buttons.forEach(btn => btn.disabled = true);
 
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showFinalResults();
            }
        }, 1200);
    }
 
    function showFinalResults() {
        const quizContainer = document.getElementById("quiz-container");
        const resultsContainer = document.getElementById("results-container");
        const finalResultsText = document.getElementById("final-results-text");
 
        if (quizContainer) quizContainer.classList.add("hidden");
        if (resultsContainer) resultsContainer.classList.remove("hidden");
        if (finalResultsText) {
            finalResultsText.innerText = `You completed the Vibe Check! Final Score: ${score}/${quizData.length}`;
        }
    }
 
    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", function () {
            currentQuestion = 0;
            score = 0;
            const scoreCounter = document.getElementById("score-counter");
            const resultsContainer = document.getElementById("results-container");
            const quizContainer = document.getElementById("quiz-container");
 
            if (scoreCounter) scoreCounter.innerText = `Score: 0`;
            if (resultsContainer) resultsContainer.classList.add("hidden");
            if (quizContainer) quizContainer.classList.remove("hidden");
            loadQuestion();
        });
    }
 
    // Initialize Quiz
    loadQuestion();
});
tiene menú contextual

