import React, { useEffect, useState } from 'react';

const useFetch = (service) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setError(null);
        try {
            setLoading(true);
            const API_data = await service();
            setData(API_data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        error,
        loading,
        fetchData
    }
};

export { useFetch };