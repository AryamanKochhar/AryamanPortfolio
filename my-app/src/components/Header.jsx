import React from 'react';

function Header({ theme, toggleTheme }) {
  return (
    <header>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      <h1>Aryaman Kochhar</h1>
      <p>
        Passionate learner | Machine Learning | Trading | LeetCode grinder | Developer | AlgoTrading | Badminton Enthusiast | Math Enjoyer | Dramatics
      </p>
    </header>
  );
}

export default Header;