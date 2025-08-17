# 📚 Flashcard Review Website

A modern, interactive flashcard website for reviewing and studying various topics. Built with HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Flashcards**: Click to flip cards with smooth 3D animations
- **Progress Tracking**: Visual progress bar and card counter
- **Navigation Controls**: Previous/Next buttons and keyboard shortcuts
- **Statistics**: Track correct/incorrect answers and accuracy
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and glassmorphism effects
- **Keyboard Shortcuts**: Quick navigation using keyboard

## 🚀 How to Use

1. **Open the Website**: Open `index.html` in your web browser
2. **Start Review**: Click the "Start Review" button to begin
3. **Flip Cards**: Click on a card or use the "Flip Card" button to see the answer
4. **Navigate**: Use "Next Card" to move forward or navigation buttons
5. **Track Progress**: Monitor your progress with the progress bar and statistics
6. **Complete Review**: Go through all cards to finish the review session

## ⌨️ Keyboard Shortcuts

- **Space/Enter**: Flip card or go to next card
- **Arrow Left**: Previous card
- **Arrow Right**: Next card
- **F**: Flip current card

## 🎯 Sample Flashcards

The website comes with 10 sample flashcards covering various topics:
- Geography (capitals, continents, oceans)
- Science (planets, chemistry, math)
- History (World War II)
- Literature (Shakespeare)

## 🔧 Customization

### Adding Your Own Flashcards

You can easily add your own flashcards by modifying the `script.js` file. Find the `flashcards` array in the constructor and add your questions and answers:

```javascript
this.flashcards = [
    {
        question: "Your question here?",
        answer: "Your answer here"
    },
    // Add more flashcards...
];
```

### Changing Styles

Modify `styles.css` to customize:
- Colors and gradients
- Fonts and typography
- Card sizes and animations
- Layout and spacing

### Adding Features

The JavaScript code includes methods for:
- `addFlashcard(question, answer)`: Add new flashcards
- `removeFlashcard(index)`: Remove flashcards
- `shuffleFlashcards()`: Randomize card order

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with all features
- **Tablet**: Optimized spacing and button layout
- **Mobile**: Stacked layout with touch-friendly controls

## 🌟 Browser Compatibility

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📁 File Structure

```
flashcard-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Smooth Animations**: CSS transitions and transforms
- **Gradient Backgrounds**: Beautiful color schemes
- **Modern Typography**: Inter font family for readability
- **Card Shadows**: Subtle depth and elevation

## 🚀 Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start reviewing with the sample flashcards
4. Customize the content for your needs

## 💡 Tips for Best Experience

- Use keyboard shortcuts for faster navigation
- Click directly on cards to flip them
- Monitor your progress with the statistics
- Take breaks between review sessions
- Customize flashcards to match your study material

## 🔄 Updates and Improvements

The website is designed to be easily extensible. You can add features like:
- Multiple flashcard sets
- Export/import functionality
- Spaced repetition algorithms
- Audio support
- Image support in flashcards

---

**Happy Studying! 📖✨**
