// Main Hub JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadOverallStats();
});

function loadOverallStats() {
    // Load stats from localStorage
    const flashcardStats = JSON.parse(localStorage.getItem('flashcardStats')) || {};
    const quizStats = JSON.parse(localStorage.getItem('quizStats')) || {};
    
    // Calculate total cards studied
    const totalCards = (flashcardStats.totalCards || 0) + (quizStats.totalQuestions || 0);
    
    // Calculate total questions answered
    const totalQuestions = (quizStats.totalQuestions || 0);
    
    // Calculate overall accuracy
    const flashcardCorrect = flashcardStats.correctCount || 0;
    const flashcardIncorrect = flashcardStats.incorrectCount || 0;
    const quizCorrect = quizStats.correctCount || 0;
    const quizIncorrect = quizStats.incorrectCount || 0;
    
    const totalCorrect = flashcardCorrect + quizCorrect;
    const totalAttempts = flashcardCorrect + flashcardIncorrect + quizCorrect + quizIncorrect;
    
    const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    
    // Calculate study time (in minutes)
    const flashcardTime = flashcardStats.studyTime || 0;
    const quizTime = quizStats.studyTime || 0;
    const totalStudyTime = Math.round((flashcardTime + quizTime) / 60000); // Convert from ms to minutes
    
    // Update the display
    document.getElementById('totalCards').textContent = totalCards;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('overallAccuracy').textContent = overallAccuracy + '%';
    document.getElementById('studyTime').textContent = totalStudyTime + ' min';
}

// Add click event listeners for mode cards
document.addEventListener('DOMContentLoaded', function() {
    const modeCards = document.querySelectorAll('.mode-card');
    
    modeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
