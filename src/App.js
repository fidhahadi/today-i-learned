import React, { useEffect, useState } from 'react';
import supabase from './supabase';
import './style.css';
import CategoryFilters from './CategoryFilters';
import FactList from './FactList';
import NewFactForm from './NewFactForm';


function App() {
  const [showForm, setshowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setisLoading] = useState(false);


  useEffect(function () {
    async function getFacts() {
      setisLoading(true);
      const { data: facts, error } = await supabase
        .from('facts')
        .select('*').order('votesInteresting', { ascending: false }).limit(1000);


      console.log(error);
      if (!error)
        setFacts(facts);
      else alert("There was a problem getting a data");
      setisLoading(false);
    }
    getFacts();
  }, [])

  return (
    <>
      <Header showForm={showForm} setshowForm={setshowForm} />
      {showForm ? <NewFactForm setFacts={setFacts} setshowForm={setshowForm} /> : null}
      <main className='main'>
        <CategoryFilters />
        {isLoading ? <Loader /> : <FactList facts={facts} />}

      </main>
    </>
  )
}


function Loader() {
  return <p className="message">Loading....</p>
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