import axios from 'axios';
import { quotesAdapter } from '../adapters/quotesAdapter';

export const getQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    return quotesAdapter(response.data);
};