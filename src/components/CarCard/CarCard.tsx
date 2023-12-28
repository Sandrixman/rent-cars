import { useTheme } from '@mui/material/styles';
import { Modal } from 'components/Modal/Modal';
import { useFavoritesContext } from 'hooks/useFavoritesContext';
import useToggleModal from 'hooks/useToggleModal';
import RentalCar from 'components/RentalCar/RentalCar';
import { Car } from 'components/App/App.types';
import * as SC from './CarCard.styled';

interface CarCardProps {
    currentCar: Car;
}
const CarCard = ({ currentCar }: CarCardProps) => {
    const { showModal, onToggleModal } = useToggleModal();
    const { favorites, setFavorites } = useFavoritesContext();

    const theme = useTheme();

    const {
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        rentalCompany,
        type,
        address,
        accessories,
    } = currentCar;

    const isFavorite = favorites.some(favorite => favorite.id === id);

    const moveFavorite = () => {
        if (isFavorite) {
            const newFavorites = favorites.filter(
                favorite => favorite.id !== id
            );
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            const newFavorites = [...favorites, currentCar];
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
    };

    // searching city and country in adress
    const match = address.match(/[^,]+,\s*([^,]+),\s*(.*)/);
    const city = match ? match[1] : undefined;
    const country = match ? match[2] : undefined;

    return (
        <SC.Card key={id}>
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
                    color:
                        theme.palette.mode === 'dark'
                            ? '#ffffff80'
                            : '#12141780',
                }}
            >
                <span>{city}</span>|<span>{country}</span>|
                <span>{rentalCompany}</span>|<span>{type}</span>|
                <span>{id}</span>|<span>{accessories[0]}</span>
            </SC.AdditionalInfo>
            <SC.LearnMoreButton
                type="button"
                onClick={onToggleModal}
                variant="contained"
            >
                Learn more
            </SC.LearnMoreButton>
            {showModal && (
                <Modal onToggleModal={onToggleModal}>
                    <RentalCar
                        currentCar={currentCar}
                        city={city}
                        country={country}
                    />
                </Modal>
            )}
        </SC.Card>
    );
};

export default CarCard;
