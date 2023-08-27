


    const buttonConvertCurrency = document.querySelector(".button-convert-currency")
    
    

    buttonConvertCurrency.addEventListener("click",funcConvertCurrency)
    



function funcConvertCurrency(){
    const boxValueConvert = document.querySelector("#box-value-a-convert").value
    const valueConvertCurrencyReal = document.querySelector(".value-a-convert-currency-real")
    const euro = 1
    const dolar = 1.08
    const dolarDolar = 1
    const dolarLibra = 0.79
    const libraDolar = 1.26
    const libra = 0.86
    const libraLibra = 1
    const real = 5.26
    const realReal = 1
    const bitcoin = 0.000041
    const bitcoinDolar = 26016.000
    const bitcoinLibra = 20683.620
    const bitcoinReal = 126746.000
    const bitcoineuro = 24083.670
    const bitcoinBitcoin = 1
    const euroToday = 5.26
    const libraToday = 6.13
    const bitcoinToday = 126.761
    const dolarToday = 4.87
    const textCurrencyConvert = document.querySelector(".text-currency-convert")
    const valueCurrencyConvert = document.querySelector(".value-currency-convert")
    const selectConvertPara = document.querySelector("#select-convert-para").value
    const iconeCurrencyConvert = document.querySelector(".icone-currency-convert")
    const selectConvertDe = document.querySelector("#select-convert-de").value
    const textCurrencyReal= document.querySelector(".text-currency-real")
    const iconeCurrencyReal= document.querySelector(".icone-currency-real")
    
    


    /*  CURRENCY EURO */


    if(selectConvertDe == "euro") {


        
        if(selectConvertPara == "dolar"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency:"EUR"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert * dolar )
            textCurrencyConvert.innerHTML = "Dólar Americano"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"


            textCurrencyReal.innerHTML = "Euro"
            iconeCurrencyReal.src = "./asset/img/icone-currency-euro.png"

          
    
        }

        if(selectConvertPara == "libra"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency:"EUR"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format( boxValueConvert * libra)
            textCurrencyConvert.innerHTML = "Libra"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"


            textCurrencyReal.innerHTML = "Euro"
            iconeCurrencyReal.src = "./asset/img/icone-currency-euro.png"

         
    
        }

        if(selectConvertPara == "real"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency:"EUR"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert * real )
    
            textCurrencyConvert.innerHTML = "Real"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-real.png"



            textCurrencyReal.innerHTML = "Euro"
            iconeCurrencyReal.src = "./asset/img/icone-currency-euro.png"

         
        }

        if(selectConvertPara == "bitcoin"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency:"EUR"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format( boxValueConvert * bitcoin)
            textCurrencyConvert.innerHTML = "Bitcoin"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"



            textCurrencyReal.innerHTML = "Euro"
            iconeCurrencyReal.src = "./asset/img/icone-currency-euro.png"

        
        }

        if(selectConvertPara == "euro"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE",{
                style:"currency",
                currency:"EUR"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "EUR"
            }).format( boxValueConvert * euro )
            textCurrencyConvert.innerHTML = "Euro"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



            textCurrencyReal.innerHTML = "Euro"
            iconeCurrencyReal.src = "./asset/img/icone-currency-euro.png"

        
    
        }

     

    }




    /** CURRENCY DOLAR */


    if(selectConvertDe == "dolar") {

        


        
        if(selectConvertPara == "dolar"){

           

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert * dolarDolar )
            textCurrencyConvert.innerHTML = "Dólar Americano"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"


            textCurrencyReal.innerHTML = "Dólar Americano"
            iconeCurrencyReal.src = "./asset/img/icone-currency-dolar.png"

          
    
        }

        if(selectConvertPara == "libra"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format( boxValueConvert * dolarLibra)
            textCurrencyConvert.innerHTML = "Libra"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"


            textCurrencyReal.innerHTML = "Dólar Americano"
            iconeCurrencyReal.src = "./asset/img/icone-currency-dolar.png"

         
    
        }

        if(selectConvertPara == "real"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert * real )
    
            textCurrencyConvert.innerHTML = "Real"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-real.png"



            textCurrencyReal.innerHTML = "Dólar Americano"
            iconeCurrencyReal.src = "./asset/img/icone-currency-dolar.png"

         
        }

        if(selectConvertPara == "bitcoin"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format( boxValueConvert * bitcoin)
            textCurrencyConvert.innerHTML = "Bitcoin"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"



            textCurrencyReal.innerHTML = "Dólar Americano"
            iconeCurrencyReal.src = "./asset/img/icone-currency-dolar.png"

        
        }

        if(selectConvertPara == "euro"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "EUR"
            }).format( boxValueConvert * euro )
            textCurrencyConvert.innerHTML = "Euro"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



            textCurrencyReal.innerHTML = "Dólar Americano"
            iconeCurrencyReal.src = "./asset/img/icone-currency-dolar.png"

        
    
        }

     
       

    }





    /* CURRENCY REAL*/ 




    if(selectConvertDe == "real"){



        if(selectConvertPara == "dolar"){

           

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert / dolarToday )
            textCurrencyConvert.innerHTML = "Dólar Americano"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"


            textCurrencyReal.innerHTML = "Real"
            iconeCurrencyReal.src = "./asset/img/icone-currency-real.png"

          
    
        }

        if(selectConvertPara == "libra"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format( boxValueConvert / libraToday)
            textCurrencyConvert.innerHTML = "Libra"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"


            textCurrencyReal.innerHTML = "Real"
            iconeCurrencyReal.src = "./asset/img/icone-currency-real.png"

         
    
        }

        if(selectConvertPara == "real"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert * realReal )
    
            textCurrencyConvert.innerHTML = "Real"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-real.png"



            textCurrencyReal.innerHTML = "Real"
            iconeCurrencyReal.src = "./asset/img/icone-currency-real.png"

         
        }

        if(selectConvertPara == "bitcoin"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format( boxValueConvert * bitcoin)
            textCurrencyConvert.innerHTML = "Bitcoin"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"



            textCurrencyReal.innerHTML = "Real"
            iconeCurrencyReal.src = "./asset/img/icone-currency-real.png"

        
        }

        if(selectConvertPara == "euro"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "EUR"
            }).format( boxValueConvert / euroToday )
            textCurrencyConvert.innerHTML = "Euro"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



            textCurrencyReal.innerHTML = "Real"
            iconeCurrencyReal.src = "./asset/img/icone-currency-real.png"

        
    
        }






    }



    /* CURRENCY LIBRA*/ 




    if(selectConvertDe == "libra"){



        if(selectConvertPara == "dolar"){

           

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert * libraDolar )
            textCurrencyConvert.innerHTML = "Dólar Americano"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"


            textCurrencyReal.innerHTML = "Libra"
            iconeCurrencyReal.src = "./asset/img/icone-currency-libra.png"

          
    
        }

        if(selectConvertPara == "libra"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format( boxValueConvert * libraLibra)
            textCurrencyConvert.innerHTML = "Libra"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"


            textCurrencyReal.innerHTML = "Libra"
            iconeCurrencyReal.src = "./asset/img/icone-currency-libra.png"

         
    
        }

        if(selectConvertPara == "real"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert * real )
    
            textCurrencyConvert.innerHTML = "Real"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-real.png"



            textCurrencyReal.innerHTML = "Libra"
            iconeCurrencyReal.src = "./asset/img/icone-currency-libra.png"

         
        }

        if(selectConvertPara == "bitcoin"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format( boxValueConvert * bitcoin)
            textCurrencyConvert.innerHTML = "Bitcoin"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"



            textCurrencyReal.innerHTML = "Libra"
            iconeCurrencyReal.src = "./asset/img/icone-currency-libra.png"

        
        }

        if(selectConvertPara == "euro"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "EUR"
            }).format( boxValueConvert / euroToday )
            textCurrencyConvert.innerHTML = "Euro"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



            textCurrencyReal.innerHTML = "Libra"
            iconeCurrencyReal.src = "./asset/img/icone-currency-libra.png"

        
    
        }



    }





    /* CURRENCY BITCOIN*/ 






    if(selectConvertDe == "bitcoin"){



        if(selectConvertPara == "dolar"){

           

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
                style:"currency",
                currency:"USD"
            }).format(boxValueConvert * bitcoinDolar )
            textCurrencyConvert.innerHTML = "Dólar Americano"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-dolar.png"


            textCurrencyReal.innerHTML = "Bitcoin"
            iconeCurrencyReal.src = "./asset/img/icone-currency-bitcoin.png"

          
    
        }

        if(selectConvertPara == "libra"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format(boxValueConvert )




            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "GBP"
            }).format( boxValueConvert * bitcoinLibra)
            textCurrencyConvert.innerHTML = "Libra"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-libra.png"


            textCurrencyReal.innerHTML = "Bitcoin"
            iconeCurrencyReal.src = "./asset/img/icone-currency-bitcoin.png"

         
    
        }

        if(selectConvertPara == "real"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"
            }).format(boxValueConvert * bitcoinReal )
    
            textCurrencyConvert.innerHTML = "Real"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-real.png"



            textCurrencyReal.innerHTML = "Bitcoin"
            iconeCurrencyReal.src = "./asset/img/icone-currency-bitcoin.png"

         
        }

        if(selectConvertPara == "bitcoin"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format( boxValueConvert * bitcoinBitcoin)
            textCurrencyConvert.innerHTML = "Bitcoin"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-bitcoin.png"



            textCurrencyReal.innerHTML = "Bitcoin"
            iconeCurrencyReal.src = "./asset/img/icone-currency-bitcoin.png"

        
        }

        if(selectConvertPara == "euro"){

            valueConvertCurrencyReal.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "BTC"
            }).format(boxValueConvert )


            valueCurrencyConvert.innerHTML = new Intl.NumberFormat("de-DE" ,{
                style: "currency",
                currency: "EUR"
            }).format( boxValueConvert * bitcoineuro )
            textCurrencyConvert.innerHTML = "Euro"
            iconeCurrencyConvert.src = "./asset/img/icone-currency-euro.png"



            textCurrencyReal.innerHTML = "Bitcoin"
            iconeCurrencyReal.src = "./asset/img/icone-currency-bitcoin.png"

        
    
        }
















    }
    
    
    
    
    
    
    
    
    

    

    


    

    



























    




   




    




   
   


    


}
















    
    




    
    
    



   

    











    





















