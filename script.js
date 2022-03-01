const palavrasContainer = document.querySelector('.palavras-container')
const botao = document.querySelector('.botao')

let palavra = "";

const renderizarCartao = (dadosPalavra)=>{

    let significado_2 = dadosPalavra.meanings[0].definitions[1].definition || 'No more information'

    let cartaoHtml = `
    <figure class="cartao">
    <div class="nome-palavra"><span class="focus"> ${dadosPalavra.word}</span></div>
        <div class="significado"> <strong>Definitions</strong>:  ${dadosPalavra.meanings[0].definitions[0].definition}</div>
        <div class="significado">${significado_2}</div>
        <div class="pronunciacao"><strong>Pronunciation</strong>:   ${dadosPalavra.phonetic}</div>
    </figure>
    `

    palavrasContainer.innerHTML = cartaoHtml
}

botao.addEventListener('click', ()=>{

    palavra = document.querySelector('.input').value

    const getData = async function(palavra){
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`)
        const [dadosPalavra] = await response.json()
        renderizarCartao(dadosPalavra)
    }
    getData(palavra)
    
})

