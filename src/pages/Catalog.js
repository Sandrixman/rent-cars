import axios from 'axios';
import { useEffect, useState } from 'react';
import CarsList from 'components/CarsList/CarsList';

const Catalog = () => {
    const [cars, setCars] = useState();

    useEffect(() => {
        const getCars = async () => {
            try {
                const { data } = await axios.get(
                    'https://64f8af5a824680fd217fef4a.mockapi.io/cars'
                );
                setCars(data);
            } catch (error) {
                throw error;
            }
        };
        getCars();
    }, []);

    return <CarsList cars={cars} />;
};

export default Catalog;
