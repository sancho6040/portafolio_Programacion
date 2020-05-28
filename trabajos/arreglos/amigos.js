//Declarar arreglos 


var amigos = ["Santiago", "Alejandro", "Juanita"];
//amigos.length(); //Me dice cuanto es el tamño de mi arreglo
document.write("Tienes "+ amigos.length + " Amigos" + "<br>");
amigos[amigos.length]="Adriana";
amigos[amigos.length] = "Brayan";
document.write(amigos);

//Con push agrego un elemento al final o los elementos que quiero al final 
amigos.push("Milagros", " Aramis", " Brandon");

// Borrar la Ultima posción 
amigos.pop();

//como unir dos arreglos

var amigos2=[" Carlos", " Alvaro", " Bridgte"];

var amigos3 = amigos.concat(amigos2+ "<br>");
document.write(amigos3);

//Uso del join para separar los elementos del arreglo

document.write(amigos.join(": ")+"<br>");

//Ordenar lso elementos del arreglo 

var ordenar = amigos.sort();
document.write(ordenar);
//Como agragar elementos dinamicos en un arreglo
