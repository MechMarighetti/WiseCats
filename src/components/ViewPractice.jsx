import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const ViewPractice = () => {
    const {quote, cat, error, loading, fetchQuote, fetchCat} = useFetch();
    const handleCats = () => {
        fetchQuote();
        fetchCat();
    };

    return (
        <div>
            {loading && <h1>Cargando data</h1>}
            {error && <p>{`${error.message}: ${error.code}`}</p>}
            {!error && (
                    <>
                        <img src={cat?.url} alt="Gatito" width={cat?.width} height={cat?.heigth}/>
                        <h2>{quote?.content}</h2>
                        <p>{quote?.author}</p>
                        {quote?.tags.map((e, index) => (
                            <a key={index} href="#">{e}
                            </a>
                        ))}
                    </>
                )}
            <button onClick={handleCats}>+</button>
        </div>
    );
};

export { ViewPractice };