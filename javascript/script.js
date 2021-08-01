const resul = (resultado) =>{

    document.getElementById('real').innerHTML = parseFloat(resultado.USDBRL.bid).toFixed(2) * document.getElementById('dolar').value

}


const pesquisarCOT = async()=>{
    
    const url = `https://economia.awesomeapi.com.br/last/USD-BRL`
    const dados = await fetch(url)
    const resultado = await dados.json()

    resul(resultado)

    }



document.getElementById('dolar')
                    .addEventListener('input',pesquisarCOT)


                