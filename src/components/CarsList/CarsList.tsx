import { Button } from '@mui/material';
import { useCarsApi } from 'hooks';
import { CarCard, Spiner } from 'components';
import { Car } from 'components/App/App.types';
import * as SC from './CarsList.styled';

export const CarsList: React.FC<{ filteredCars: Car[] }> = ({ filteredCars }) => {
    const { cars, loading, error, loadMore } = useCarsApi();

    if (loading) {
        return (
            <SC.LoadingSection>
                <p>Please wait about 30 seconds for the backend to come out of sleep mode...</p>
                <Spiner />
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
                            <CarCard key={car._id} currentCar={car} />
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
                        <CarCard key={car._id} currentCar={car} />
                    ))}
                </SC.CarsWrapper>
            )}
        </SC.CarsSection>
    );
};
