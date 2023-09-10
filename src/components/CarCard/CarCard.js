import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Modal } from 'components/Modal/Modal';
import { useFavorites } from 'components/Layout/FavoritesContext';
import useToggleModal from 'hooks/useToggleModal';
import RentalCar from 'components/RentalCar/RentalCar';
import * as SC from './CarCard.styled';

const CarCard = ({ currentCar }) => {
    const { favorites, toggleFavorites } = useFavorites();

    const [isFavorite, setIsFavorite] = useState(false);

    const { showModal, onToggleModal } = useToggleModal();

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

    const localStorageKey = `isFavorite_${id}`;

    useEffect(() => {
        const savedIsFavorite = localStorage.getItem(localStorageKey);
        if (savedIsFavorite) {
            setIsFavorite(JSON.parse(savedIsFavorite));
        }
    }, [localStorageKey]);

    const moveFavorite = () => {
        if (favorites.length !== 0) {
            // check if current card is already in favorites
            if (!favorites.some(obj => obj.id === currentCar.id)) {
                const newFavorites = [...favorites, currentCar];
                setIsFavorite(true);
                toggleFavorites(newFavorites);
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(!isFavorite)
                );
            } else {
                const newFavorites = favorites.filter(
                    obj => obj.id !== currentCar.id
                );
                toggleFavorites(newFavorites);
                setIsFavorite(false);
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(!isFavorite)
                );
            }
        } else {
            const newFavorites = [currentCar];
            toggleFavorites(newFavorites);
            setIsFavorite(true);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            localStorage.setItem(localStorageKey, JSON.stringify(!isFavorite));
        }
    };

    // searching city and country in adress
    const match = address.match(/[^,]+,\s*([^,]+),\s*(.*)/);
    const city = match[1];
    const country = match[2];

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
            <SC.RentalCarButton
                type="button"
                onClick={onToggleModal}
                variant="contained"
            >
                Learn more
            </SC.RentalCarButton>
            {showModal && (
                <Modal onToggleModal={onToggleModal}>
                    <RentalCar
                        close={onToggleModal}
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
