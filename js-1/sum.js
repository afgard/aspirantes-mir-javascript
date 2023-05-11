// escribe la función suma acá

function sum(numero){
    let resultado=0;
    for(let i = 1; i<=numero; i++){
        resultado += i;
    }
    return resultado;
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120