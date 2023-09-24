import React from 'react';
import './style.css';
import Fact from './Fact';


function FactList({ facts }) {

    if (facts.length === 0)
        return (<p className='message'>No Facts for this category yet. Create a new one !!</p>
        );


    return (
        <>
            <section><ul className="facts-list">{
                facts.map((fact) => <Fact key={fact.id} fact={fact} />)
            }</ul>
                <p>There are {facts.length} facts in the database. Add your own!!</p></section>
        </>
    )
}

export default FactList