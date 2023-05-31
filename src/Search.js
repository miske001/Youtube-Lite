import React, { useState } from "react";
import './style.css'
import kmish from '../src/imgs/kmish.png'

const Search = ({onFormSubmit, clearAll}) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value)
        console.log(term);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search--div">
            <div onClick={clearAll}><img className="logo" src={kmish} alt="logo" /></div>
            <form onSubmit={onSubmit} className="form" >
                <input placeholder="Search" value={term} onChange={onInputChange} type="text" />
            </form>
            
        </div>
    )
}

export default Search