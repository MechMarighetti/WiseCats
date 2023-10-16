import axios from 'axios';

export const getApiData = async (apiURL) => {
    // const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const response = await axios.get(apiURL);
    return response;
};