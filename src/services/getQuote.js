export default async function getQuote () {
    const endpoint = 'https://api.quotable.io/random';
    const response = await fetch(endpoint)
    if(!response.ok){ throw new Error('aca hay un error')}
    console.log('response', response);
    const data = await response.json();
    console.log(data)
    return data
}