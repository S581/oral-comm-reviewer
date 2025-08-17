class FlashcardApp {
    constructor() {
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.reviewStarted = false;
        this.currentStreak = 0;
        this.bestStreak = 0;
        this.totalScore = 0;
        this.answeredCards = new Set(); // Track which cards have been answered
        
        // Sample flashcards - you can customize these!
        this.flashcards = [
            {
                "question": "What is communication, according to McCornack (2014)?",
                "answer": "A process of sharing and conveying messages or information from one person to another within and across channels, contexts, media, and cultures."
            },
            {
                "question": "What are the two or more people involved in a communication process called?",
                "answer": "The speaker and the receiver."
            },
            {
                "question": "What are the three ways a message can be conveyed?",
                "answer": "Through words (verbal), actions (nonverbal), or both at the same time."
            },
            {
                "question": "What are the nine elements of communication?",
                "answer": "Speaker, message, encoding, channel, decoding, receiver, feedback, context, and barriers."
            },
            {
                "question": "What is encoding in communication?",
                "answer": "The process of converting the message into words, actions, or other forms that the speaker understands."
            },
            {
                "question": "What is the source of information or a message?",
                "answer": "The speaker."
            },
            {
                "question": "What is the medium or the means in which the encoded message is conveyed?",
                "answer": "The channel."
            },
            {
                "question": "What is the process of interpreting the encoded message of the speaker by the receiver?",
                "answer": "Decoding."
            },
            {
                "question": "What is the environment where communication takes place?",
                "answer": "Context."
            },
            {
                "question": "What are the factors that affect the flow of communication?",
                "answer": "Barriers."
            },
            {
                "question": "Which communication model is known as the 'mother of all communication models'?",
                "answer": "The Shannon-Weaver's Model of Communication."
            },
            {
                "question": "What is the main criticism of the Shannon-Weaver's Model?",
                "answer": "It is criticized for missing the essential element of feedback."
            },
            {
                "question": "What are the five elements of the Shannon-Weaver's Model?",
                "answer": "Source, transmitter, channel, receiver, and destination."
            },
            {
                "question": "Which communication model is a 'two-way process' that includes feedback?",
                "answer": "The Transactional Model."
            },
            {
                "question": "What is the communication function that allows individuals to interact with others?",
                "answer": "Social interaction."
            },
            {
                "question": "What are the seven features of an effective communication?",
                "answer": "Completeness, conciseness, consideration, concreteness, courtesy, clearness, and correctness."
            },
            {
                "question": "What is a barrier to communication that involves using special words particular to a profession or group that are difficult to understand?",
                "answer": "Use of jargons."
            },
            {
                "question": "What is verbal communication?",
                "answer": "An interaction in which words are used to relay a message."
            },
            {
                "question": "What is non-verbal communication?",
                "answer": "An interaction where behavior is used to convey and represent meanings; it includes all kinds of human responses not expressed in words."
            },
            {
                "question": "According to Ting-Toomey (1999), when does intercultural communication happen?",
                "answer": "When individuals interact, negotiate, and create meanings while bringing in their varied cultural backgrounds."
            },
            {
                "question": "What is the name of the model that explains people's experience with cultural differences through six stages?",
                "answer": "The Development Model of Intercultural Sensitivity (DMIS)."
            },
            {
                "question": "In the DMIS model, what stage is characterized by being ignorant of cultural variations?",
                "answer": "Denial."
            },
            {
                "question": "What is the DMIS stage where a person starts to recognize and integrate significant cultural differences?",
                "answer": "Acceptance."
            },
            {
                "question": "What is the stage in the DMIS model where a person respects the variety of cultural perspectives as a basis for their own perception and actions?",
                "answer": "Integration."
            },
            {
                "question": "What are the four types of speech context?",
                "answer": "Intrapersonal, interpersonal, public, and mass communication."
            },
            {
                "question": "Which type of speech context is centered on oneself?",
                "answer": "Intrapersonal communication."
            },
            {
                "question": "Who developed the Speech Act Theory?",
                "answer": "John Langshaw Austin."
            },
            {
                "question": "What are the three types of speech acts identified by John Langshaw Austin?",
                "answer": "Locutionary, illocutionary, and perlocutionary."
            },
            {
                "question": "What is a locutionary speech act?",
                "answer": "Focuses on the literal or exact meaning of the utterance."
            },
            {
                "question": "What is an illocutionary speech act?",
                "answer": "What the speaker intends to achieve with the utterance."
            },
            {
                "question": "Which classification of illocutionary speech acts is used when the speaker commits to a future action?",
                "answer": "Commissive."
            },
            {
                "question": "What is the first step in the speech writing process?",
                "answer": "Audience analysis."
            },
            {
                "question": "What are the three general purposes of speech writing?",
                "answer": "To inform, to entertain, or to persuade."
            },
            {
                "question": "What is the writing pattern that presents ideas in a timely order?",
                "answer": "Chronological."
            },
            {
                "question": "What is the function of the introduction in a speech?",
                "answer": "To get the audience's attention, and to present the subject and main idea."
            },
            {
                "question": "What is the stage in the speech writing process where you correct errors in grammar, punctuation, and capitalization?",
                "answer": "Editing/revising."
            },
            {
                "question": "What are the five types of speech styles according to Martin Joos?",
                "answer": "Intimate, casual, consultative, formal, and frozen."
            },
            {
                "question": "Which type of speech style takes place between close people and is used in private conversations?",
                "answer": "Intimate."
            },
            {
                "question": "What is the communicative strategy used to open up a topic?",
                "answer": "Nomination."
            },
            {
                "question": "What communicative strategy is the process by which people decide who takes the conversational floor?",
                "answer": "Turn-taking."
            },
            {
                "question": "What is the communicative strategy that involves transitioning from one topic to another?",
                "answer": "Topic shifting."
            },
            {
                "question": "What is the communicative strategy that addresses problems in speaking, listening, and comprehending?",
                "answer": "Repair."
            },
            {
                "question": "What is a verb in the context of sentence patterns?",
                "answer": "The action performed by the subject."
            },
            {
                "question": "What is the sentence pattern where the verb comes first before the subject?",
                "answer": "Verb + Subject (V-S)."
            },
            {
                "question": "What is the sentence pattern of 'The birds fly.'?",
                "answer": "Subject + Verb (S-V)."
            },
            {
                "question": "What is the sentence pattern of 'Here comes the airplane.'?",
                "answer": "Verb + Subject (V-S)."
            },
            {
                "question": "What is the sentence pattern of 'Andrew composes music.'?",
                "answer": "Subject + Verb + Direct Object (S-V-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Some students in the class are engineers.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'He gave me the book.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'The teacher called Robbie the class clown.'?",
                "answer": "Subject + Verb + Direct Object + Object Complement (S-V-DO-OC)."
            },
            {
                "question": "What is the sentence pattern of 'Dogs bark loudly.'?",
                "answer": "Subject + Verb (S-V)."
            },
            {
                "question": "What is the sentence pattern of 'There goes my last brain cell.'?",
                "answer": "Verb + Subject (V-S)."
            },
            {
                "question": "What is the sentence pattern of 'A jockey rides racehorses until he gets too old or too heavy.'?",
                "answer": "Subject + Verb + Direct Object (S-V-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Mother looks tired.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'The singer, whose voice is ethereal, remained calm and composed throughout his performance.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'Sir Gelo, our class adviser, assigned his diligent student a task for his asynchronous class, a magazine about their dream destination.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Granny gave Gary all of her money.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'During Mother's Day, Kyle bought his mom a bouquet of flowers.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'The artist, a 17-year-old student from Santa Rosa Science and Technology High School meticulously crafted an intricate wooden sculpture, considering it not just a mere work of art but as an absolute masterpiece.'?",
                "answer": "Subject + Verb + Direct Object + Object Complement (S-V-DO-OC)."
            },
            {
                "question": "In the sentence pattern S-V-DO, what does 'DO' stand for?",
                "answer": "Direct Object."
            },
            {
                "question": "In the sentence pattern S-V-SC, what does 'SC' stand for?",
                "answer": "Subject Complement."
            },
            {
                "question": "In the sentence pattern S-V-IO-DO, what does 'IO' stand for?",
                "answer": "Indirect Object."
            },
            {
                "question": "In the sentence pattern S-V-DO-OC, what does 'OC' stand for?",
                "answer": "Object Complement."
            },
            {
                "question": "Which sentence pattern is the simplest kind of sentence?",
                "answer": "Subject + Verb (S-V)."
            },
            {
                "question": "What is a direct object?",
                "answer": "The receiver of the action."
            },
            {
                "question": "What is an indirect object?",
                "answer": "A word that answers the questions 'to whom?' or 'for what?'."
            },
            {
                "question": "What is a subject complement?",
                "answer": "A word or group of words that describe or rename the subject."
            },
            {
                "question": "What are the two kinds of subject complements?",
                "answer": "Predicate nominative and predicate adjective."
            },
            {
                "question": "What is a predicate nominative?",
                "answer": "A noun or pronoun that renames or classifies the subject."
            },
            {
                "question": "What is a predicate adjective?",
                "answer": "An adjective that describes the subject."
            },
            {
                "question": "What is an object complement?",
                "answer": "A word or group of words that renames, describes, or classifies the direct object."
            },
            {
                "question": "What is a sentence pattern?",
                "answer": "The arrangement of words or order of elements in a sentence."
            },
            {
                "question": "What is the sentence pattern of 'Dogs bark loudly.'?",
                "answer": "Subject + Verb (S-V)."
            },
            {
                "question": "What is the sentence pattern of 'Here comes the airplane.'?",
                "answer": "Verb + Subject (V-S)."
            },
            {
                "question": "What is the sentence pattern of 'A jockey rides racehorses until he gets too old or too heavy.'?",
                "answer": "Subject + Verb + Direct Object (S-V-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Mother looks tired.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'The singer, whose voice is ethereal, remained calm and composed throughout his performance.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'Sir Gelo, our class adviser, assigned his diligent student a task for his asynchronous class, a magazine about their dream destination.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Granny gave Gary all of her money.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'During Mother's Day, Kyle bought his mom a bouquet of flowers.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'The artist, a 17-year-old student from Santa Rosa Science and Technology High School meticulously crafted an intricate wooden sculpture, considering it not just a mere work of art but as an absolute masterpiece.'?",
                "answer": "Subject + Verb + Direct Object + Object Complement (S-V-DO-OC)."
            },
            {
                "question": "In the sentence pattern S-V-DO, what does 'DO' stand for?",
                "answer": "Direct Object."
            },
            {
                "question": "In the sentence pattern S-V-SC, what does 'SC' stand for?",
                "answer": "Subject Complement."
            },
            {
                "question": "In the sentence pattern S-V-IO-DO, what does 'IO' stand for?",
                "answer": "Indirect Object."
            },
            {
                "question": "In the sentence pattern S-V-DO-OC, what does 'OC' stand for?",
                "answer": "Object Complement."
            },
            {
                "question": "What is an indirect object?",
                "answer": "A word that answers the questions 'to whom?' or 'for what?'."
            },
            {
                "question": "What are the two kinds of subject complements?",
                "answer": "Predicate nominative and predicate adjective."
            },
            {
                "question": "What is a predicate nominative?",
                "answer": "A noun or pronoun that renames or classifies the subject."
            },
            {
                "question": "What is a predicate adjective?",
                "answer": "An adjective that describes the subject."
            },
            {
                "question": "What is an object complement?",
                "answer": "A word or group of words that renames, describes, or classifies the direct object."
            },
            {
                "question": "What is a communicative strategy used to open up a topic?",
                "answer": "Nomination."
            },
            {
                "question": "What is the communicative strategy that involves transitioning from one topic to another?",
                "answer": "Topic shifting."
            },
            {
                "question": "What is the communicative strategy that addresses problems in speaking, listening, and comprehending?",
                "answer": "Repair."
            },
            {
                "question": "What is the communicative strategy that signals the end of a conversation?",
                "answer": "Termination."
            },
            {
                "question": "What is the communicative strategy that covers how formality or informality affects the development of a topic?",
                "answer": "Topic control."
            },
            {
                "question": "What is the communicative strategy that limits what a speaker can say?",
                "answer": "Restriction."
            },
            {
                "question": "What is the sentence pattern of 'Dogs bark loudly.'?",
                "answer": "Subject + Verb (S-V)."
            },
            {
                "question": "What is the sentence pattern of 'Here comes the airplane.'?",
                "answer": "Verb + Subject (V-S)."
            },
            {
                "question": "What is the sentence pattern of 'A jockey rides racehorses until he gets too old or too heavy.'?",
                "answer": "Subject + Verb + Direct Object (S-V-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Mother looks tired.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'The singer, whose voice is ethereal, remained calm and composed throughout his performance.'?",
                "answer": "Subject + Verb + Complement (S-V-SC)."
            },
            {
                "question": "What is the sentence pattern of 'Sir Gelo, our class adviser, assigned his diligent student a task for his asynchronous class, a magazine about their dream destination.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'Granny gave Gary all of her money.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'During Mother's Day, Kyle bought his mom a bouquet of flowers.'?",
                "answer": "Subject + Verb + Indirect Object + Direct Object (S-V-IO-DO)."
            },
            {
                "question": "What is the sentence pattern of 'The artist, a 17-year-old student from Santa Rosa Science and Technology High School meticulously crafted an intricate wooden sculpture, considering it not just a mere work of art but as an absolute masterpiece.'?",
                "answer": "Subject + Verb + Direct Object + Object Complement (S-V-DO-OC)."
            },
            {
                "question": "In the sentence pattern S-V-DO, what does 'DO' stand for?",
                "answer": "Direct Object."
            },
            {
                "question": "In the sentence pattern S-V-SC, what does 'SC' stand for?",
                "answer": "Subject Complement."
            },
            {
                "question": "In the sentence pattern S-V-IO-DO, what does 'IO' stand for?",
                "answer": "Indirect Object."
            },
            {
                "question": "In the sentence pattern S-V-DO-OC, what does 'OC' stand for?",
                "answer": "Object Complement."
            },
            {
                "question": "What is an indirect object?",
                "answer": "A word that answers the questions 'to whom?' or 'for what?'."
            },
            {
                "question": "What are the two kinds of subject complements?",
                "answer": "Predicate nominative and predicate adjective."
            },
            {
                "question": "What is a predicate nominative?",
                "answer": "A noun or pronoun that renames or classifies the subject."
            },
            {
                "question": "What is a predicate adjective?",
                "answer": "An adjective that describes the subject."
            },
            {
                "question": "What is an object complement?",
                "answer": "A word or group of words that renames, describes, or classifies the direct object."
            },
            {
                "question": "What is a communicative strategy used to open up a topic?",
                "answer": "Nomination."
            },
            {
                "question": "What is the communicative strategy that involves transitioning from one topic to another?",
                "answer": "Topic shifting."
            },
            {
                "question": "What is the communicative strategy that addresses problems in speaking, listening, and comprehending?",
                "answer": "Repair."
            },
            {
                "question": "What is the communicative strategy that signals the end of a conversation?",
                "answer": "Termination."
            },
            {
                "question": "What is the communicative strategy that covers how formality or informality affects the development of a topic?",
                "answer": "Topic control."
            },
            {
                "question": "What is the communicative strategy that limits what a speaker can say?",
                "answer": "Restriction."
            },
            {
                "question": "What is the purpose of an 'informative speech'?",
                "answer": "To provide the audience with a clear understanding of the concept or idea presented by the speaker."
            },
            {
                "question": "What is the purpose of an 'entertainment speech'?",
                "answer": "To provide the audience with amusement."
            },
            {
                "question": "What is the purpose of a 'persuasive speech'?",
                "answer": "To provide the audience with well-argued ideas that can influence their own beliefs and decisions."
            },
            {
                "question": "What is 'data gathering' in the speech writing process?",
                "answer": "The stage where you collect ideas, information, sources, and references relevant to your specific topic."
            },
            {
                "question": "What is a 'biographical' writing pattern?",
                "answer": "A pattern that presents a description of your life or a person, famous or not."
            },
            {
                "question": "What is a 'chronological' writing pattern?",
                "answer": "A pattern that presents ideas in a timely order."
            },
            {
                "question": "What are the three main elements of an outline?",
                "answer": "Introduction, body, and conclusion."
            },
            {
                "question": "What is the goal of the 'editing/revising' stage of speech writing?",
                "answer": "To correct errors in mechanics, such as grammar, punctuation, capitalization, unity, and coherence."
            },
            {
                "question": "What are the six 'Power Principles for Editing' listed by Andrew Dlugan?",
                "answer": "Edit for Focus, Clarity, Concision, Continuity, Variety, and Impact and Beauty."
            },
            {
                "question": "What is 'rehearsing' in the speech writing process?",
                "answer": "A stage that allows you to identify what works and what does not work for you and your target audience."
            },
            {
                "question": "According to the provided text, what is a key guideline for speech writing regarding word choice?",
                "answer": "Keep your words short and simple, and avoid jargon, acronyms, or technical words."
            },
            {
                "question": "What is 'intrapersonal' communication?",
                "answer": "Communication centered on oneself."
            },
            {
                "question": "What is 'interpersonal' communication?",
                "answer": "Communication between a small group of people."
            },
            {
                "question": "What are 'directive' speech acts?",
                "answer": "Speech acts where the speaker tries to get the listener to do something."
            },
            {
                "question": "What are 'commissive' speech acts?",
                "answer": "Speech acts where the speaker commits to a future action."
            },
            {
                "question": "What are 'expressive' speech acts?",
                "answer": "Speech acts where the speaker expresses their feelings, emotions, or attitudes about a situation or a listener."
            },
            {
                "question": "What are 'declaration' speech acts?",
                "answer": "Speech acts where the speaker brings about a change in the external world or social reality simply by saying it."
            }
        ];
        
        this.initializeElements();
        this.bindEvents();
        this.updateUI();
    }
    
    initializeElements() {
        this.flashcard = document.getElementById('flashcard');
        this.flashcardInner = document.getElementById('flashcardInner');
        this.questionText = document.getElementById('questionText');
        this.answerText = document.getElementById('answerText');
        this.scoringButtons = document.getElementById('scoringButtons');
        this.correctBtn = document.getElementById('correctBtn');
        this.incorrectBtn = document.getElementById('incorrectBtn');
        this.startBtn = document.getElementById('startBtn');
        this.flipBtn = document.getElementById('flipBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.prevCardBtn = document.getElementById('prevCardBtn');
        this.nextCardBtn = document.getElementById('nextCardBtn');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.cardCounter = document.getElementById('cardCounter');
        this.correctCount = document.getElementById('correctCount');
        this.incorrectCount = document.getElementById('incorrectCount');
        this.accuracyRate = document.getElementById('accuracyRate');
        this.totalScoreElement = document.getElementById('totalScore');
        this.currentStreakElement = document.getElementById('currentStreak');
        this.bestStreakElement = document.getElementById('bestStreak');
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startReview());
        this.flipBtn.addEventListener('click', () => this.flipCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        this.resetBtn.addEventListener('click', () => this.resetReview());
        this.prevCardBtn.addEventListener('click', () => this.previousCard());
        this.nextCardBtn.addEventListener('click', () => this.nextCard());
        this.correctBtn.addEventListener('click', () => this.markAsCorrect());
        this.incorrectBtn.addEventListener('click', () => this.markAsIncorrect());
        
        // Allow clicking on the flashcard to flip it
        this.flashcard.addEventListener('click', () => {
            if (this.reviewStarted && !this.isFlipped) {
                this.flipCard();
            }
        });
    }
    
    startReview() {
        this.reviewStarted = true;
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.currentStreak = 0;
        this.totalScore = 0;
        this.answeredCards.clear();
        
        this.showCard();
        this.updateUI();
        
        // Update button states
        this.startBtn.disabled = true;
        this.flipBtn.disabled = false;
        this.nextBtn.disabled = true;
        this.resetBtn.disabled = false;
        this.prevCardBtn.disabled = true;
        this.nextCardBtn.disabled = false;
    }
    
    showCard() {
        const card = this.flashcards[this.currentCardIndex];
        this.questionText.textContent = card.question;
        this.answerText.textContent = card.answer;
        
        // Reset card to front
        this.isFlipped = false;
        this.flashcard.classList.remove('flipped');
        
        // Hide scoring buttons initially
        this.scoringButtons.style.display = 'none';
        
        // Update button states
        this.flipBtn.disabled = false;
        this.nextBtn.disabled = true;
        
        // Check if this card has already been answered
        if (this.answeredCards.has(this.currentCardIndex)) {
            this.nextBtn.disabled = false;
        }
    }
    
    flipCard() {
        if (!this.reviewStarted) return;
        
        this.isFlipped = !this.isFlipped;
        this.flashcard.classList.toggle('flipped', this.isFlipped);
        
        if (this.isFlipped) {
            // Show scoring buttons when card is flipped
            this.scoringButtons.style.display = 'flex';
            this.flipBtn.disabled = true;
        } else {
            // Hide scoring buttons when card is unflipped
            this.scoringButtons.style.display = 'none';
            this.flipBtn.disabled = false;
            this.nextBtn.disabled = true;
        }
    }
    
    markAsCorrect() {
        if (!this.reviewStarted || !this.isFlipped) return;
        
        this.correctAnswers++;
        this.currentStreak++;
        this.totalScore += 10; // 10 points for correct answer
        
        // Update best streak if current streak is higher
        if (this.currentStreak > this.bestStreak) {
            this.bestStreak = this.currentStreak;
        }
        
        // Mark card as answered
        this.answeredCards.add(this.currentCardIndex);
        
        // Show success feedback
        this.showFeedback(true);
        
        // Enable next button
        this.nextBtn.disabled = false;
        
        this.updateUI();
    }
    
    markAsIncorrect() {
        if (!this.reviewStarted || !this.isFlipped) return;
        
        this.incorrectAnswers++;
        this.currentStreak = 0; // Reset streak on incorrect answer
        this.totalScore += 1; // 1 point for attempting (participation)
        
        // Mark card as answered
        this.answeredCards.add(this.currentCardIndex);
        
        // Show failure feedback
        this.showFeedback(false);
        
        // Enable next button
        this.nextBtn.disabled = false;
        
        this.updateUI();
    }
    
    showFeedback(isCorrect) {
        const feedback = document.createElement('div');
        feedback.className = `feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
        feedback.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
        feedback.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            font-size: 1.1rem;
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(feedback);
        
        // Remove feedback after 2 seconds
        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }
    
    nextCard() {
        if (!this.reviewStarted) return;
        
        // Move to next card
        if (this.currentCardIndex < this.flashcards.length - 1) {
            this.currentCardIndex++;
            this.showCard();
            this.updateUI();
        } else {
            // Review completed
            this.completeReview();
        }
    }
    
    previousCard() {
        if (!this.reviewStarted || this.currentCardIndex === 0) return;
        
        this.currentCardIndex--;
        this.showCard();
        this.updateUI();
    }
    
    completeReview() {
        this.reviewStarted = false;
        this.questionText.textContent = "Review completed! 🎉";
        this.answerText.textContent = `Final Score: ${this.totalScore} points`;
        this.scoringButtons.style.display = 'none';
        
        // Disable all buttons except reset
        this.flipBtn.disabled = true;
        this.nextBtn.disabled = true;
        this.startBtn.disabled = false;
        this.prevCardBtn.disabled = true;
        this.nextCardBtn.disabled = true;
        
        // Show completion message with detailed stats
        setTimeout(() => {
            const message = `Review completed!\n\n` +
                          `Final Score: ${this.totalScore} points\n` +
                          `Correct: ${this.correctAnswers}\n` +
                          `Incorrect: ${this.incorrectAnswers}\n` +
                          `Accuracy: ${this.getAccuracy()}%\n` +
                          `Best Streak: ${this.bestStreak}`;
            alert(message);
        }, 500);
    }
    
    resetReview() {
        this.reviewStarted = false;
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.currentStreak = 0;
        this.totalScore = 0;
        this.answeredCards.clear();
        
        this.questionText.textContent = "Click 'Start Review' to begin";
        this.answerText.textContent = "Answer will appear here";
        this.flashcard.classList.remove('flipped');
        this.scoringButtons.style.display = 'none';
        
        // Reset button states
        this.startBtn.disabled = false;
        this.flipBtn.disabled = true;
        this.nextBtn.disabled = true;
        this.resetBtn.disabled = true;
        this.prevCardBtn.disabled = true;
        this.nextCardBtn.disabled = true;
        
        this.updateUI();
    }
    
    getAccuracy() {
        const total = this.correctAnswers + this.incorrectAnswers;
        return total === 0 ? 0 : Math.round((this.correctAnswers / total) * 100);
    }
    
    updateUI() {
        // Update progress bar
        if (this.reviewStarted) {
            const progress = ((this.currentCardIndex + 1) / this.flashcards.length) * 100;
            this.progressFill.style.width = `${progress}%`;
            this.progressText.textContent = `${this.currentCardIndex + 1} / ${this.flashcards.length}`;
        } else {
            this.progressFill.style.width = '0%';
            this.progressText.textContent = '0 / 0';
        }
        
        // Update card counter
        if (this.reviewStarted) {
            this.cardCounter.textContent = `Card ${this.currentCardIndex + 1} of ${this.flashcards.length}`;
        } else {
            this.cardCounter.textContent = 'Card 0 of 0';
        }
        
        // Update navigation buttons
        this.prevCardBtn.disabled = !this.reviewStarted || this.currentCardIndex === 0;
        this.nextCardBtn.disabled = !this.reviewStarted || this.currentCardIndex === this.flashcards.length - 1;
        
        // Update stats
        this.correctCount.textContent = this.correctAnswers;
        this.incorrectCount.textContent = this.incorrectAnswers;
        this.accuracyRate.textContent = `${this.getAccuracy()}%`;
        this.totalScoreElement.textContent = this.totalScore;
        this.currentStreakElement.textContent = this.currentStreak;
        this.bestStreakElement.textContent = this.bestStreak;
    }
    
    // Method to add custom flashcards
    addFlashcard(question, answer) {
        this.flashcards.push({ question, answer });
        this.updateUI();
    }
    
    // Method to remove a flashcard
    removeFlashcard(index) {
        if (index >= 0 && index < this.flashcards.length) {
            this.flashcards.splice(index, 1);
            if (this.currentCardIndex >= this.flashcards.length) {
                this.currentCardIndex = Math.max(0, this.flashcards.length - 1);
            }
            this.updateUI();
        }
    }
    
    // Method to shuffle flashcards
    shuffleFlashcards() {
        for (let i = this.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
        if (this.reviewStarted) {
            this.currentCardIndex = 0;
            this.showCard();
        }
        this.updateUI();
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const app = new FlashcardApp();
    
    // Add some keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!app.reviewStarted) return;
        
        switch(e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (!app.isFlipped) {
                    app.flipCard();
                } else {
                    app.nextCard();
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                app.previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                app.nextCard();
                break;
            case 'f':
            case 'F':
                e.preventDefault();
                if (!app.isFlipped) {
                    app.flipCard();
                }
                break;
            case '1':
                e.preventDefault();
                if (app.isFlipped) {
                    app.markAsCorrect();
                }
                break;
            case '2':
                e.preventDefault();
                if (app.isFlipped) {
                    app.markAsIncorrect();
                }
                break;
        }
    });
    
    // Add some helpful instructions
    console.log('Flashcard App Loaded!');
    console.log('Keyboard shortcuts:');
    console.log('- Space/Enter: Flip card or go to next');
    console.log('- Arrow keys: Navigate between cards');
    console.log('- F: Flip card');
    console.log('- 1: Mark as correct');
    console.log('- 2: Mark as incorrect');
});
