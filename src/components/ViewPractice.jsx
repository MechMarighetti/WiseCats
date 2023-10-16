import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { getCat } from '../services/getCat';
import { getQuote } from '../services/getQuote';

const ViewPractice = () => {
    const {data: cat, error: catError, loading: catLoading, fetchData: fetchCat} = useFetch(getCat);
    const {data: quote, error: quoteError, loading: quoteLoading, fetchData: fetchQuote} = useFetch(getQuote);
    const handleCats = () => {
        fetchCat();
        fetchQuote();
    };

    return (
        <div>
            <section> {/* Loader */}
                {(catLoading && quoteLoading) && <h1>Cargando data...</h1>}
            </section>
            <section> {/* Cat image section */}
                {catError && <p>{`${catError.message}: ${catError.code}`}</p>}
                {!catError && (<img src={cat?.url} alt="Gatito" width={cat?.width} height={cat?.heigth}/>)}
            </section>
            <section> {/* Quote section */}
                {quoteError && <p>{`${catError.message}: ${catError.code}`}</p>}
                {!quoteError && (
                    <>
                        <h2>{quote?.content}</h2>
                        <p>{quote?.author}</p>
                        {quote.tags?.map((e, index) => <a key={index} href="#">{e}</a>)}
                    </>
                )}
            </section>
            
            <button onClick={handleCats}>+</button>
        </div>
    );
};

export { ViewPractice };