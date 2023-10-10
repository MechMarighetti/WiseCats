export default async function getCat () {
    const endpoint = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(endpoint)
    if(!response.ok){ throw new Error('aca no hay un gato, hay un error')}
    console.log('response', response);
    const data = await response.json();
    return data
}