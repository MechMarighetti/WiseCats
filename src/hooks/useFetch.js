import React, { useEffect, useState } from 'react';
import { getApiData } from '../services/getApiData';
import { catAdapter } from '../adapters/catAdapter';
import { quotesAdapter } from '../adapters/quotesAdapter';

const API_1 = 'https://api.thecatapi.com/v1/images/search'; // Random image cats
const API_2 = 'https://api.quotable.io/random'; // Random quotes

const useFetch = () => {
    const [quote, setQuote] = useState({   
        id:'',
        content:"",
        author:"",
        tags:[]
    }
    );
    const [cat, setCat] = useState({
            id:'',
            url:'',
            width:'',
            heigth:'',
        }
    );
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCat = async () => {
        setError(null);
        try {
            setLoading(true)
            const catData = await getApiData(API_1);
            const catAdapted = catAdapter(catData);
            setCat(catAdapted);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    };

    const fetchQuote = async () => {
        setError(null);
        try {
            setLoading(true);
            const quoteData = await getApiData(API_2);
            const quoteAdapted = quotesAdapter(quoteData);
            setQuote(quoteAdapted);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCat();
        fetchQuote();
    }, []);

    return {
        quote,
        cat,
        error,
        loading,
        fetchCat,
        fetchQuote
    }
};

export { useFetch }