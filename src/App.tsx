import { Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import TopMovie from './components/TopMovie';
import AuthProvider from './contexts/AuthContex';
import MovieProvider from './contexts/MovieContext';
import ProgressProvider from './contexts/ProgressContext';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <MovieProvider>
          <ThemeProvider>
            <ProgressProvider>
              <Navbar></Navbar>
              <Grid container>
                <Grid item xs={6}>
                  <TopMovie></TopMovie>
                </Grid>
                <Grid item xs={6}>
                  <Movies></Movies>
                </Grid>
              </Grid>
              <ToggleTheme></ToggleTheme>
            </ProgressProvider>
          </ThemeProvider>
        </MovieProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
