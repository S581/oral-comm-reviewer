// Multiple Choice Quiz JavaScript
let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];
let quizStarted = false;
let startTime = 0;

// Sample math questions - you can expand this
const sampleQuestions = [
    {
        question: "What is the sentence pattern of 'Dogs bark loudly.'?",
        options: ["S-V", "V-S", "S-V-DO", "S-V-SC"],
        correct: 0,
        explanation: "The sentence consists of a subject (Dogs) and a verb (bark). 'Loudly' is an adverb that modifies the verb and does not affect the sentence structure. Therefore, the core pattern remains Subject + Verb (S-V). This pattern is one of the simplest and most fundamental in English grammar."
    },
    {
        question: "What is the sentence pattern of 'Here comes the airplane.'?",
        options: ["S-V", "V-S", "S-V-DO", "S-V-SC"],
        correct: 1,
        explanation: "The sentence begins with the verb (comes) followed by the subject (the airplane). This inversion is commonly used in English to emphasize the action or to sound more dramatic. The pattern is Verb + Subject (V-S), which is a variation of the basic S-V pattern."
    },
    {
        question: "What is the sentence pattern of 'A jockey rides racehorses.'?",
        options: ["S-V", "V-S", "S-V-DO", "S-V-SC"],
        correct: 2,
        explanation: "This sentence has a subject (A jockey), a verb (rides), and a direct object (racehorses). The direct object answers the question 'rides what?' and shows who or what is receiving the action of the verb. Therefore, the structure is Subject + Verb + Direct Object (S-V-DO)."
    },
    {
        question: "What is the sentence pattern of 'Mother looks tired.'?",
        options: ["S-V", "V-S", "S-V-DO", "S-V-SC"],
        correct: 3,
        explanation: "The subject (Mother) is followed by the verb (looks) and a complement (tired). The word 'tired' describes or completes the meaning of the subject. Verbs like 'looks,' 'is,' 'seems,' and 'appears' often require subject complements. This creates a Subject + Verb + Subject Complement (S-V-SC) pattern."
    },
    {
        question: "What is the sentence pattern of 'He gave me the book.'?",
        options: ["S-V-DO-OC", "S-V-SC", "S-V-IO-DO", "S-V"],
        correct: 2,
        explanation: "The subject (He) performs the action of the verb (gave). The indirect object (me) receives the direct object (the book). This structure demonstrates Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO), which shows the transfer of something from the subject to another person."
    },
    {
        question: "What is the sentence pattern of 'The teacher called Robbie the class clown.'?",
        options: ["S-V-IO-DO", "S-V-DO-OC", "S-V-SC", "S-V"],
        correct: 1,
        explanation: "The subject (The teacher) performs the action of the verb (called) on the direct object (Robbie). The phrase 'the class clown' functions as an object complement because it renames or describes the direct object. This makes the pattern Subject + Verb + Direct Object + Object Complement (S-V-DO-OC)."
    },
    {
        question: "Which communicative strategy is used to address problems in speaking, listening, and comprehending?",
        options: ["Nomination", "Restriction", "Turn-taking", "Repair"],
        correct: 3,
        explanation: "Repair is a strategy used in communication when there are misunderstandings or errors in speaking, listening, or comprehension. It serves as a self-correcting mechanism to maintain clarity and understanding in a conversation, ensuring that communication remains effective."
    },
    {
        question: "What is the purpose of a 'persuasive speech'?",
        options: [
            "To provide the audience with amusement.",
            "To influence the audience's beliefs and decisions.",
            "To provide a clear understanding of a concept.",
            "To convey information."
        ],
        correct: 1,
        explanation: "A persuasive speech aims to influence the audience's beliefs, attitudes, or decisions. Unlike an informative speech, which focuses on explaining or teaching, a persuasive speech presents arguments and appeals (emotional, logical, or ethical) to convince listeners to adopt a viewpoint or take action."
    },
    {
        question: "According to the provided text, what is a key guideline for speech writing regarding word choice?",
        options: [
            "Use jargon and technical words to sound more professional.",
            "Use long and complex sentences to demonstrate a large vocabulary.",
            "Use short and simple words and avoid jargon.",
            "Use only active verbs."
        ],
        correct: 2,
        explanation: "Effective speech writing emphasizes clarity and simplicity. Short and simple words help the audience understand quickly. Avoiding jargon and technical terms is essential because these can confuse listeners, especially if they are not experts in the field. Clear language ensures better engagement."
    },
    {
        question: "What is 'intrapersonal' communication?",
        options: [
            "Communication between two or more people.",
            "Communication delivered before a crowd.",
            "Communication centered on oneself.",
            "Communication using various kinds of media."
        ],
        correct: 2,
        explanation: "Intrapersonal communication occurs within an individual. It includes self-talk, reflection, decision-making, and internal dialogues. The speaker is also the listener, making this type of communication unique because it involves only one person’s thought process."
    },
    {
        question: "Which of the following is an example of an 'expressive' speech act?",
        options: [
            "'I'll help you with your project tomorrow.'",
            "'The Earth orbits the Sun.'",
            "'I'm really sorry for being late.'",
            "'I now pronounce you husband and wife.'"
        ],
        correct: 2,
        explanation: "Expressive speech acts convey the speaker’s emotions or attitudes. Saying 'I'm really sorry for being late' demonstrates feelings of regret. This differs from declarative speech acts, which change reality, or representative speech acts, which state facts."
    },
    {
        question: "What is the primary function of the 'introduction' in a speech?",
        options: [
            "To provide explanations and examples.",
            "To restate the main idea and provide a summary.",
            "To get the audience's attention and present the main idea.",
            "To correct errors in grammar and punctuation."
        ],
        correct: 2,
        explanation: "The introduction sets the tone of a speech. Its main functions are to capture the audience's attention, introduce the subject, and present the central idea. A strong introduction encourages the audience to stay engaged and prepares them for the message that follows."
    },
    {
        question: "What is the primary purpose of communication?",
        options: [
            "To entertain and amuse an audience.",
            "To share and convey messages or information.",
            "To control the behavior of others.",
            "To express one's own emotions."
        ],
        correct: 1,
        explanation: "The core purpose of communication is to share and convey information, ideas, or emotions from one individual to another. This process can occur through different channels, such as verbal, nonverbal, written, or digital methods, and helps establish understanding among people."
    },
    {
        question: "What is the key element missing from the Shannon-Weaver's Model of Communication?",
        options: ["Source", "Channel", "Feedback", "Receiver"],
        correct: 2,
        explanation: "The Shannon-Weaver model was one of the earliest communication models, but it lacked the element of feedback. Without feedback, communication becomes one-directional, and the sender cannot confirm if the message was received or understood correctly."
    },
    {
        question: "What are the three ways a message can be conveyed?",
        options: [
            "Words, actions, and silence",
            "Verbal, nonverbal, or both at the same time",
            "Through a channel, a receiver, and a speaker",
            "Encoding, decoding, and transmitting"
        ],
        correct: 1,
        explanation: "Messages can be conveyed verbally (spoken or written words), nonverbally (gestures, expressions, tone), or through both simultaneously. For example, saying 'I’m fine' verbally while looking upset nonverbally gives mixed signals, showing how both forms interact."
    },
    {
        question: "Which communicative strategy is used to open up a topic?",
        options: ["Restriction", "Repair", "Nomination", "Termination"],
        correct: 2,
        explanation: "Nomination is the strategy of introducing or initiating a topic in a conversation. This allows participants to begin discussing a subject and sets the framework for the exchange of ideas."
    },
    {
        question: "What is the communicative strategy that signals the end of a conversation?",
        options: ["Topic shifting", "Termination", "Topic control", "Repair"],
        correct: 1,
        explanation: "Termination signals that a conversation is coming to a close. It is achieved using closing statements or expressions such as 'That’s all for now' or 'See you later.' It allows for a polite and natural ending to dialogue."
    },
    {
        question: "Which type of speech context is centered on oneself?",
        options: [
            "Interpersonal communication",
            "Public communication",
            "Intrapersonal communication",
            "Mass communication"
        ],
        correct: 2,
        explanation: "Intrapersonal communication is unique because it takes place within a single individual. Unlike interpersonal (between people) or public communication (addressing an audience), intrapersonal communication involves thoughts, reflections, and self-analysis."
    },
    {
        question: "What is the main idea behind a 'locutionary' speech act?",
        options: [
            "The intended effect on the listener.",
            "The literal or exact meaning of the utterance.",
            "What the speaker intends to achieve.",
            "Bringing about a change in reality."
        ],
        correct: 1,
        explanation: "A locutionary act is concerned with the literal meaning of the words spoken. For example, saying 'It is raining' simply conveys the fact of rain. This is different from an illocutionary act (the speaker’s intent) or a perlocutionary act (the listener’s reaction)."
    },
    {
        question: "What is the communicative strategy that involves transitioning from one topic to another?",
        options: ["Nomination", "Topic shifting", "Topic control", "Restriction"],
        correct: 1,
        explanation: "Topic shifting allows participants to smoothly move from one subject to another during a conversation. This strategy ensures the dialogue remains natural and covers different aspects without abrupt interruptions."
    },
    {
        question: "What is the purpose of the 'editing/revising' stage in the speech writing process?",
        options: [
            "To gather ideas and information.",
            "To correct errors in mechanics such as grammar and punctuation.",
            "To get the audience's attention.",
            "To rehearse the speech out loud."
        ],
        correct: 1,
        explanation: "Editing and revising are crucial stages in speech preparation. They involve correcting grammar, spelling, punctuation, and improving coherence and unity. This step ensures that the final draft is polished, professional, and effective for delivery."
    },
    {
        question: "Which of the following is NOT one of the seven features of an effective communication?",
        options: ["Completeness", "Conciseness", "Complexity", "Courtesy"],
        correct: 2,
        explanation: "The seven recognized features of effective communication are completeness, conciseness, consideration, concreteness, courtesy, clearness, and correctness. Complexity is not part of this framework, since effective communication should strive for simplicity."
    },
    {
        question: "What is the difference between an informative speech and a persuasive speech?",
        options: [
            "An informative speech teaches, while a persuasive speech convinces.",
            "An informative speech convinces, while a persuasive speech teaches.",
            "An informative speech entertains, while a persuasive speech informs.",
            "An informative speech is personal, while a persuasive speech is formal."
        ],
        correct: 0,
        explanation: "An informative speech is designed to provide the audience with clear understanding and knowledge about a specific subject. A persuasive speech, on the other hand, aims to influence or convince the audience to adopt a certain belief or take action. While both types share structure and delivery techniques, their ultimate purposes differ."
    },
    {
        question: "Which of the following is an example of an 'intimate' speech style?",
        options: [
            "A public speech given by a politician.",
            "A conversation between two close friends.",
            "A formal lecture in a university.",
            "A news report on television."
        ],
        correct: 1,
        explanation: "The intimate speech style only takes place between people who are close to each other and is used in private conversations."
    },
    {
        question: "In the speech writing process, what is the purpose of 'audience analysis'?",
        options: [
            "To choose a topic that is easy to write about.",
            "To make the speech longer and more detailed.",
            "To adapt the speech content and delivery to the target audience.",
            "To correct errors in grammar and punctuation."
        ],
        correct: 2,
        explanation: "Audience analysis entails looking into the profile of your target audience and is done so you can adapt or adjust your speech content and way of delivery depending on the audience's profile."
    },
    {
        question: "Which writing pattern presents ideas in a timely order?",
        options: [
            "Categorical/Topical",
            "Causal",
            "Chronological",
            "Problem/Solution"
        ],
        correct: 2,
        explanation: "The chronological writing pattern presents ideas in a timely order."
    },
    {
        question: "Which of the following describes a 'consultative' speech style?",
        options: [
            "Used only between two close people.",
            "Characterized by the use of jargons and colloquialisms.",
            "Primarily used to obtain professional guidance and information.",
            "Unchanging and most formal."
        ],
        correct: 2,
        explanation: "The consultative speech style is primarily used to obtain professional guidance and information. It is a two-way style for semi-formal conversations."
    },
    {
        question: "What is the key difference between verbal and non-verbal communication?",
        options: [
            "Verbal communication uses words, while non-verbal communication uses behavior.",
            "Verbal communication is a one-way process, while non-verbal communication is two-way.",
            "Verbal communication is only for formal settings, while non-verbal communication is informal.",
            "Verbal communication is for conveying ideas, while non-verbal communication is for expressing emotions only."
        ],
        correct: 0,
        explanation: "Verbal communication is an interaction in which words are used to relay a message. Non-verbal communication is an interaction where behavior is used to convey and represent meanings."
    },
    {
        question: "What is the process of converting a message into words or actions that the speaker understands?",
        options: [
            "Decoding",
            "Feedback",
            "Encoding",
            "Channel"
        ],
        correct: 2,
        explanation: "Encoding is the process of converting the message into words, actions, or other forms that the speaker understands."
    },
    {
        question: "What does a 'declaration' speech act do?",
        options: [
            "It expresses the speaker's feelings or emotions.",
            "It tries to get the listener to do something.",
            "It commits the speaker to a future action.",
            "It brings about a change in the external world simply by saying it."
        ],
        correct: 3,
        explanation: "A declaration speech act brings about a change in the external world or social reality simply by saying it."
    },
    {
        question: "What is the purpose of the 'body' of a speech?",
        options: [
            "To get the audience's attention.",
            "To restate the main idea.",
            "To provide explanations, examples, or details to support the main idea.",
            "To correct grammar and punctuation."
        ],
        correct: 2,
        explanation: "The body of a speech provides explanations, examples, or any details that can help you deliver your purpose and explain the main idea of your speech."
    },
    {
        question: "According to the Development Model of Intercultural Sensitivity (DMIS), which stage is characterized by a person being ignorant of cultural variations?",
        options: [
            "Defense",
            "Minimization",
            "Denial",
            "Acceptance"
        ],
        correct: 2,
        explanation: "In the denial stage, the person is ignorant of cultural variations."
    },
    {
        question: "What is the communicative strategy that limits what a speaker can say?",
        options: [
            "Turn-taking",
            "Restriction",
            "Topic control",
            "Nomination"
        ],
        correct: 1,
        explanation: "Restriction is a limitation you may have as a speaker; the instructions confine you and limit what you can say."
    },
    {
        question: "Which of the following is an example of an 'intimate' speech style?",
        options: [
            "A public speech given by a politician.",
            "A conversation between two close friends.",
            "A formal lecture in a university.",
            "A news report on television."
        ],
        correct: 1,
        explanation: "The intimate speech style only takes place between people who are close to each other and is used in private conversations."
    },
    {
        question: "In the speech writing process, what is the purpose of 'audience analysis'?",
        options: [
            "To choose a topic that is easy to write about.",
            "To make the speech longer and more detailed.",
            "To adapt the speech content and delivery to the target audience.",
            "To correct errors in grammar and punctuation."
        ],
        correct: 2,
        explanation: "Audience analysis entails looking into the profile of your target audience and is done so you can adapt or adjust your speech content and way of delivery depending on the audience's profile."
    },
    {
        question: "Which writing pattern presents ideas in a timely order?",
        options: [
            "Categorical/Topical",
            "Causal",
            "Chronological",
            "Problem/Solution"
        ],
        correct: 2,
        explanation: "The chronological writing pattern presents ideas in a timely order."
    },
    {
        question: "Which of the following describes a 'consultative' speech style?",
        options: [
            "Used only between two close people.",
            "Characterized by the use of jargons and colloquialisms.",
            "Primarily used to obtain professional guidance and information.",
            "Unchanging and most formal."
        ],
        correct: 2,
        explanation: "The consultative speech style is a two-way style for semi-formal conversations and is primarily used to obtain professional guidance and information."
    },
    {
        question: "What is the key difference between verbal and non-verbal communication?",
        options: [
            "Verbal communication uses words, while non-verbal communication uses behavior.",
            "Verbal communication is a one-way process, while non-verbal communication is two-way.",
            "Verbal communication is only for formal settings, while non-verbal communication is informal.",
            "Verbal communication is for conveying ideas, while non-verbal communication is for expressing emotions only."
        ],
        correct: 0,
        explanation: "Verbal communication is an interaction in which words are used to relay a message. Non-verbal communication is an interaction where behavior is used to convey and represent meanings."
    },
    {
        question: "What is the process of converting a message into words or actions that the speaker understands?",
        options: [
            "Decoding",
            "Feedback",
            "Encoding",
            "Channel"
        ],
        correct: 2,
        explanation: "Encoding is the process of converting the message into words, actions, or other forms that the speaker understands."
    },
    {
        question: "What does a 'declaration' speech act do?",
        options: [
            "It expresses the speaker's feelings or emotions.",
            "It tries to get the listener to do something.",
            "It commits the speaker to a future action.",
            "It brings about a change in the external world simply by saying it."
        ],
        correct: 3,
        explanation: "A declaration speech act brings about a change in the external world or social reality simply by saying it."
    },
    {
        question: "What is the purpose of the 'body' of a speech?",
        options: [
            "To get the audience's attention.",
            "To restate the main idea.",
            "To provide explanations, examples, or details to support the main idea.",
            "To correct grammar and punctuation."
        ],
        correct: 2,
        explanation: "The body of a speech provides explanations, examples, or any details that can help you deliver your purpose and explain the main idea of your speech."
    },
    {
        question: "According to the Development Model of Intercultural Sensitivity (DMIS), which stage is characterized by a person being ignorant of cultural variations?",
        options: [
            "Defense",
            "Minimization",
            "Denial",
            "Acceptance"
        ],
        correct: 2,
        explanation: "In the denial stage, the person is ignorant of cultural variations."
    },
    {
        question: "What is the communicative strategy that limits what a speaker can say?",
        options: [
            "Turn-taking",
            "Restriction",
            "Topic control",
            "Nomination"
        ],
        correct: 1,
        explanation: "Restriction is a limitation you may have as a speaker; the instructions confine you and limit what you can say."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    loadQuizStats();
    
    // Add event listeners for buttons
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('finishQuizBtn').addEventListener('click', finishQuiz);
    document.getElementById('resetQuizBtn').addEventListener('click', resetQuiz);
});

function initializeQuiz() {
    questions = [...sampleQuestions];
    shuffleArray(questions);
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStarted = false;
    
    updateQuizProgress();
    updateQuizStats();
}

function startQuiz() {
    quizStarted = true;
    startTime = Date.now();
    currentQuestionIndex = 0;
    userAnswers = [];
    
    document.getElementById('startQuizBtn').disabled = true;
    document.getElementById('nextQuestionBtn').disabled = false;
    document.getElementById('resetQuizBtn').disabled = false;
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    
    // Clear previous options and feedback
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Clear feedback container completely
    const feedbackContainer = document.getElementById('feedbackContainer');
    feedbackContainer.innerHTML = `
        <div class="feedback-message" id="feedbackMessage"></div>
        <div class="explanation" id="explanation"></div>
    `;
    feedbackContainer.style.display = 'none';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionBtn);
    });
    
    updateQuizProgress();
}

function selectOption(selectedIndex) {
    // Prevent multiple calls to this function
    if (userAnswers[currentQuestionIndex]) {
        return;
    }
    
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Store user's answer
    userAnswers[currentQuestionIndex] = {
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect
    };
    
    // Disable all option buttons
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct-answer');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect-answer');
        }
    });
    
    // Show feedback
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const explanation = document.getElementById('explanation');
    
    if (isCorrect) {
        feedbackMessage.textContent = '✅ Correct!';
        feedbackMessage.className = 'feedback-message correct';
    } else {
        feedbackMessage.textContent = '❌ Incorrect!';
        feedbackMessage.className = 'feedback-message incorrect';
    }
    
    explanation.textContent = question.explanation;
    feedbackContainer.style.display = 'block';
    
    // Update stats
    updateQuizStats();
    
    // Auto-advance to next question after delay (except for last question)
    if (currentQuestionIndex < questions.length - 1) {
        const autoAdvanceEnabled = document.getElementById('autoAdvanceToggle').checked;
        
        if (autoAdvanceEnabled) {
            // Remove any existing countdown elements first
            const existingCountdown = feedbackContainer.querySelector('.auto-advance-countdown');
            if (existingCountdown) {
                existingCountdown.remove();
            }
            
            // Show countdown for auto-advance
            const countdownElement = document.createElement('div');
            countdownElement.className = 'auto-advance-countdown';
            countdownElement.textContent = 'Auto-advancing in 3... (Click to skip)';
            feedbackContainer.appendChild(countdownElement);
            
            let countdown = 3;
            let countdownInterval;
            let autoAdvanceTimeout;
            
            // Function to start countdown
            const startCountdown = () => {
                countdownInterval = setInterval(() => {
                    countdown--;
                    if (countdown > 0) {
                        countdownElement.textContent = `Auto-advancing in ${countdown}... (Click to skip)`;
                    } else {
                        countdownElement.textContent = 'Auto-advancing...';
                    }
                }, 1000);
                
                // Auto-advance after 3 seconds
                autoAdvanceTimeout = setTimeout(() => {
                    clearInterval(countdownInterval);
                    nextQuestion();
                }, 3000);
            };
            
            // Start the countdown
            startCountdown();
            
            // Allow clicking to skip countdown
            countdownElement.addEventListener('click', () => {
                clearInterval(countdownInterval);
                clearTimeout(autoAdvanceTimeout);
                countdownElement.textContent = 'Click "Next Question" to continue';
                countdownElement.style.cursor = 'default';
                countdownElement.style.pointerEvents = 'none';
                document.getElementById('nextQuestionBtn').disabled = false;
            });
            
            // Make countdown clickable
            countdownElement.style.cursor = 'pointer';
            countdownElement.title = 'Click to skip auto-advance';
        } else {
            // Manual advance - show next button
            document.getElementById('nextQuestionBtn').disabled = false;
        }
    } else {
        // Last question - show finish button
        document.getElementById('nextQuestionBtn').style.display = 'none';
        document.getElementById('finishQuizBtn').disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
    
    document.getElementById('nextQuestionBtn').disabled = true;
    document.getElementById('finishQuizBtn').disabled = true;
}

function finishQuiz() {
    const endTime = Date.now();
    const studyTime = endTime - startTime;
    
    // Save quiz stats
    const quizStats = {
        correctCount: userAnswers.filter(answer => answer.isCorrect).length,
        incorrectCount: userAnswers.filter(answer => !answer.isCorrect).length,
        totalQuestions: questions.length,
        accuracy: Math.round((userAnswers.filter(answer => answer.isCorrect).length / questions.length) * 100),
        studyTime: studyTime,
        timestamp: Date.now()
    };
    
    localStorage.setItem('quizStats', JSON.stringify(quizStats));
    
    // Show results
    showResults();
}

function showResults() {
    const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = questions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('finalCorrect').textContent = correctCount;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quiz-controls').style.display = 'none';
    document.getElementById('quiz-stats').style.display = 'none';
}

function restartQuiz() {
    // Reset everything
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quiz-controls').style.display = 'flex';
    document.getElementById('quiz-stats').style.display = 'grid';
    
    document.getElementById('startQuizBtn').disabled = false;
    document.getElementById('nextQuestionBtn').disabled = true;
    document.getElementById('finishQuizBtn').disabled = true;
    document.getElementById('resetQuizBtn').disabled = true;
    
    initializeQuiz();
}

function resetQuiz() {
    if (confirm('Are you sure you want to reset the quiz? All progress will be lost.')) {
        restartQuiz();
    }
}

function updateQuizProgress() {
    const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
    document.getElementById('quizProgressFill').style.width = progress + '%';
    document.getElementById('quizProgressText').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function updateQuizStats() {
    const correctCount = userAnswers.filter(answer => answer.isCorrect).length;
    const incorrectCount = userAnswers.filter(answer => !answer.isCorrect).length;
    const totalAnswered = userAnswers.length;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    const score = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    
    document.getElementById('quizCorrectCount').textContent = correctCount;
    document.getElementById('quizIncorrectCount').textContent = incorrectCount;
    document.getElementById('quizAccuracyRate').textContent = accuracy + '%';
    document.getElementById('quizTotalScore').textContent = score;
}

function loadQuizStats() {
    const quizStats = JSON.parse(localStorage.getItem('quizStats')) || {};
    updateQuizStats();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
