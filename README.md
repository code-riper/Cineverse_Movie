# 🎬 CineVerse — Movie Discovery Web Application

CineVerse is a responsive **movie discovery web application** built with React.js. It allows users to explore popular movies, browse Hollywood, Bollywood, and Tollywood movies, search for movies, and view detailed movie information using real-time data from the **TMDB API**.

The application follows a **component-based React architecture** with reusable components, structured project organization, REST API integration using Axios, client-side navigation using React Router, and responsive UI design using Bootstrap 5, Material UI, and custom CSS.

---

## 🌐 Live Demo

**Live Application:**
[https://cineverse-movies-527514.netlify.app/](https://cineverse-movies-527514.netlify.app/)

**GitHub Repository:**
[https://github.com/code-riper/Cineverse_Movie](https://github.com/code-riper/Cineverse_Movie)

---

## ✨ Features

* 🎬 Browse and explore popular movies
* 🌎 Explore Hollywood movies
* 🇮🇳 Browse Bollywood movies
* 🎥 Explore Tollywood movies
* 🔎 Search movies dynamically
* 📄 View detailed movie information
* ⭐ View movie ratings and genres
* 📅 View release dates and runtime
* 📝 View movie overview and description
* 📑 Pagination for movie listings and search results
* 🧭 Client-side navigation using React Router
* 🔗 Real-time TMDB REST API integration
* ⚡ Dynamic data fetching using Axios
* 📱 Fully responsive design
* 🎨 Bootstrap 5 responsive grid and utilities
* 🧩 Material UI components and icons
* ♻️ Reusable React components
* 📁 Structured and maintainable project architecture
* ⏳ Loading and error state handling
* 🚀 Deployed using Netlify

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **React Router**
* **Bootstrap 5**
* **Material UI (MUI)**

### API & Data

* **TMDB API**
* **REST API**
* **Axios**

### Development & Deployment

* **Vite**
* **Git**
* **GitHub**
* **Netlify**

---

## 🏗️ Project Structure

```text
Cineverse_Movie/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── tmdb.js
│   │
│   ├── assets/
│   ├── components/
│   ├── Pages/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The project follows a structured React architecture where reusable components, pages, API configuration, assets, and styling are organized separately for better maintainability and scalability.

---

## 🔄 Application Flow

```text
                         CineVerse
                             │
                             ▼
                            Home
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
       Popular Movies   Movie Categories   Search
                             │              │
                    ┌────────┼────────┐     │
                    ▼        ▼        ▼     │
                Hollywood Bollywood Tollywood
                    │        │        │     │
                    └────────┴────────┴─────┘
                             │
                             ▼
                       Movie Details
```

---

## 🔗 API Integration

CineVerse uses the **TMDB REST API** to retrieve movie-related data dynamically.

Axios is used to make HTTP requests between the React application and the TMDB API.


React Application
       │
       │ HTTP Request
       ▼
     Axios
       │
       ▼
    TMDB API
       │
       ▼
   Movie Data
       │
       ▼
 React Components
       │
       ▼
      UI


The application uses the TMDB API for:

* Popular movies
* Movie search results
* Movie details
* Movie genres
* Hollywood movies
* Bollywood movies
* Tollywood movies
* Movie poster and backdrop images

---

## 📱 Responsive Design

CineVerse is designed to provide a responsive experience across different screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Bootstrap 5's responsive grid system and utility classes are combined with custom CSS and Material UI components to create a responsive and user-friendly interface.

Movie sections use responsive layouts, with horizontal scrolling on larger screens and grid layouts on smaller screens.
---

**Live Application:**
[https://cineverse-movies-527514.netlify.app/](https://cineverse-movies-527514.netlify.app/)

---

## 🎯 Project Purpose

The main purpose of CineVerse is to build a practical, real-world React application while implementing important frontend development concepts such as:

* React component architecture
* REST API integration
* Dynamic data fetching
* Axios HTTP requests
* Client-side routing
* Dynamic routes
* Movie search functionality
* Pagination
* Responsive UI development
* Reusable components
* Loading and error state handling
* Structured project organization
* Integration of modern frontend libraries

This project demonstrates how React can be used with external APIs and modern UI libraries to build a responsive, data-driven web application.

---

## 📸 Project Preview

### CineVerse — Movie Discovery Platform

A responsive movie-focused interface for discovering popular movies, exploring categories, searching for movies, and viewing detailed movie information.

## 👨‍💻 Author

### Faisal Salmani

**GitHub:**
[https://github.com/code-riper](https://github.com/code-riper)

---

## ⭐ Support

If you find this project useful or interesting, feel free to ⭐ **star the repository**.

---

### 🎬 Built with React.js ❤️
