import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const useFavoritesContext = () => {
    return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
