export default function catAdapter (data) {
    return {
        id:data[0].id,
        url:data[0].url,
        width: '600px',
        heigth: '500px',
    }
}