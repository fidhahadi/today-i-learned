import React, { useState } from 'react';
import supabase from './supabase';
import './style.css';


const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


function Fact({ fact, setFacts }) {
    const [isUpdating, setisUpdating] = useState(false);

    async function handleVote(columnName) {
        setisUpdating(true);
        const { data: updatedFact, error } = await supabase.from("facts").update({ [columnName]: fact[columnName] + 1 })
            .eq("id", fact.id)
            .select();
        setisUpdating(false);

        if (!error)
            setFacts((facts) => facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
            );
    }


    return (
        <>
            <li key={fact.id} className="fact">
                <p >
                    {fact.text}
                    <a className="source" href={fact.source}>(Source)</a>
                </p>
                <span className="tag" style={{
                    backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)?.color
                }}>{fact.category}</span>
                <div className="vote-buttons">
                    <button onClick={() => handleVote("votesInteresting")} disabled={isUpdating} >👍 {fact.votesInteresting}</button>
                    <button onClick={() => handleVote("votesMindblowing")} disabled={isUpdating}>🤯 {fact.votesMindblowing}</button>
                    <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>⛔️ {fact.votesFalse}</button>
                </div>
            </li></>
    )
}

export default Fact