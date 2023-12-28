import { useTheme } from '@mui/material/styles';
import { Car } from 'components/App/App.types';
import * as SC from './RentalCar.styled';

interface IRentalCarProps {
    currentCar: Car;
    city: string | undefined;
    country: string | undefined;
}
const RentalCar = ({ currentCar, city, country }: IRentalCarProps) => {
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
        fuelConsumption,
        engineSize,
    } = currentCar;

    const combinedAccessories = accessories.join(' | ');
    const combinedFunctionalities = functionalities.join(' | ');
    const arrayConditions = rentalConditions.split('\n');

    const theme = useTheme();

    function makePhoneCall() {
        const telUrl = 'tel:+380730000000';

        window.location.href = telUrl;
    }

    const themeColorStyles = {
        color: theme.palette.mode === 'dark' ? '#ffffff80' : '#12141780',
    };

    return (
        <>
            <SC.Image src={img} alt="Car's foto" />
            <SC.InfoWrapper>
                <SC.Title>
                    <div>{make}</div>
                    <SC.Span>{model},</SC.Span>
                    <div>{year}</div>
                </SC.Title>
                <SC.AdditionalInfo sx={themeColorStyles}>
                    <span>{city}</span>|<span>{country}</span>|
                    <span>Year: {year}</span>|<span>Type: {type}</span>|
                    <span>Id: {id}</span>|<span>{rentalCompany}</span>|
                </SC.AdditionalInfo>
                <SC.AdditionalInfo sx={themeColorStyles}>
                    <span>Fuel Consumption: {fuelConsumption}</span>|
                    <span>Engine Size: {engineSize}</span>
                </SC.AdditionalInfo>
                <SC.Descr>{description}</SC.Descr>
            </SC.InfoWrapper>
            <SC.InfoWrapper>
                <SC.InfoTitle>Accessories and functionalities:</SC.InfoTitle>
                <SC.AdditionalInfo sx={themeColorStyles}>
                    <span>{combinedAccessories}</span>
                </SC.AdditionalInfo>
                <SC.AdditionalInfo sx={themeColorStyles}>
                    <span>{combinedFunctionalities}</span>
                </SC.AdditionalInfo>
            </SC.InfoWrapper>
            <SC.InfoWrapper>
                <SC.InfoTitle>Rental Conditions:</SC.InfoTitle>
                <SC.ConditionsWrapper>
                    <SC.Conditions>{arrayConditions[0]}</SC.Conditions>
                    <SC.Conditions>{arrayConditions[1]}</SC.Conditions>
                    <SC.Conditions>{arrayConditions[2]}</SC.Conditions>
                    <SC.Conditions>
                        Mileage: <SC.Span>{mileage}</SC.Span>
                    </SC.Conditions>
                    <SC.Conditions>
                        Price: <SC.Span>{rentalPrice}</SC.Span>
                    </SC.Conditions>
                </SC.ConditionsWrapper>
            </SC.InfoWrapper>
            <SC.RentalCarButton
                type="button"
                onClick={makePhoneCall}
                variant="contained"
            >
                Rental car
            </SC.RentalCarButton>
        </>
    );
};

export default RentalCar;
