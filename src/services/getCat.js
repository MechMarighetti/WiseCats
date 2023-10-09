import { catAdapter } from '../adapters/catAdapter';


const getCat = async () => {
    
    try {
        const endpoint = 'https://api.thecatapi.com/v1/images/search';
        const response = await fetch(endpoint)
        if(!response.ok){ throw new Error('aca no hay un gato, hay un error')}
        const data = await response.json();
        /* console.log(catAdapter(data)) */
                   
            return catAdapter(data);
        } catch (error) {
            console.log(error)
        } 
        
        
        
    }
    
    export default getCat