//Este documento trata sobre el trabajo de los arreglos como parte de su uso

//Declaracion de un arreglo
var fruta = [];
document.write("Que tiene el arreglo fruta: ", fruta+"Esta vacio"+"<br>");
var fruta = new Array();
fruta=['Guama'];

document.write("<br>Que tiene ahora el arreglo fruta: ", fruta+"<br>"+"<br>");

var frutas = [" Mandarina", " Banano"," Piña", " Naranja", " Pomelo"];
document.write("Estas son las frutas del arreglo:  "+ frutas+ "<br>");
document.write("Esta es la fruta escogida del arreglo: "+frutas[3]+", " +"<br>");
document.write("Esta son las frutas escogidas del arreglo: "+frutas[2]+", " +frutas[1]);


console.log(frutas.length); 


//Primera fruta del Arreglo 
var primero = frutas[0];
// Manzana

//La ultima fruta del Arreglo 
var ultimo = frutas[frutas.length - 1];

document.write("<br>  Esta es la primera fruta del arreglo:  "+ primero+"<br>");
document.write("<br>  Esta es la ultima de las frutas del arreglo: "+ ultimo);

//Añadir elemento al final de un Array

var nuevaLongitud = frutas.push(' Pitaya',' Frambuesa');  // Añade "Fresa" al final
// ["Manzana", "Banana", "fresa"]
document.write("<br>  Esta es la ultima longitud del arreglo de frutas: "+ nuevaLongitud);
document.write("<br>  Estas son las frutas del arreglo ahora:  "+ frutas+ "<br>");

//Eliminar elemento del arreglo
var ultimo = frutas.pop();  // Elimina "" del final
document.write("<br>  Esta es la ultima de las frutas del arreglo: "+ ultimo);
// ["Manzana", "Banana"]
document.write("<br>  Estas son las frutas del arreglo ahora:  "+ frutas+ "<br>");

//Añadir elemento del inicio de un Array

var nuevaLongitud = frutas.unshift('Coco', ' Anon');  // Añade "Fresa" al inicio
document.write("<br>  Este es el tamaño del arreglo ahora: "+ nuevaLongitud);
document.write("<br> Ahora esta es la primera fruta del arreglo: "+ frutas[0]);
document.write("<br>  Estas son las frutas del arreglo ahora:  "+ frutas+ "<br>");


//Eliminar elemento al final de un Array

var elimina = frutas.shift();  // Elimina "Fresa" al inicio

document.write("<br>  Este es el elemento que se elimino al principio: "+ elimina);

document.write("<br> Ahora esta es la primera fruta del arreglo: "+ frutas[0]);
var nnuevaLongitud = frutas.length;
document.write("<br>  Este es el tamaño del arreglo ahora: "+ nnuevaLongitud);
document.write("<br>  Estas son las frutas del arreglo ahora:  "+ frutas+ "<br>");


//Bucle sobre un Array y uso del Foreach 
document.write("<br> Así esta organizado el arreglo con nombre y  posiciones: <br>")
frutas.forEach(function (elemento, indice, array) {

    document.write(indice," ", elemento,  "<br>");
}); 
document.write("<br>")

//Encontrar el índice de un elemento en el Array

frutas.push(' Aguacate'); 
// ["Manzana", "Banana", "Fresa"]



var pos = frutas.indexOf('Pitaya');  // (pos) es la posición para abreviar
// 1
document.write("<br> El elemento encontrado esta en la posición: <br>")

document.write(pos);

document.write("<br>  Estas son las frutas del arreglo ahora:  "+ frutas+ "<br>");

//Bucle sobre un Array
document.write("<br> Así esta organizado el arreglo con nombre y  posciones: <br>")
frutas.forEach(function (elemento, indice, array) {

    document.write(indice," ", elemento, "<br>",);
}); 

//Array.from nos ayuda a ver un arreglo
document.write("<br> Muestra las letras del arreglo que son las siguientes: <br>")
document.write(Array.from('Disculpeme'));
// expected output: Array ["D", "i", "s"]
document.write("<br> Opera los elementos del arreglo que son: [1, 2, 3,4,5,6] y  sumandole a cada elemento del  arreglo asi mismo queda asi: x => x + x <br>")
document.write(Array.from([1, 2, 3,4,5,6], x => x / x));
// expected output: Array [2, 4, 6]
