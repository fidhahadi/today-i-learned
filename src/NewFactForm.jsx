import React, { useState } from 'react'
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

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm() {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setcategory] = useState("");
    const textLength = text.length;

    function handleSubmit(e) {
        //1. Prevent browser reload
        e.preventDefault();

        console.log(text, source, category);

        //2. check if data is valid,if so create a new fact
        if (text && isValidHttpUrl(source) && category && textLength <= 200)
            console.log("there is data");




        //.3. create new fact object
        //4.add the new fact to the ui , add the fact state
        //5. reset input fields
        // 6. close the form

    }

    return (

        <form className="formEl fact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Share a fact with the world..." value={text}
                onChange={(e) => setText(e.target.value)} />
            <span>{200 - textLength}</span>
            <input type="text" value={source} onChange={(e) => setSource(e.target.value)} placeholder="Trustworthy source..." />
            <select value={category} onChange={(e) => setcategory(e.target.value)}>
                <option value="">Choose category:</option>
                {CATEGORIES.map((cat) => <option key={cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>)}
            </select>
            <button className="btn btn-large">Post</button>
        </form>

    )
}

export default NewFactForm