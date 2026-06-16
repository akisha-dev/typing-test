# TypingFlow

A minimalist, interactive typing speed test application built with vanilla JavaScript. It tracks your typing speed in real-time and securely saves your final scores to a cloud database.

## Live Demo
[Take the Typing Test Here](https://akisha-dev.github.io/typing-test/)

## Features
* **Real-time Feedback:** Color-coded accuracy tracking as you type.
* **Live Performance Metrics:** Calculates Time, Accuracy percentage, and WPM (Words Per Minute).
* **Cloud Leaderboard:** Automatically saves your final scores to a custom MongoDB backend.
* **Responsive Design:** Clean, distraction-free UI built with the Montserrat font.
* **Smart Navigation:** Support for Backspace corrections and Spacebar word progression.

## Technologies Used
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express REST API (Hosted on Render)
* **Database:** MongoDB Atlas

## How It Works
1. Click **Start** to begin the test.
2. Type the displayed text exactly as shown. Completed characters turn white (correct) or red (incorrect).
3. Once the final word is completed, your stats will render on the screen and automatically POST to the backend database.