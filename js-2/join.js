//Crear una función join que reciba un arreglo y 
//retorne un string con todos los elementos separados 
//por espacio sin usar el método join de los arreglos.

function join(arr) {
    if (arr.length === 0) {
      return '';
    }
  
    let result = '';
  
    for (let i = 0; i < arr.length - 1; i++) {
      result += arr[i] + ' ';
    }
  
    result += arr[arr.length - 1];
  
    return result;
}

console.log(join([1, 3, 2])) // 1, 3, 2
console.log(join([])) // 10, 9, 8, 7, 6, 5, 4
console.log(join([])) //en blanco
console.log(join(['Hola', 'Mundo', '!'])); // 'Hola Mundo !'
console.log(join([1, 2, 3, 4])); // '1 2 3 4'
console.log(join(['JavaScript', 'M', 'E', 'Gusta'])); // 'JavaScript es genial'
console.log(join([])); // ''