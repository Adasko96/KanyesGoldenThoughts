const url = 'https://api.kanye.rest/'
const button = document.querySelector('.quoteBtn')
const quote = document.querySelector('.quote')

let request = new XMLHttpRequest()
request.open('GET', url)
request.send()
request.onload = () => {

    const kanyesQuoteData = JSON.parse(request.response)
    const quoteText = kanyesQuoteData.quote

    quote.textContent = quoteText

}

button.addEventListener('click', () => {
    
})