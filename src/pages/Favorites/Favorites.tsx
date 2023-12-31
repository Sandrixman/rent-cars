import { useFavoritesContext } from 'hooks/useFavoritesContext';
import { CarCard } from 'components';
import * as SC from './Favorites.styled';

const Favorites = () => {
    const { favorites } = useFavoritesContext();

    return (
        <SC.CarsWrapper>
            {favorites.map(car => (
                <CarCard key={car._id} currentCar={car} />
            ))}
        </SC.CarsWrapper>
    );
};

export default Favorites;
