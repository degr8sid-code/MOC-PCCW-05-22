import React, { useEffect, useState } from 'react';
import { API_URL } from './Api';
import { useAppContext } from './context/context';

const Booklist = () => {
    console.log("Loading book list")
    const [books, setBooks] = useState([])

    const {favourites, addToFav, removeFromFav} = useAppContext()

    const fetchData = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(books => setBooks(books))
    }

    const favChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id)
        return boolean
    }
    useEffect(fetchData, [])
    // books.map((book) => console.log(book.title))
    return (
        <div>
            <h1>Book List</h1>
            {books.map ((book) => 
            <div className="container d-flex flex-wrap align-items-center card" style={{width: 18 + 'rem'}} key={book.id}>
                <img src={book.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        {/* { <p className="card-text">{book.description}</p> } */}
                        {/* { <a href="#" className="btn btn-primary" 
                            onClick={()=> addToFavourites(book)}>Add to Favorites</a>} */}
                            {favChecker(book.id) ? 
                            <button className="btn btn-primary" onClick={()=>removeFromFav(book.id)}>Remove from Favourites</button>
                            :
                            <button className="btn btn-primary" onClick={()=>addToFav(book)}>Add to Favourites</button>
                        }
                    </div>
            </div>
            )}
        </div>
    )
}

export default Booklist