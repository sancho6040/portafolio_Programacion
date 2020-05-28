/*Este Documento es mi trabajo sobre Arreglos y sus variantes
 *Por: Sergio Sanchez O. 4/03/2020
 */

/*
*-----------Decalracion del array---------
*/

//Se declara una variable y se le asigna un arreglo
 
var fruta = [];
document.write("Qué tiene el arreglo de fruta: " + fruta + " esta vacio!!" + "<br>");


//Segunda declara una variable y  se le asigna un Array

var fruta = new Array();
fruta = ["GUAMA"]; //el arreglo vale "GUAMA"
document.write("<br> Qué tiene el arreglo de fruta: " + fruta + "<br>");

//voy a llenar un nuevo arreglo con muchas frutas

var frutas = [" Manzanas", " Bananos", " Naranjas", " Peras", " aguacate"]; 
document.write("<br> Estas son las frutas del arreglo:" + frutas + "<br>");

//Voy a escoger una fruta del arreglo
document.write("<br> Esta es la fruta escogida del arreglo: " + frutas[2] + "<br>");
document.write("<br> Estas son las frutas escogidas del arreglo: " + frutas[0] + ", " + frutas[3] + "<br>"); // el ", " es para poner un espacio entre las frutas

//quiero saber cual es la primera fruta
var primero = frutas[0];
//quiero saber la ultima fruta de mi arreglo
var ultima = frutas[frutas.length - 1]; 
//frutas.length devuelve el valor del arreglo pero contando desde 1, por lo que el -1 da la ultima posicion del arreglo ya que este va desde 0

document.write("<br> Esta es la primera fruta del arreglo: " + primero + "<br>");
document.write("<br> Esta es la ultima fruta del arreglo: " + ultima + "<br>");


//añadir un elemento al final de un arreglo

var nuevaLongitud = frutas.push(' Papaya'); //por norma al usar una funcion de un arreglo se usan '' y no ""

//muestra el tamayo y los eslementos del arreglo
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " + nuevaLongitud + "<br>");

//la ultima fruta es
document.write("<br> Esta es ahora la ultima fruta: " + frutas[frutas.length - 1] + "<br>");

var nuevaLongitud = frutas.push(' Limon', ' Feijoa');

//x2 :v
//muestra el tamayo y los eslementos del arreglo
document.write("<br> Esta es la ultima longitud del arreglo de frutas: " + nuevaLongitud + "<br>");

//la ultima fruta es
document.write("<br> Estas son las frutas del arreglo: " + frutas + "<br>");


//eliminar elemento del arreglo
var ultima = frutas.pop();
document.write("<br> Esta es ahora la ultima fruta: " + ultima + "<br>");



