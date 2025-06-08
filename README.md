# MoodBoard 🌈

**Track your daily moods in a visually dynamic and intuitive calendar interface.**

---

## 📝 Project Description

**MoodBoard** is a single-page responsive React app designed to help users track their daily moods, view mood summaries, and visualize emotional trends. The interface is clean, interactive, and includes animated transitions. It supports editing past moods (within the current week), dynamically changes background based on mood trends.

---

## 🛠 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Chart**: Custom SVG logic (No chart library used)
- **Storage**: `localStorage`

---

## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/moodboard-frontend.git
   cd moodboard-frontend

 2.  **Install Dependencies**
     npm install
 
 3. Run the Development Server
    npm run dev

 ## Folder Structure
    .
├── public/
├── src/
│   ├── components/Main.jsx
│   └── App.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js

🎯 Features Overview
📅 Mood Calendar for current week (clickable)

🎨 Color-coded moods: Happy, Neutral, Sad

🔄 Update/Delete mood entries for past 7 days

🎭 Background changes with dominant mood

✨ Animated transitions between mood states

💬 Responsive Design

❌ Restriction: No future date selection beyond current week

📊 ##Custom Mood Logic:##
1. Date Range Setup (Last 7 Days): created an array of the last 7 days formatted as DD-MM-YYYY. Stored in the state.
2.  Mood Selection Logic: Moods are color-coded:
    "yellow" → Happy 😄
    "green" → Neutral 😊
    "blue" → Sad 😔
    any other/unset → "white" (neutral/no mood).
3.   Mood Display History: A section labeled "History" shows the mood selected for each date. It uses the mooddate object to look up and display the mood alongside the date.
4.   Delete Mood Logic: A "Delete" button appears next to dates that have a mood set. Clicking it removes the mood from the mooddate object and resets the background to white.
5.   Visual Feedback: UI feedback is given by changing the backgroundColor of the main container to the currently selected mood color.
6.   Taking Care of Responsiveness: Working on more Flexbox to make UI attractive and responsive at the same time using tailwind, CSS (propeties like(vmax and other).
   
🌈 Screenshots
 
🌐 Live Demo
Deployed at Vercel: https://vaibhavrautelafrontend.vercel.app/

📧 Submission
✅ Repository link: https://github.com/vaibhavrautela01/moodboard-frontend

✅ Deployed live: https://vaibhavrautelafrontend.vercel.app/

✅ Linkdin: https://www.linkedin.com/in/vaibhav-rautela-124517259/

📩 Email: rautelavaibhav01@gmail.com

🧠 Note on Originality
This project is completely done by me. All logic, design, and implementation were hand-coded. Referenced documentation includes official React and Tailwind docs.

🧑‍💻 Author
Vaibhav Rautela
Email: rautelavaibhav01@gmail.com
GitHub: github.com/vaibhavrautela
LinkedIn: linkedin.com/in/vaibhav-rautela-35a41723a
    
