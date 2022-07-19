import React from 'react'
import { Link } from 'react-router-dom';
import "./Book.css"

const Book = (props) => {
    const {_id,name,author,description,price,image}=props.book;
    return <div className='card'>
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}> Update</button>
        <button sx={{mt:'auto'}}>Delete</button>
    </div>
}

export default Book