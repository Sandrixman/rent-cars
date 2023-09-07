import CarCard from 'components/CarCard/CarCard';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import * as SC from './CarsList.styled';

const CarsList = ({ cars }) => {
    const theme = useTheme();

    return (
        <>
            {cars && (
                <Box
                    sx={{
                        backgroundColor:
                            theme.palette.mode === 'dark'
                                ? 'rgba(0, 0, 0, 0.87)'
                                : 'transparent',
                        color: theme.palette.mode === 'dark' ? '#ccc' : '#000',
                    }}
                >
                    <SC.Section>
                        {cars.map(car => (
                            <CarCard key={car.id} currentCar={car} />
                        ))}
                    </SC.Section>
                </Box>
            )}
        </>
    );
};

export default CarsList;
