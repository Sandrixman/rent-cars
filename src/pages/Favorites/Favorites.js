import { useFavorites } from 'components/Layout/FavoritesContext';
import CarCard from 'components/CarCard/CarCard';
import * as SC from './Favorites.styled';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <SC.CarsWrapper>
            {favorites.map(car => (
                <CarCard key={car.id} currentCar={car} />
            ))}
        </SC.CarsWrapper>
    );
};

export default Favorites;
