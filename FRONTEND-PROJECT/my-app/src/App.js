import React, { useState, useEffect } from 'react';
import './App.css'; // To include fade transition styles

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Change background color based on the theme
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
  }, [isDarkMode]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className={isDarkMode ? 'fade' : ''} style={{ color: isDarkMode ? '#fff' : '#000' }}>
        Embedded YouTube Video with Theme Toggle and Fade Effect
      </h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t0Q2otsqC4I?si=V7JeejWb1YpJXeYF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <br />
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          marginTop: '90px',
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#fff' : '#333',
          color: isDarkMode ? '#333' : '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
