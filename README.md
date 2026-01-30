# 🎬 Nextlix_Gemini (NetflixGemini – AI Movie Recommendation App)

Nextlix_Gemini is a Netflix-style movie browsing and recommendation web application built using React.  
Along with standard movie browsing, the app uses AI (GPT/Gemini) to suggest movies based on user searches.  
It also includes secure authentication, clean UI, and real-time movie data from TMDB.

This project was built as part of my learning and upskilling journey in modern frontend development.

---

## ✨ What This App Does

### 🔐 User Authentication
- User sign up, login, and logout using Firebase
- Input handling with proper form validations
- User profile update after registration
- Authentication state managed using `onAuthStateChanged`
- Cleanup of auth listeners to prevent memory leaks

---

### 🗂 State Management
- Global state handled using Redux Toolkit
- Separate slices for:
  - User authentication (`userSlice`)
  - Movie data (`movieSlice`)
  - AI-based recommendations (`gptSlice`)
- Performance improvements using memoization

---

### 🎬 Movie Browsing (TMDB)
- Integrated TMDB API for real-time movie data
- Displays now-playing and popular movies
- Custom hooks for fetching movie data
- Trailer video support with YouTube embed (autoplay & mute)
- Reusable movie list and movie card components
- Images loaded using TMDB CDN

---

### 🤖 AI Movie Recommendation
- Dedicated GPT search page
- Search bar powered by OpenAI / Gemini API
- AI-generated movie suggestions
- Suggested movies fetched from TMDB
- Reused movie list UI for AI recommendations

---

### 🎨 UI & Experience
- Styled using Tailwind CSS
- Responsive layout for all screen sizes
- Multi-language support
- Clean and modern user interface

---

### 🔐 Configuration & Security
- Sensitive data managed using environment variables
- `.env` file excluded from GitHub using `.gitignore`
- Centralized constants for better code organization
- Application deployed to production

---

## 🧰 Tech Stack
- React.js
- Redux Toolkit
- Firebase Authentication
- Tailwind CSS
- TMDB API
- OpenAI / Gemini API
- Git & GitHub

---

## ⚙️ Getting Started

> ⚠️ **Note:**  
> This project requires your own API keys.  
> API keys are intentionally not included in the repository.

---

### Clone the repository
```bash
git clone https://github.com/USERNAME/Nextlix_gemini.git

