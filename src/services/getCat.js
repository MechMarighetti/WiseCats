import axios from 'axios';
import { catAdapter } from '../adapters/catAdapter';

export const getCat = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    return catAdapter(response.data);
};