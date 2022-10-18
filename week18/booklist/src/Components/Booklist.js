import React, { useEffect, useState } from 'react';
import { API_URL } from './Api';

const Booklist = () => {
    console.log("Loading book list")
    const [books, setBooks] = useState([])

    const fetchData = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(books => setBooks(books))
    }

    useEffect(fetchData, [])
    // books.map((book) => console.log(book.title))
    return (
        <div>
            <h1>Book List</h1>
            {books.map ((book) => 
            <div className="card" style={{width: 18 + 'rem'}} key={book.id}>
                <img src={book.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                        <a href="#" className="btn btn-primary">Add to Favorites</a>
                    </div>
            </div>
            )}
        </div>
    )
}

export default Booklist