import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Theme Toggle with Context</h1>
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
