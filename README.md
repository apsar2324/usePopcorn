### 🎬 usePopcorn – Movie Explorer App

A React course project built as part of the “Ultimate React Course” by Jonas Schmedtmann.

usePopcorn is a movie search and watchlist application where users can search movies from the OMDb API, view details, and maintain their own watched list. This app was built while learning advanced React concepts such as state management, side effects, custom hooks, controlled components, and asynchronous data fetching.

## 🚀 Live Demo

Netlify Deployment:
https://usepopcorn-apsar.netlify.app

## 📌 Features
## 🔍 Search & Browse

  - Search for any movie using the OMDb API

  - Dynamic search with live results

## 🎞 Movie Details

  - View detailed information about a selected movie

  - IMDb rating, plot, actors, release year, etc.

## ⭐ Add to Watched List

 - Add movies to your personal watched list

## Stores:

- IMDb rating

- User rating

- Runtime

- Delete movies from the list

## 🧠 Local State Management

- React hooks: useState, useEffect, useRef

- AbortController for canceling API requests

## 🛠 Built with

- React (Vite)

- OMDb API

- CSS for styling

- Netlify for deployment

## 📁 Folder Structure

src/
  components/
    Navbar.jsx
    MovieList.jsx
    MovieDetails.jsx
    WatchedList.jsx
    App.jsx
   index.css
  -main.jsx

## 🔧 How It Works
- API Fetching

- Movies are fetched using:
https://www.omdbapi.com/?apikey=YOUR_KEY&s=QUERY


- Netlify requires HTTPS, so the fetch URL uses:
https://www.omdbapi.com/

- AbortController
To avoid race conditions & unnecessary API calls:

const controller = new AbortController();

useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  return () => controller.abort();
}, [query]);

## 🐛 Netlify Deployment Issue (Fixed)

- This project initially worked on localhost, but not on Netlify because:

## ❌ Wrong
http://www.omdbapi.com

- Netlify blocks HTTP requests because the site is served via HTTPS.

## ✔ Fixed
https://www.omdbapi.com

- Using HTTPS resolved the “fetch not working” issue.

## 📚 Course Project
- This project was built as part of:
⭐ Jonas Schmedtmann – The Ultimate React Course (2024)

## It covers:

- Component architecture

- State management

- Handling side effects

- Fetching data

- Conditional rendering

- Custom hooks

This app is one of the major practical hands-on projects in the course.

## ▶️ Running Locally
1. Clone the repo
git clone https://github.com/yourusername/usepopcorn.git
cd usepopcorn

2. Install dependencies
npm install

3. Start development server
npm run dev
