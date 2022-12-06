import React, { useEffect, useState } from 'react';
import { API_URL } from './Api';
import { useAppContext } from './context/context';
// import axios from 
const Booklist = () => {
    console.log("Loading book list")
    const [books, setBooks] = useState([])

    const { favourites, addToFav, removeFromFav, addToCart } = useAppContext()

    //replacing fetch with axios
    const fetchData = () => {
        fetch(API_URL)
        .then(res => res.json())
        .then(books => setBooks(books))
    }
    // useEffect( () => {
    //     axios
    //     .get(API_URL)
    //     .then (res => {
    //         setBooks(res.data)
    //     })
    //     .catch((err) => console.log(err))
    // },[])
    const favChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id)
        return boolean
    }

    useEffect(fetchData, [])
    // books.map((book) => console.log(book.title))
    return (
        <div>
            <h1>Book List</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                    {books.map((book) =>
                        <div className="card" style={{ width: 18 + 'rem' }} key={book.id}>
                            <img src={book.image_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                {/* { <p className="card-text">{book.description}</p> } */}
                                {/* { <a href="#" className="btn btn-primary" 
                            onClick={()=> addToFavourites(book)}>Add to Favorites</a>} */}
                                {favChecker(book.id) ?
                                    <div>
                                    <button className="btn btn-primary" onClick={() => removeFromFav(book.id)}>Remove from Favourites</button>
                                    <button className="btn btn-primary" onClick={() => addToCart(book)}>Add to Cart</button> </div>
                                    :
                                    <div>
                                    <button className="btn btn-primary" onClick={() => addToFav(book)}>Add to Favourites</button>
                                    <button className="btn btn-primary" onClick={() => addToCart(book)}>Add to Cart</button>
                                    </div>
                                }
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Booklist