export default function quotesAdapter (quote) {
    return({
    id:quote._id,
    content:quote.content,
    author:quote.author,
    tags: quote.tags, 
    })
}