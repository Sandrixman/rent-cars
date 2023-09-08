import { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedCar, setSelectedCar] = useState(null);
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        if (selectedCar) {
            const filter = cars.filter(item => item.make === selectedCar.value);
            setFilteredCars(filter);
        } else {
            setFilteredCars(cars);
        }
    }, [setFilteredCars, cars, selectedCar]);

    return (
        <>
            <Filter cars={cars} setSelectedCar={setSelectedCar} />
            <CarsList
                cars={filteredCars}
                page={page}
                setCars={setCars}
                setPage={setPage}
            />
        </>
    );
};

export default Catalog;
