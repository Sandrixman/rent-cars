import axios from 'axios';

const BASE_URL = 'https://nodejs-homework-rest-api-7or0.onrender.com/cars';

const getCars = (page: number) => {
    return axios({
        url: BASE_URL,
        params: {
            limit: 8,
            page,
        },
    });
};

const getAllCars = () => {
    return axios({
        url: BASE_URL,
    });
};

export const CarsApi = { getCars, getAllCars };
