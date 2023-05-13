//Crea una función max que reciba un arreglo de números 
//y retorne el número máximo sin usar el método Math.max de JavaScript. 
//Si el arreglo está vacío debe retornar undefined

function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum;
}
  
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined