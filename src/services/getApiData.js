import axios from 'axios';

export const getApiData = async (apiURL) => {
    const response = await axios.get(apiURL);
    return response.data;
};