import {createContext,useContext, useState} from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) 
    {throw new Error ('Context undefined')}
     return context;
}

const AppContextProvider = (children) => {

    const [favourites, setFavourites] = useState([])

    
    const addToFav = (book) => {
        const oldFav = [...favourites]
        const newFav = oldFav.concat(book)
        setFavourites(newFav)
    }

    const removeFromFav = (id) => {
        const oldFav = [...favourites]
        const newFav = oldFav.filter( (book) => book.id !== id)
        setFavourites(newFav)
    }

    return (
        <AppContext.Provider value={{favourites, addToFav, removeFromFav}}>
            {children}
        </AppContext.Provider>
    )
};


export default AppContextProvider
