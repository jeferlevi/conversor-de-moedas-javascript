const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')




 const convertValues = async () => {
    const moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })
    const dolar = moedas.USDBRL.high
    const Euro = moedas.EURBRL.high
    const inputReais = document.getElementById("imput-real").value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === "US$ Dólar Americano")
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            }).format(inputReais / dolar);

    if (select.value === "€ Euro")
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        {
         style: 'currency',
         currency: 'EUR' 
        }).format(inputReais / Euro);
}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dolar Americano'
        currencyimg.src = "./img/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyimg.src = "./img/euro.png"
    }
    
    convertValues()

}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)