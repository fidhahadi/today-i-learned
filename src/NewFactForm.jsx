import React from 'react'
import './style.css';

function NewFactForm() {

    return (

        <form className="formEl fact-form">
            <input type="text" placeholder="Share a fact with the world..." />
            <span>200</span>
            <input type="text" placeholder="Trustworthy source..." />
            <select>
                <option value="">Choose category:</option>
                <option value="technology">Technology</option>
                <option value="science">Science</option>
                <option value="finance">Finance</option>
            </select>
            <button className="btn btn-large">Post</button>
        </form>

    )
}

export default NewFactForm