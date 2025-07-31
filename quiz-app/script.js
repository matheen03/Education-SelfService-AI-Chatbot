class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.currentDifficulty = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeLeft = 30;
        this.totalTime = 0;
        this.startTime = null;
        
        this.initializeEventListeners();
        this.initializeUI();
    }

    initializeEventListeners() {
        // Category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectCategory(btn.dataset.category));
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectDifficulty(btn.dataset.difficulty));
        });

        // Start quiz button
        document.getElementById('start-quiz-btn').addEventListener('click', () => this.startQuiz());

        // Answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectAnswer(btn.dataset.answer));
        });

        // Next question button
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());

        // Results screen buttons
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('review-btn').addEventListener('click', () => this.showReview());

        // Review screen buttons
        document.getElementById('close-review-btn').addEventListener('click', () => this.closeReview());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    initializeUI() {
        this.showScreen('welcome-screen');
    }

    selectCategory(category) {
        this.currentCategory = category;
        
        // Update UI
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.updateStartButton();
    }

    selectDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        
        // Update UI
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('active');
        
        this.updateStartButton();
    }

    updateStartButton() {
        const startBtn = document.getElementById('start-quiz-btn');
        if (this.currentCategory && this.currentDifficulty) {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
        }
    }

    startQuiz() {
        // Get questions
        this.questions = getQuestions(this.currentCategory, this.currentDifficulty, 10);
        
        if (this.questions.length === 0) {
            alert('No questions available for this category and difficulty!');
            return;
        }

        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.totalTime = 0;
        this.startTime = Date.now();

        // Update UI
        document.getElementById('total-questions').textContent = this.questions.length;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
        this.startTimer();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        
        // Display question
        document.getElementById('question-text').textContent = question.question;
        
        // Display answers
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach((btn, index) => {
            const answerKey = btn.dataset.answer;
            const answerText = question.answers[answerKey];
            btn.querySelector('.answer-text').textContent = answerText;
            
            // Reset button state
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.disabled = false;
        });
        
        // Disable next button
        document.getElementById('next-btn').disabled = true;
        
        // Reset timer
        this.timeLeft = 30;
        this.updateTimerDisplay();
    }

    selectAnswer(selectedAnswer) {
        const question = this.questions[this.currentQuestionIndex];
        const answerButtons = document.querySelectorAll('.answer-btn');
        
        // Disable all answer buttons
        answerButtons.forEach(btn => btn.disabled = true);
        
        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = selectedAnswer;
        
        // Highlight selected answer
        const selectedBtn = document.querySelector(`[data-answer="${selectedAnswer}"]`);
        selectedBtn.classList.add('selected');
        
        // Show correct answer after a short delay
        setTimeout(() => {
            this.revealAnswer(selectedAnswer);
        }, 500);
    }

    revealAnswer(selectedAnswer) {
        const question = this.questions[this.currentQuestionIndex];
        const correctAnswer = question.correct;
        
        // Update score
        if (selectedAnswer === correctAnswer) {
            this.score++;
        }
        
        // Highlight correct and incorrect answers
        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach(btn => {
            const answerKey = btn.dataset.answer;
            if (answerKey === correctAnswer) {
                btn.classList.add('correct');
            } else if (answerKey === selectedAnswer && selectedAnswer !== correctAnswer) {
                btn.classList.add('incorrect');
            }
        });
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
        
        // Stop timer
        this.stopTimer();
        
        // Auto advance after 3 seconds
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                this.showResults();
            }
        }, 3000);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
            this.startTimer();
        } else {
            this.showResults();
        }
    }

    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        document.getElementById('time-left').textContent = this.timeLeft;
        
        // Change color based on time remaining
        const timerElement = document.querySelector('.timer');
        if (this.timeLeft <= 10) {
            timerElement.style.color = '#e74c3c';
        } else if (this.timeLeft <= 20) {
            timerElement.style.color = '#f39c12';
        } else {
            timerElement.style.color = '#27ae60';
        }
    }

    timeUp() {
        this.stopTimer();
        
        // Auto-select a random answer if none selected
        if (!this.userAnswers[this.currentQuestionIndex]) {
            const answers = ['a', 'b', 'c', 'd'];
            const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            this.selectAnswer(randomAnswer);
        }
    }

    showResults() {
        this.stopTimer();
        this.totalTime = Math.floor((Date.now() - this.startTime) / 1000);
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const correctCount = this.score;
        const incorrectCount = this.questions.length - this.score;
        
        // Update results display
        document.getElementById('final-score').textContent = percentage;
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('incorrect-count').textContent = incorrectCount;
        document.getElementById('total-time').textContent = `${this.totalTime}s`;
        
        // Update results message based on score
        const resultsTitle = document.getElementById('results-title');
        const resultsMessage = document.getElementById('results-message');
        
        if (percentage >= 90) {
            resultsTitle.textContent = "Excellent!";
            resultsMessage.textContent = "Outstanding performance! You're a quiz master!";
        } else if (percentage >= 70) {
            resultsTitle.textContent = "Great Job!";
            resultsMessage.textContent = "Well done! You have solid knowledge in this area.";
        } else if (percentage >= 50) {
            resultsTitle.textContent = "Good Effort!";
            resultsMessage.textContent = "Not bad! Keep learning and you'll improve.";
        } else {
            resultsTitle.textContent = "Keep Learning!";
            resultsMessage.textContent = "Don't give up! Practice makes perfect.";
        }
        
        this.showScreen('results-screen');
    }

    showReview() {
        const reviewContainer = document.getElementById('review-questions');
        reviewContainer.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correct;
            const isCorrect = userAnswer === correctAnswer;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-question';
            
            reviewItem.innerHTML = `
                <h4>Question ${index + 1}: ${question.question}</h4>
                <div class="review-answers">
                    ${Object.entries(question.answers).map(([key, text]) => {
                        let className = 'review-answer';
                        if (key === correctAnswer) {
                            className += ' correct';
                        }
                        if (key === userAnswer && !isCorrect) {
                            className += ' user-selected incorrect';
                        } else if (key === userAnswer) {
                            className += ' user-selected';
                        }
                        
                        return `<div class="${className}">
                            ${key.toUpperCase()}: ${text}
                            ${key === correctAnswer ? ' ✓' : ''}
                            ${key === userAnswer && !isCorrect ? ' (Your answer)' : ''}
                        </div>`;
                    }).join('')}
                </div>
            `;
            
            reviewContainer.appendChild(reviewItem);
        });
        
        this.showScreen('review-screen');
    }

    closeReview() {
        this.showScreen('results-screen');
    }

    restartQuiz() {
        // Reset selections
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
        
        this.currentCategory = null;
        this.currentDifficulty = null;
        this.updateStartButton();
        
        this.showScreen('welcome-screen');
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        document.getElementById(screenId).classList.add('active');
    }

    handleKeyboard(e) {
        // Only handle keyboard shortcuts during quiz
        if (!document.getElementById('quiz-screen').classList.contains('active')) {
            return;
        }
        
        // Check if answer buttons are enabled
        const firstAnswerBtn = document.querySelector('.answer-btn');
        if (firstAnswerBtn.disabled) {
            return;
        }
        
        // Handle A, B, C, D keys
        const keyMap = {
            'KeyA': 'a',
            'KeyB': 'b',
            'KeyC': 'c',
            'KeyD': 'd',
            'Digit1': 'a',
            'Digit2': 'b',
            'Digit3': 'c',
            'Digit4': 'd'
        };
        
        if (keyMap[e.code]) {
            e.preventDefault();
            this.selectAnswer(keyMap[e.code]);
        }
    }
}

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});