import axios from 'axios';

const BASE_URL = 'https://64f8af5a824680fd217fef4a.mockapi.io/cars';

const getCars = page => {
    return axios({
        url: BASE_URL,
        params: {
            limit: 8,
            page,
        },
    });
};

const getAllCars = page => {
    return axios({
        url: BASE_URL,
    });
};

export const CarsApi = { getCars, getAllCars };
