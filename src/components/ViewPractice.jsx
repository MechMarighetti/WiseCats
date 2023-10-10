import React, { useEffect, useState } from 'react'
import catAdapter from '../adapters/catAdapter'
import getCat from '../services/getCat'
import getQuote from '../services/getQuote'
import quotesAdapter from '../adapters/quotesAdapter'


const ViewPractice = () => {

    const [quote, setQuote] = useState(
        {   id:'',
            content:"",
            author:"",
            tags:[]
        }
    )
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cat, setCat]=useState(
        {
            id:'',
            url:'',
            width:'',
            heigth:'',
        }
    )

    const fetchQuote = async () => {
        setError(null)
        try {
            setLoading(true);
            //obtener quote en forma de Json del servicio y guardarlo en la const quotes
            const quotes = await getQuote();
            //pasar el Json obtenido de la API al adaptador para desestructurarlo y guardar el resultado 
            //en la constante quotesAdapted
            const quotesAdapted = quotesAdapter(quotes);
            //renderizar la quote adaptada
            setQuote(quotesAdapted);
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    
    const fetchCat = async () => {
        setError(null)
        try {
            setLoading(true)
            //obtener michi en forma de Json del servicio y guardarlo en la const cats 
            const cats = await getCat();
            //pasar el Json obtenido de la API al adaptador para desestructurarlo y guardar el resultado 
            //en la constante catAdapted
            const catAdapted = catAdapter(cats);
            //renderizar el michi adaptado
            setCat(catAdapted);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    
useEffect(()=>{

fetchQuote();
fetchCat();
}, [])

const handleCats = () => {
    fetchQuote();
    fetchCat();
}

  return (
    <div>
         {loading && <h1>Cargando data</h1>}
      {error && <h1>{error}</h1>}
        <img src={cat.url} alt="Gatito" width={cat.width} height={cat.heigth}/>
        <h2>{quote.content}</h2>
        <p>{quote.author}</p>
        {quote.tags.map((e, index) => (
            <a key={index} href="#">{e}
            </a>
        )
        )}
        <button onClick={handleCats}>+</button>
    </div>
  )
}

export default ViewPractice