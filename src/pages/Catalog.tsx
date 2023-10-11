import { useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import { Car } from 'components/App/App.types';

const Catalog = () => {
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);

    return (
        <>
            <Filter setFilteredCars={setFilteredCars} />
            <CarsList filteredCars={filteredCars} />
        </>
    );
};

export default Catalog;
