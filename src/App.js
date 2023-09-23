import React, { useState } from 'react';
import './style.css';
import CategoryFilters from './CategoryFilters';
import FactList from './FactList';
import NewFactForm from './NewFactForm';




function App() {
  const [showForm, setshowForm] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>

        <button onClick={() => setshowForm((show) => !show)} className="btn-open btn btn-large">Share a fact</button>
      </header>

      {showForm ? <NewFactForm /> : null}
      <main className='main'>
        <CategoryFilters />
        <FactList />

      </main>
    </>
  )
}

export default App