import { Modal } from 'components/Modal/Modal';
import { useTheme } from '@emotion/react';
import useToggleModal from 'hooks/useToggleModal';
import RentalCar from 'components/RentalCar/RentalCar';
import * as SC from './CarCard.styled';

const CarCard = ({ currentCar }) => {
    const theme = useTheme();
    const { showModal, onToggleModal } = useToggleModal();

    const { id, img, make, model, year, rentalPrice, rentalCompany, type } =
        currentCar;

    return (
        <SC.Card key={id}>
            <SC.Image src={img} alt="Car's foto" />
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
                <span>{rentalCompany}</span>|<span>{type}</span>|
                <span>{id}</span>|<span>Power liftgate</span>
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
                    <RentalCar close={onToggleModal} currentCar={currentCar} />
                </Modal>
            )}
        </SC.Card>
    );
};

export default CarCard;
