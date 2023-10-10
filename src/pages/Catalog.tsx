import { useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
    const [filteredCars, setFilteredCars] = useState([]);

    return (
        <>
            <Filter setFilteredCars={setFilteredCars} />
            <CarsList filteredCars={filteredCars} />
        </>
    );
};

export default Catalog;
