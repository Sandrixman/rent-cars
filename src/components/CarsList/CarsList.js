import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { CarsApi } from 'utils/CarsApi/CarsApi';
import CarCard from 'components/CarCard/CarCard';
import * as SC from './CarsList.styled';

const CarsList = ({ filteredCars }) => {
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const { data } = await CarsApi.getCars(page);
                setCars(prevState => [...prevState, ...data]);
            } catch (error) {
                console.error('Server error', error);
            }
        };
        fetchCars();
    }, [page]);

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <>
            {!filteredCars && (
                <SC.CarsSection>
                    <SC.CarsWrapper>
                        {cars.map(car => (
                            <CarCard key={car.id} currentCar={car} />
                        ))}
                    </SC.CarsWrapper>
                    <Button
                        onClick={loadMore}
                        sx={{
                            width: 160,
                            margin: 5,
                            borderRadius: 4,
                            fontSize: 20,
                            textTransform: 'capitalize',
                        }}
                    >
                        Load more
                    </Button>
                </SC.CarsSection>
            )}
            {filteredCars && (
                <SC.CarsSection>
                    <SC.CarsWrapper>
                        {filteredCars.map(car => (
                            <CarCard key={car.id} currentCar={car} />
                        ))}
                    </SC.CarsWrapper>
                </SC.CarsSection>
            )}
        </>
    );
};

export default CarsList;
