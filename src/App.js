import React from 'react';
import './style.css';
import CategoryFilters from './CategoryFilters';
import Header from './Header';
import NewFactForm from './NewFactForm';
import FactList from './FactList';




function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      <main className='main'>
        <CategoryFilters />
        <FactList />

      </main>
    </>
  )
}

export default App