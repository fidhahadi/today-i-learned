import React from 'react';
import './style.css';
import CategoryFilters from './CategoryFilters';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>

        <button className="btn-open btn btn-large">Share a fact</button>
      </header>
      <CategoryFilters />
    </>
  )
}

export default App