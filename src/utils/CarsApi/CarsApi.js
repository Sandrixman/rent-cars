import axios from 'axios';

const BASE_URL = 'https://64f8af5a824680fd217fef4a.mockapi.io/cars';

const CarsApi = page => {
    return axios({
        url: BASE_URL,
        params: {
            limit: 8,
            page,
        },
    });
};

export default CarsApi;
