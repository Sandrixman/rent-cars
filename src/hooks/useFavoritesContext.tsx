import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Car } from 'components/App/App.types';

interface ChildrenProps {
    children: ReactNode;
}

interface FavoritesContextProps {
    favorites: Car[];
    setFavorites: Dispatch<SetStateAction<Car[]>>;
}

const FavoritesContext = createContext<FavoritesContextProps | null>(null);

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (context === null) {
        throw new Error('context is null');
    }
    return context;
};

export const FavoritesProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<Car[]>([]);

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
