import axios from 'axios';
import { useState, useEffect } from 'react';
import { Car } from 'components/App/App.types';

const BASE_URL = 'https://nodejs-homework-rest-api-7or0.onrender.com/cars';

const useCarsApi = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [allCars, setAllCars] = useState<Car[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const getCars = async (page: number) => {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    limit: 8,
                    page,
                },
            });
            setCars(prevState => [...prevState, ...response.data]);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    const getAllCars = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setAllCars(response.data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
  };


    const loadMore = () => {
      setPage(prevState => prevState + 1);
    };

    useEffect(() => {
        getCars(page);
    }, [page]);

    return { cars, allCars, loading, error, getCars, getAllCars, loadMore };
};

export default useCarsApi;
