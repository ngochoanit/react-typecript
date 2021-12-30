import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import MovieProvider from './contexts/MovieContext';
import ProgressProvider from './contexts/ProgressContext';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <MovieProvider>
        <ThemeProvider>
          <ProgressProvider>
            <Navbar></Navbar>
            <Movies></Movies>
            <ToggleTheme></ToggleTheme>
          </ProgressProvider>
        </ThemeProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
