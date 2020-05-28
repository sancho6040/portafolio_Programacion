document.write("separar 'abcde' con Array.form() y guardarlo en un arreglo <br>");
var arr = (Array.from('abcde'));
document.write(arr + "<br>");

document.write("<br>Ejemplo con el for comun : <br>");
for(var i=0 ; i < arr.length ; i++){ 
    document.write(arr[i] + "<br>");
    //recorre el arreglo el arreglo desde que i=0 y le va sumando 1 hasta que i < el tamaño del arreglo
}

document.write("<br>Ejemplo con el for in : <br>");
for (const i in arr) {
    document.write(arr[i] + "<br>");
    //itera en el arreglo "arr" y toma i como la posicion
}

document.write("<br>Ejemplo con el for of : <br>");
for (const value of arr) {
    document.write(value + "<br>");
    //itera en el arreglo "arr" y toma "value" como el valor en cada uno de los valores del arreglo
}

document.write("<br>Ejemplo con el for each : <br>");
arr.forEach(value => {
    document.write(value + "<br>");
});

document.write("<br>Ejemplo con el for each con una funcion : <br>");

arr.forEach(myFunction);
function myFunction(value, i) {
  document.write(i + ": " + value + "<br>");
}
/*en ambos ejemplos de for Each:
 *se llama al metodo forEach el cual itera el arreglo ejecutando
 *una funcion y pasando, el arreglo, el indice, y el valor en dicha posicion
*/ 