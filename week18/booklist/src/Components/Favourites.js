import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/context';

const Favourites = () => {
    console.log("Loading favourites list")
    const { favourites, addToFav, removeFromFav } = useAppContext()
    console.log(favourites)

    const favChecker = (id) => {
        const boolean = favourites.some((book) => book.id === id)
        return boolean
    }

    return (
        <div>
            <h1>Favourites</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                    {favourites.length > 0 ? favourites.map((book) =>
                        <div className="card" style={{ width: 18 + 'rem' }} key={book.id}>
                            <img src={book.image_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                {/* { <p className="card-text">{book.description}</p> } */}
                                {/* { <a href="#" className="btn btn-primary" 
                            onClick={()=> addToFavourites(book)}>Add to Favorites</a>} */}
                                {favChecker(book.id) ?
                                    <button className="btn btn-primary" onClick={() => removeFromFav(favourites.id)}>Remove from Favourites</button>
                                    :
                                    <button className="btn btn-primary" onClick={() => addToFav(favourites)}>Add to Favourites</button>
                                }
                            </div>
                        </div>
                    ) : <h1>You dont have any favs yet</h1>}
            </div>
        </div>
    )
}

export default Favourites