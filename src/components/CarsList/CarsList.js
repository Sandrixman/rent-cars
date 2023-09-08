import { useEffect } from 'react';
import { Button } from '@mui/material';
import CarsApi from 'utils/CarsApi/CarsApi';
import CarCard from 'components/CarCard/CarCard';
import * as SC from './CarsList.styled';

const CarsList = ({ cars, setCars, page, setPage }) => {
    useEffect(() => {
        CarsApi(page).then(({ data }) => {
            setCars(prevState => [...prevState, ...data]);
        });
    }, [page, setCars]);

    const loadMore = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <>
            {cars && (
                <>
                    <SC.Section>
                        {cars.map(car => (
                            <CarCard key={car.id} currentCar={car} />
                        ))}
                    </SC.Section>
                    <Button
                        onClick={loadMore}
                        sx={{
                            width: 160,
                            marginTop: 5,
                            borderRadius: 4,
                            fontSize: 20,
                            textTransform: 'capitalize',
                        }}
                    >
                        Load more
                    </Button>
                </>
            )}
        </>
    );
};

export default CarsList;
