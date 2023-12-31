import { useTheme } from '@mui/material/styles';
import { useToggleModal, useFavoritesContext } from 'hooks';
import { Modal, RentalCar } from 'components';
import { Car } from 'components/App/App.types';
import * as SC from './CarCard.styled';

interface CarCardProps {
    currentCar: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ currentCar }) => {
    const { showModal, onToggleModal } = useToggleModal();
    const { favorites, setFavorites } = useFavoritesContext();

    const theme = useTheme();

    const { _id, img, make, model, year, rentalPrice, rentalCompany, type, address, accessories } =
        currentCar;

    const isFavorite = favorites.some(favorite => favorite._id === _id);

    const moveFavorite = () => {
        const newFavorites = isFavorite
            ? favorites.filter(favorite => favorite._id !== _id)
            : [...favorites, currentCar];

        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    // searching city and country in adress
    const match = address.match(/[^,]+,\s*([^,]+),\s*(.*)/);
    const city = match ? match[1] : undefined;
    const country = match ? match[2] : undefined;

    return (
        <SC.Card key={_id}>
            <SC.Image src={img} alt="Car's foto" />
            {isFavorite ? (
                <SC.ChosenHeart size={24} onClick={moveFavorite} />
            ) : (
                <SC.EmptyHeart size={24} onClick={moveFavorite} />
            )}
            <SC.MainInfo>
                <SC.DescWrapper>
                    <div>{make}</div>
                    <div>{model},</div>
                    <div>{year}</div>
                </SC.DescWrapper>
                <div>{rentalPrice}</div>
            </SC.MainInfo>
            <SC.AdditionalInfo
                sx={{
                    color: theme.palette.mode === 'dark' ? '#ffffff80' : '#12141780',
                }}
            >
                <span>{city}</span>|<span>{country}</span>|<span>{rentalCompany}</span>|
                <span>{type}</span>|<span>{accessories[0]}</span>
            </SC.AdditionalInfo>
            <SC.LearnMoreButton type="button" onClick={onToggleModal} variant="contained">
                Learn more
            </SC.LearnMoreButton>
            {showModal && (
                <Modal onToggleModal={onToggleModal}>
                    <RentalCar currentCar={currentCar} city={city} country={country} />
                </Modal>
            )}
        </SC.Card>
    );
};
