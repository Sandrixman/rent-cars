import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { Button } from '@mui/material';
import useCarsApi from 'hooks/useCarsApi';
import CarCard from 'components/CarCard/CarCard';
import { Car } from 'components/App/App.types';
import * as SC from './CarsList.styled';

const CarsList = React.memo(({ filteredCars }: { filteredCars: Car[] }) => {
    const { cars, loading, error, loadMore } = useCarsApi();

    if (loading) {
        return (
            <SC.LoadingSection>
                <p>
                    Please wait about 30 seconds for the backend to come out of
                    sleep mode...
                </p>
                <PulseLoader
                    color="#1976d2"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </SC.LoadingSection>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <SC.CarsSection>
            {filteredCars.length === 0 ? (
                <>
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
                </>
            ) : (
                <SC.CarsWrapper>
                    {filteredCars.map(car => (
                        <CarCard key={car.id} currentCar={car} />
                    ))}
                </SC.CarsWrapper>
            )}
        </SC.CarsSection>
    );
});

export default CarsList;
