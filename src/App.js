import React, { useState } from 'react';
import './style.css';
import CategoryFilters from './CategoryFilters';
import FactList from './FactList';
import NewFactForm from './NewFactForm';




function App() {
  const [showForm, setshowForm] = useState(false);

  return (
    <>
      <Header showForm={showForm} setshowForm={setshowForm} />
      {showForm ? <NewFactForm /> : null}
      <main className='main'>
        <CategoryFilters />
        <FactList />

      </main>
    </>
  )
}
function Header({ showForm, setshowForm }) {
  return <>
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>

      <button onClick={() => setshowForm((show) => !show)} className="btn-open btn btn-large">{showForm ? `Close` : `Share a Fact`}</button>
    </header>
  </>
}

export default App