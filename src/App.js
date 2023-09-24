import React, { useEffect, useState } from 'react';
import supabase from './supabase';
import './style.css';
import CategoryFilters from './CategoryFilters';
import FactList from './FactList';
import NewFactForm from './NewFactForm';



const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [showForm, setshowForm] = useState(false);
  const [facts, setFacts] = useState([]);


  useEffect(function () {
    async function getFacts() {
      const { data: facts, error } = await supabase
        .from('facts')
        .select('*')
      setFacts(facts);
      console.log(facts);
    }
    getFacts();
  }, [])

  return (
    <>
      <Header showForm={showForm} setshowForm={setshowForm} />
      {showForm ? <NewFactForm setFacts={setFacts} setshowForm={setshowForm} /> : null}
      <main className='main'>
        <CategoryFilters />
        <FactList facts={facts} />

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