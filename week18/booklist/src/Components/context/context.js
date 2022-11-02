import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) { throw new Error('Context undefined') }
    return context;
}

//the children was not inside {}
const AppContextProvider = ({children}) => {

    const [favourites, setFavourites] = useState([])
    const [price, setPrice] = useState(0)
    const [booksInCart, setBooksInCart] = useState([]);

    const addToFav = (book) => {
        const oldFav = [...favourites]
        const newFav = oldFav.concat(book)
        setFavourites(newFav)
    }

    const removeFromFav = (id) => {
        const oldFav = [...favourites]
        const newFav = oldFav.filter((book) => book.id !== id)
        setFavourites(newFav)
        console.log(newFav)
    }

    const addToCart = (book) => {
        const total = price + 50;
        setPrice(total);
        let isInCart = booksInCart.find(b => b.id === book.id);
        let newCart = [...booksInCart];

        if (!isInCart) {
            isInCart = { ...book, quantity: 1 }
            newCart.push(isInCart)
        } else {
            isInCart.quantity++;
        }

        setBooksInCart(newCart)
    }
    return (
        <AppContext.Provider value={{ favourites, addToFav, removeFromFav, addToCart }}>
            {children}
        </AppContext.Provider>
    )
};


export default AppContextProvider
