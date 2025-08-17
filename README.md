# Math Learning Hub

A comprehensive learning platform that offers two different study modes: interactive flashcards and multiple choice quizzes.

## Features

### 🎓 Main Hub
- **Unified Dashboard**: Choose between flashcards and multiple choice modes
- **Progress Tracking**: View overall learning statistics across both modes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 📚 Flashcard Mode
- **Interactive Cards**: Click to flip between questions and answers
- **Progress Tracking**: Monitor your accuracy, streaks, and score
- **Navigation**: Move between cards with previous/next buttons
- **Scoring System**: Mark answers as correct or incorrect
- **Statistics**: Track correct/incorrect answers, accuracy, and streaks

### ✅ Multiple Choice Mode
- **Quiz Format**: Answer questions with multiple choice options
- **Instant Feedback**: Get immediate results and explanations
- **Auto-Advance**: Automatically moves to next question after 3 seconds
- **Manual Control**: Toggle auto-advance on/off or click to skip countdown
- **Progress Bar**: Visual progress indicator through the quiz
- **Results Summary**: Comprehensive end-of-quiz statistics
- **Randomized Questions**: Questions are shuffled for variety

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. Choose your preferred learning mode:
   - **Flashcards**: For self-paced study and review
   - **Multiple Choice**: For testing knowledge and getting feedback

### Flashcard Mode
1. Click "Start Review" to begin
2. Click on the card to flip it and see the answer
3. Mark your answer as correct (✅) or incorrect (❌)
4. Use navigation buttons to move between cards
5. View your progress in the statistics panel

### Multiple Choice Mode
1. Click "Start Quiz" to begin
2. Read the question and select your answer
3. Get instant feedback and explanation
4. Continue to the next question
5. View your final results and accuracy

## File Structure

```
GEN MATH/
├── index.html          # Main hub page
├── flashcards.html     # Flashcard mode
├── multiple-choice.html # Multiple choice mode
├── main.js            # Main hub functionality
├── script.js          # Flashcard functionality
├── multiple-choice.js  # Multiple choice functionality
├── styles.css         # All styling
└── README.md          # This file
```

## Customization

### Adding New Questions
- **Flashcards**: Edit the `flashcards` array in `script.js`
- **Multiple Choice**: Edit the `sampleQuestions` array in `multiple-choice.js`

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- The design is fully responsive and mobile-friendly

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

## Local Storage

The app uses browser local storage to save:
- Flashcard progress and statistics
- Quiz results and accuracy
- Overall learning metrics

## Keyboard Shortcuts (Flashcard Mode)

- **Space/Enter**: Flip card or move to next
- **Arrow Left/Right**: Navigate between cards
- **F**: Flip current card
- **1**: Mark as correct
- **2**: Mark as incorrect

## Responsive Design

The interface automatically adapts to different screen sizes:
- **Desktop**: Full layout with side-by-side elements
- **Tablet**: Optimized for medium screens
- **Mobile**: Stacked layout for small screens

## Future Enhancements

- More question categories
- Difficulty levels
- Time-based challenges
- Export progress data
- Social features and leaderboards

---

**Note**: This is a client-side application that runs entirely in your browser. No internet connection is required after the initial page load.
