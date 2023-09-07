import axios from 'axios';

const CarsApi = async () => {
    const { data } = await axios.get(
        'https://64f8af5a824680fd217fef4a.mockapi.io/cars'
    );
    return data;
};

export default CarsApi;
