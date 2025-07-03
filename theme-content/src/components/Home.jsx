import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  const style = {
    padding: '20px',
    backgroundColor: darkMode ? '#222' : '#eee',
    color: darkMode ? '#fff' : '#000',
    borderRadius: '8px',
    marginTop: '1rem'
  };

  return <div style={style}>This is the {darkMode ? 'Dark' : 'Light'} theme</div>;
};

export default Home;
