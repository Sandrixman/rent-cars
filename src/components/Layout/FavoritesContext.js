import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
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

    const toggleFavorites = car => {
        setFavorites(car);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                toggleFavorites,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
