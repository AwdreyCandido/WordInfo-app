const wordContainer = document.querySelector('.palavras-container')
const btn = document.querySelector('.botao')

let word = "";

const renderCard = (wordInfo)=>{

    let word = wordInfo.word;
    let meaning_1 = wordInfo.meanings[0].definitions[0].definition;
    let meaning_2 = wordInfo.meanings[0].definitions[1].definition || 'No more information';
    let phonetic = wordInfo.phonetic;

    let cartaoHtml = `
    <figure class="cartao">
    <div class="nome-palavra"><span class="focus"> ${word}</span></div>
        <div class="significado"> <strong>Definitions</strong>: ${meaning_1}</div>
        <div class="significado">${meaning_2}</div>
        <div class="pronunciacao"><strong>Pronunciation</strong>: ${phonetic}</div>
    </figure>
    `

    wordContainer.innerHTML = cartaoHtml
}

btn.addEventListener('click', ()=>{

    word = document.querySelector('.input').value

    const getData = async function(word){
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const [wordInfo] = await response.json()
            renderCard(wordInfo)
        } catch (error) {
            console.log(error)
        }
    }
    getData(word)
    
})

