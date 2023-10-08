import React, { useState } from 'react'
import { useEffect } from 'react'
/* Esta es la vista del Componente. Aquí deben verse los datos de las dos apis elegidas. 
Igualmente seguiremos la clase por aquí y luego sepaararemos en helpers, adapters, etc.*/
const View = () => {
  const [error, setError]= useState(null)
  const [loading, setLoading]= useState(false)
const [quote, setQuote] = useState(
  {
    content: "",
    author:"",
    tags:[""]

  }
)

  useEffect(() => {
    //ASYNC AWAIT
const fetchData = async () => {
  setError(null)
  try {
    setLoading(true);
    const endpoint = 'https://api.quotable.io/random'
    const response = await fetch(endpoint)
    if (!response.ok) throw new Error('Aca paso algo, aca no esta todo bien')
    const data = await response.json();
    console.log(data)
    setQuote(data)
    setLoading(false)
  } catch (error) {
    console.log(error)
    setError('ASI NO SE PUEDE LOCO')
  }
}
fetchData();


   


//THEN FINALLY
    /* const endpoint = "https://api.quotable.io/random"
    const response = fetch(endpoint).then((response) => response.json()).then((data) => console.log(data)).catch((err) => console.log(err)); */
  }, [])


  return (
    <div>

      {loading && <h1>Cargando data</h1>}
      {error && <h1>{error}</h1>}
      <h2>{quote.content}</h2>
      <p>{quote.author}</p>
      <a href="#">{quote.tags[0]}</a>
    </div>
  )
}

export default View