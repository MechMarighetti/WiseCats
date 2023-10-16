import React, { useEffect, useState } from 'react';
import { getQuote } from '../services/getQuote';
import { getCat } from '../services/getCat';

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

    const fetchQuote = async () => {
        setError(null);
        setCat(null);
        setQuote(null);
        try {
            setLoading(true);
            const quotes = await getQuote();
            setQuote(quotes);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    };

    const fetchCat = async () => {
        setError(null)
        setCat(null);
        setQuote(null);
        try {
            setLoading(true)
            const cats = await getCat();
            setCat(cats);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
        fetchCat();
    }, []);

    return {
        quote,
        cat,
        error,
        loading,
        fetchQuote,
        fetchCat
    }
};

export { useFetch }