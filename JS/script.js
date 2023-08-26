


    const buttonConvertCurrency = document.querySelector(".button-convert-currency")
    
    
    
    

    
    


    buttonConvertCurrency.addEventListener("click",funcConvertCurrency)
    





function funcConvertCurrency(){
    const boxValueConvert = document.querySelector("#box-value-a-convert").value
    const valueConvertCurrencyReal = document.querySelector(".value-a-convert-currency-real")
    const euroToday = 5.26
    const libraToday = 6.13
    const bitcoinToday = 126.761
    const dolarToday = 4.87
    const textCurrencyConvert = document.querySelector(".text-currency-convert")
    const valueCurrencyConvert = document.querySelector(".value-currency-convert")
    const selectConvertPara = document.querySelector("#select-convert-para").value
    const iconeCurrencyConvert = document.querySelector(".icone-currency-convert")

    if(selectConvertPara == "dolar"){

        valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(boxValueConvert /dolarToday )
        textCurrencyConvert.innerHTML = "Dólar Americano"
        iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"




    }

    if(selectConvertPara == "euro"){

        valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(boxValueConvert / euroToday )

        textCurrencyConvert.innerHTML = "Euro"
        iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



    }

    if(selectConvertPara == "libra"){

        valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
            style: "currency",
            currency: "GBP"
        }).format( boxValueConvert / libraToday)
        textCurrencyConvert.innerHTML = "Libra"
        iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"




    }

    if(selectConvertPara == "bitcoin"){

        valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
            style: "currency",
            currency: "BTC"
        }).format( boxValueConvert / libraToday)
        textCurrencyConvert.innerHTML = "Bitcoin"
        iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"




    }
    




    valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(boxValueConvert)




    




   
   


    


}
















    
    




    
    
    



   

    











    





















