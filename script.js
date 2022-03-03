const idElement = document.getElementById('id');
const quoteElement = document.getElementById('quote');
const rollBtn = document.getElementById('roll');
// 'https://api.adviceslip.com/advice?t=' + Math.random();

async function getQuote() {
    const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());
    data = await response.json();
    return data.slip;
}

async function showQuote() {
    const quote = await getQuote();
    idElement.innerHTML = '#' + quote.id;
    quoteElement.innerHTML = `"${quote.advice}"`;
    console.log(quote);
}

showQuote();

rollBtn.addEventListener('click', showQuote);
