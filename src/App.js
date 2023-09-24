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
  const [currentCategory, setcurrentCategory] = useState("all");


  useEffect(function () {
    async function getFacts() {
      setisLoading(true);

      let query = supabase.from("facts").select("*");
      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);


      const { data: facts, error } = await query
        .order('votesInteresting', { ascending: false }).limit(1000);
      if (!error)
        setFacts(facts);
      //else alert("There was a problem getting a data");
      setisLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setshowForm={setshowForm} />
      {showForm ? <NewFactForm setFacts={setFacts} setshowForm={setshowForm} /> : null}
      <main className='main'>
        <CategoryFilters setcurrentCategory={setcurrentCategory} />
        {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}

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