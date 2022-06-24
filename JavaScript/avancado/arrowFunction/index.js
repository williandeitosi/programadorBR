/* função normal */
 
    function dobro(x){
        console.log(x * 2)
    }
    
    dobro(4)


/* Função anônima */
    let mult = function (x) {
        return(x * 2)
    }
    console.log(mult(15))


/* Arrow Function = é boa para reduzir o código porem ela não entende o this e nem o bind*/    

    let vezes = (x, y) => (x + y) * 2
    
    console.log(vezes(5, 2))
    /* se a função for dar apenas um return você não precisa usar as chaves */


    /* se a arrow function tiver apenas 1 argumento ai não precisa dos parenteses, se tiver mais de 1 ai usa parenteses */
    