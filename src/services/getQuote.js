import React, {useState} from 'react'

const getQuote = async () => {
    const [quote, setQuote] = useState(
        {   id:'',
            content:"",
            author:"",
            tags:[]
        }
    )
    /* const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false) */

        try {
            const endpoint = 'https://api.quotable.io/random';
            const response = await fetch(endpoint)
            if(!response.ok){ throw new Error('aca hay un error')}
            console.log('response', response);
            const data = await response.json();
            console.log(data)
            const quote={
                id:data._id,
                content:data.content,
                author:data.author,
                tags: data.tags, 
            }
            console.log(quote)
            return quote
        } catch (error) {
            console.log(error)
        } 
    }


export default getQuote