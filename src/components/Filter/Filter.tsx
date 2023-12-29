import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import useCarsApi from 'hooks/useCarsApi';
import SelectDropdown from './SelectDropdown/SelectDropdown';
import FilterBtn from './FilterBtn/FilterBtn';
import { Car, ISelectDropdown, IFilterSelected } from 'components/App/App.types';
import { MultiValue, SingleValue } from 'react-select';
import * as SC from './Filter.styled';

interface IFilterProps {
    setFilteredCars: Dispatch<SetStateAction<Car[]>>;
}

const Filter: React.FC<IFilterProps> = ({ setFilteredCars }) => {
    const { allCars } = useCarsApi();
    console.log('Filter');

    const [filterSelected, setFilterSelected] = useState<IFilterSelected | null>(null);
    const [filteredBrend, setFilteredBrend] = useState<ISelectDropdown>();
    const [filteredPrice, setFilteredPrice] = useState<ISelectDropdown>();
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');

    // Filtering with all selected values
    useEffect(() => {
        if (filterSelected) {
            let filter = [...allCars];
            if (filterSelected.car) {
                filter = filter.filter(({ make }) => make === filterSelected.car);
            }
            if (filterSelected.price) {
                const price = parseFloat(filterSelected.price.toString());
                filter = filter.filter(
                    ({ rentalPrice }) => parseFloat(rentalPrice.slice(1)) <= price
                );
            }
            if (filterSelected.minMileage) {
                filter = filter.filter(
                    ({ mileage }) => mileage > parseFloat(filterSelected.minMileage)
                );
            }
            if (filterSelected.maxMileage) {
                filter = filter.filter(
                    ({ mileage }) => mileage < parseFloat(filterSelected.maxMileage)
                );
            }

            setFilteredCars(filter);
        }
    }, [allCars, filterSelected, setFilteredCars]);

    const handleSelectBrend = (
        selected: SingleValue<ISelectDropdown> | MultiValue<ISelectDropdown>
    ) => {
        if (typeof selected !== 'undefined') {
            setFilteredBrend(selected as ISelectDropdown);
        }
    };

    const handleSelectPrice = (
        selected: SingleValue<ISelectDropdown> | MultiValue<ISelectDropdown>
    ) => {
        if (typeof selected !== 'undefined') {
            setFilteredPrice(selected as ISelectDropdown);
        }
    };

    const onFilter = () => {
        setFilterSelected({
            car: filteredBrend?.value,
            price: filteredPrice?.value,
            minMileage: minMileage,
            maxMileage: maxMileage,
        });
        setMinMileage('');
        setMaxMileage('');
    };

    // Car brend for SelectDropdown
    const uniqueBrand: string[] = allCars
        .map(car => car.make)
        .filter((value, index, self) => self.indexOf(value) === index);
    const brendOptions: ISelectDropdown[] = uniqueBrand.map(brend => ({
        value: brend,
        label: brend,
    }));

    // Prices for SelectDropdown
    const prices = allCars.map(car => parseFloat(car.rentalPrice.slice(1)));
    const priceOptions = [];
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    for (let i = minPrice; i <= maxPrice; i += 10) {
        priceOptions.push({
            value: Math.round(i / 10) * 10,
            label: Math.round(i / 10) * 10,
        });
    }

    return (
        <>
            {allCars && (
                <SC.FilterConteiner>
                    <div>
                        <SC.Label>Car brand</SC.Label>
                        <SelectDropdown
                            options={brendOptions}
                            placeholder="Choose car"
                            onChange={handleSelectBrend}
                        />
                    </div>
                    <div>
                        <SC.Label>Price/ 1 hour</SC.Label>
                        <SelectDropdown
                            options={priceOptions}
                            placeholder="To $"
                            onChange={handleSelectPrice}
                        />
                    </div>
                    <div>
                        <SC.Label htmlFor="mileage">Сar mileage / km</SC.Label>
                        <SC.InputWrapper>
                            <SC.Input
                                id="mileage"
                                placeholder="From"
                                value={minMileage}
                                onChange={event => setMinMileage(event.target.value)}
                            />
                            <SC.Separator />
                            <SC.Input
                                placeholder="To"
                                value={maxMileage}
                                onChange={event => setMaxMileage(event.target.value)}
                            />
                        </SC.InputWrapper>
                    </div>
                    <FilterBtn onFilter={onFilter} />
                </SC.FilterConteiner>
            )}
        </>
    );
};

export default Filter;
