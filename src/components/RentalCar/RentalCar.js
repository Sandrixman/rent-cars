import * as SC from './RentalCar.styled';

const RentalCar = ({ currentCar }) => {
    const {
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        rentalCompany,
        type,
        description,
        accessories,
        functionalities,
        rentalConditions,
        mileage,
    } = currentCar;

    function makePhoneCall() {
        const telUrl = 'tel:+380730000000';

        window.location.href = telUrl;
    }

    return (
        <>
            <SC.Image src={img} alt="Car's foto" />
            <SC.InfoWrapper>
                <SC.Title>
                    <div>{make}</div>
                    <SC.Span>{model},</SC.Span>
                    <div>{year}</div>
                </SC.Title>
                <SC.AdditionalInfo>
                    <span>{rentalCompany}</span>|<span>{type}</span>|
                    <span>{id}</span>|<span>Power liftgate</span>
                </SC.AdditionalInfo>
                <SC.Descr>{description}</SC.Descr>
            </SC.InfoWrapper>
            <SC.InfoWrapper>
                <div>Accessories and functionalities:</div>
                <div>{accessories}</div>
                <div>{functionalities}</div>
            </SC.InfoWrapper>
            <SC.InfoWrapper>
                <div>Rental Conditions:</div>
                <div>{rentalConditions}</div>
                <div>Mileage: {mileage}</div>
                <div>Price:{rentalPrice}</div>
            </SC.InfoWrapper>
            <SC.RentalCarButton
                type="submit"
                onClick={makePhoneCall}
                variant="contained"
            >
                Rental car
            </SC.RentalCarButton>
        </>
    );
};

export default RentalCar;
