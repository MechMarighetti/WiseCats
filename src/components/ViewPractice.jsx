import React, { useEffect, useState } from 'react'

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
            const endpoint = 'https://api.quotable.io/random';
            const response = await fetch(endpoint)
            if(!response.ok){ throw new Error('aca hay un error')}
            console.log('response', response);
            const data = await response.json();
            console.log(data)
            setQuote({
                id:data._id,
                content:data.content,
                author:data.author,
                tags: data.tags, 
            })
            
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
            const endpoint = 'https://api.thecatapi.com/v1/images/search';
            const response = await fetch(endpoint)
            if(!response.ok){ throw new Error('aca no hay un gato, hay un error')}
            console.log('response', response);
            const data = await response.json();
            console.log(data)
            setCat({
                 id:data[0].id,
                url:data[0].url,
                width: '600px',
                heigth: '500px',
            })
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