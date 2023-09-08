import Select from 'react-select';
import * as SC from './Filter.styled';

const Filter = ({ cars, setSelectedCar }) => {
    const uniqueBrand = [...new Set(cars.map(car => car.make))];

    const brendOptions = uniqueBrand.map(brend => ({
        value: brend,
        label: brend,
    }));

    const handleSelectChange = selected => {
        setSelectedCar(selected);
    };

    const colourStyles = {
        control: styles => ({
            ...styles,
            minWidth: 160,
            backgroundColor: '#F7F7FB',
            height: 40,
            paddingLeft: 14,
            marginTop: 8,
            borderRadius: 14,
            border: 'none',
        }),
    };

    return (
        <>
            {cars && (
                <SC.FilterConteiner>
                    <div>
                        <SC.Label>Car brand</SC.Label>
                        <Select
                            options={brendOptions}
                            placeholder="Choose car"
                            isClearable={true}
                            onChange={handleSelectChange}
                            styles={colourStyles}
                        />
                    </div>
                    <div>
                        <SC.Label>Price/ 1 hour</SC.Label>
                        <Select
                            options={brendOptions}
                            placeholder="To $"
                            isClearable={true}
                            onChange={handleSelectChange}
                            styles={colourStyles}
                        />
                    </div>
                    <div>
                        <SC.Label htmlFor="mileage">Сar mileage / km</SC.Label>
                        <SC.InputWrapper>
                            <SC.Input
                                id="mileage"
                                options={brendOptions}
                                placeholder="From"
                                onChange={handleSelectChange}
                            />
                            <SC.Separator />
                            <SC.Input
                                options={brendOptions}
                                placeholder="To"
                                onChange={handleSelectChange}
                            />
                        </SC.InputWrapper>
                    </div>
                    <SC.FilterBtn variant="contained">Search</SC.FilterBtn>
                </SC.FilterConteiner>
            )}
        </>
    );
};

export default Filter;
