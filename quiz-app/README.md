# Interactive Quiz Application

A modern, responsive quiz application built with HTML, CSS, and JavaScript. Test your knowledge across multiple categories with different difficulty levels!

## 🌟 Features

### Core Functionality
- **Multiple Categories**: General Knowledge, Science, History, and Sports
- **Difficulty Levels**: Easy, Medium, and Hard questions
- **Timer System**: 30-second countdown per question
- **Progress Tracking**: Visual progress bar and question counter
- **Scoring System**: Real-time score calculation with percentage display
- **Answer Review**: Detailed review of all questions and answers

### User Experience
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Keyboard Support**: Use A/B/C/D or 1/2/3/4 keys to select answers
- **Visual Feedback**: Color-coded answers (correct/incorrect) with instant feedback
- **Auto-advance**: Automatic progression to next question after answer reveal

### Interactive Elements
- **Category Selection**: Visual category cards with icons
- **Difficulty Selection**: Easy-to-use difficulty buttons
- **Results Dashboard**: Comprehensive results with statistics
- **Answer Review**: Detailed breakdown of all quiz questions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation
1. Download or clone the quiz application files
2. Ensure you have all files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `quiz-data.js`
   - `README.md`

### Running the Application
1. Open `index.html` in your web browser
2. Or serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000` in your browser

## 🎮 How to Use

### Starting a Quiz
1. **Select a Category**: Choose from General Knowledge, Science, History, or Sports
2. **Choose Difficulty**: Pick Easy, Medium, or Hard level
3. **Start Quiz**: Click the "Start Quiz" button to begin

### Taking the Quiz
- **Read the Question**: Each question is displayed clearly at the top
- **Select an Answer**: Click on one of the four answer options (A, B, C, D)
- **Keyboard Shortcuts**: Use A/B/C/D keys or 1/2/3/4 keys for quick selection
- **Timer**: You have 30 seconds per question
- **Progress**: Track your progress with the visual progress bar

### Answer Feedback
- **Immediate Feedback**: See if your answer is correct or incorrect
- **Color Coding**: 
  - Green: Correct answer
  - Red: Incorrect answer (if you selected it)
  - Blue: Your selected answer (if correct)

### Results and Review
- **Score Display**: See your percentage score and detailed statistics
- **Performance Message**: Get personalized feedback based on your score
- **Answer Review**: Review all questions with correct answers highlighted
- **Restart**: Take another quiz with different settings

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-friendly interface with optimized layouts
- **Mobile**: Compact design with easy thumb navigation

## 🎨 Design Features

### Visual Elements
- **Modern Gradient Background**: Eye-catching purple gradient
- **Card-based Layout**: Clean, card-based design for all screens
- **Smooth Animations**: CSS transitions for a polished feel
- **Icon Integration**: Font Awesome icons for visual appeal

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Success**: Green (#27ae60)
- **Error**: Red (#e74c3c)
- **Warning**: Orange (#f39c12)
- **Neutral**: Gray tones for backgrounds and text

## 📊 Question Database

The application includes a comprehensive question database:

### Categories Available
1. **General Knowledge** (10 easy, 10 medium, 5 hard questions)
2. **Science** (5 easy, 5 medium, 3 hard questions)
3. **History** (5 easy, 5 medium, 2 hard questions)
4. **Sports** (5 easy, 5 medium, 2 hard questions)

### Adding New Questions
To add new questions, edit the `quiz-data.js` file:

```javascript
// Example of adding a new question
const newQuestion = {
    question: "Your question here?",
    answers: {
        a: "Option A",
        b: "Option B", 
        c: "Option C",
        d: "Option D"
    },
    correct: "a" // The correct answer key
};
```

## ⚡ Performance Features

- **Lightweight**: No external dependencies except Font Awesome and Google Fonts
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Efficient DOM Manipulation**: Minimal DOM updates for better performance

## 🔧 Customization

### Styling
- Modify `styles.css` to change colors, fonts, and layout
- Update CSS custom properties for consistent theming
- Adjust breakpoints for different responsive behavior

### Functionality
- Edit `script.js` to modify quiz behavior
- Change timer duration, number of questions, or scoring logic
- Add new features like hints, lifelines, or multiplayer support

### Content
- Update `quiz-data.js` to add new categories or questions
- Modify question format or add new question types
- Integrate with external APIs for dynamic content

## 🌐 Browser Compatibility

- **Chrome**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Optimized for mobile Safari and Chrome

## 📄 File Structure

```
quiz-app/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # Quiz application logic
├── quiz-data.js        # Question database
└── README.md           # This documentation
```

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Add new questions or features
3. Test your changes thoroughly
4. Submit a pull request with detailed description

### Ideas for Contributions
- New question categories
- Additional difficulty levels
- Sound effects and animations
- Leaderboard system
- Social sharing features
- Accessibility improvements

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

Potential features for future versions:
- **User Accounts**: Save progress and scores
- **Multiplayer Mode**: Compete with friends
- **Timed Challenges**: Speed round variations
- **Hint System**: Help options for difficult questions
- **Statistics**: Detailed performance analytics
- **Custom Quizzes**: User-generated content
- **Offline Mode**: Progressive Web App functionality

---

**Enjoy testing your knowledge with this interactive quiz application!** 🧠✨