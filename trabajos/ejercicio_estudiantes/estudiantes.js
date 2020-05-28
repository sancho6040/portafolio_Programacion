var curso = "404";

var infoEstudiante = [
	"fecha de nacimiento ",
	"codigo estudiante ",
	"Nombre ",
	"Apellido ",
	"edad ",
	"curso "
]

for(var i = 6; i<11 ; i++){
	infoEstudiante[i] = "nota " + (i-5) + " ";
}
infoEstudiante[11] = "promedio: "//cambiar!!!!!

//estudiante 1
var estudiante_1 = [];
estudiante_1[0] = "28/04/1940";//fecha de nacimiento
estudiante_1[1] = codigoAleatorio();//codigo estudiante
estudiante_1[2] = "Ricado";//nombre
estudiante_1[3] = "Tapias";//apellido
estudiante_1[4] = getEdad(estudiante_1[0]);//edad
estudiante_1[5] = curso;//curso
estudiante_1[6] = notaAleatoria();//materia 1
estudiante_1[7] = notaAleatoria();//materia 2
estudiante_1[8] = notaAleatoria();//materia 3
estudiante_1[9] = notaAleatoria();//materia 4
estudiante_1[10] = notaAleatoria();//materia 5
estudiante_1[11] = getProm(estudiante_1);//promedio de notas

//estudiamte 2
var estudiante_2 = [];
estudiante_2[0] = "30/02/1939";//fecha de nacimiento
estudiante_2[1] = codigoAleatorio();//codigo estudiante
estudiante_2[2] = "Bruno";//nombre
estudiante_2[3] = "Dias";//apellido
estudiante_2[4] = getEdad(estudiante_2[0]);//edad
estudiante_2[5] = curso;//curso
estudiante_2[6] = notaAleatoria();//materia 1
estudiante_2[7] = notaAleatoria();//materia 2
estudiante_2[8] = notaAleatoria();//materia 3
estudiante_2[9] = notaAleatoria();//materia 4
estudiante_2[10] = notaAleatoria();//materia 5
estudiante_2[11] = getProm(estudiante_2);//promedio de notas

//estudiante 4
var estudiante_3 = [];
estudiante_3[0] = "11/07/2005";//fecha de nacimiento
estudiante_3[1] = codigoAleatorio();//codigo estudiante
estudiante_3[2] = "Liam	";//nombre
estudiante_3[3] = "Fernandez";//apellido
estudiante_3[4] = getEdad(estudiante_3[0]);//edad
estudiante_3[5] = curso;//curso
estudiante_3[6] = notaAleatoria();//materia 1
estudiante_3[7] = notaAleatoria();//materia 2
estudiante_3[8] = notaAleatoria();//materia 3
estudiante_3[9] = notaAleatoria();//materia 4
estudiante_3[10] = notaAleatoria();//materia 5
estudiante_3[11] = getProm(estudiante_3);//promedio de notas

//estudiante 4
var estudiante_4 = [];
estudiante_4[0] = "22/03/1986";//fecha de nacimiento
estudiante_4[1] = codigoAleatorio();//codigo estudiante
estudiante_4[2] = "Noah";//nombre
estudiante_4[3] = "Rodriguez";//apellido
estudiante_4[4] = getEdad(estudiante_4[0]);//edad
estudiante_4[5] = curso;//curso
estudiante_4[6] = notaAleatoria();//materia 1
estudiante_4[7] = notaAleatoria();//materia 2
estudiante_4[8] = notaAleatoria();//materia 3
estudiante_4[9] = notaAleatoria();//materia 4
estudiante_4[10] = notaAleatoria();//materia 5
estudiante_4[11] = getProm(estudiante_4);//promedio de notas

//estudiante 5
var estudiante_5 = [];
estudiante_5[0] = "19/09/2000";//fecha de nacimiento
estudiante_5[1] = codigoAleatorio();//codigo estudiante
estudiante_5[2] = "Benjamin";//nombre
estudiante_5[3] = "Gonzalez";//apellido
estudiante_5[4] = getEdad(estudiante_5[0]);//edad
estudiante_5[5] = curso;//curso
estudiante_5[6] = notaAleatoria();//materia 1
estudiante_5[7] = notaAleatoria();//materia 2
estudiante_5[8] = notaAleatoria();//materia 3
estudiante_5[9] = notaAleatoria();//materia 4
estudiante_5[10] = notaAleatoria();//materia 5
estudiante_5[11] = getProm(estudiante_5);//promedio de notas

//estudiante 6
var estudiante_6 = [];
estudiante_6[0] = "03/12/1990";//fecha de nacimiento
estudiante_6[1] = codigoAleatorio();//codigo estudiante
estudiante_6[2] = "Logan";//nombre
estudiante_6[3] = "Howlett";//apellido
estudiante_6[4] = getEdad(estudiante_6[0]);//edad
estudiante_6[5] = curso;//curso
estudiante_6[6] = notaAleatoria();//materia 1
estudiante_6[7] = notaAleatoria();//materia 2
estudiante_6[8] = notaAleatoria();//materia 3
estudiante_6[9] = notaAleatoria();//materia 4
estudiante_6[10] = notaAleatoria();//materia 5
estudiante_6[11] = getProm(estudiante_6);//promedio de notas

//estudiante 7
var estudiante_7 = [];
estudiante_7[0] = "17/11/1994";//fecha de nacimiento
estudiante_7[1] = codigoAleatorio();//codigo estudiante
estudiante_7[2] = "Jacob";//nombre
estudiante_7[3] = "perez";//apellido
estudiante_7[4] = getEdad(estudiante_7[0]);//edad
estudiante_7[5] = curso;//curso
estudiante_7[6] = notaAleatoria();//materia 1
estudiante_7[7] = notaAleatoria();//materia 2
estudiante_7[8] = notaAleatoria();//materia 3
estudiante_7[9] = notaAleatoria();//materia 4
estudiante_7[10] = notaAleatoria();//materia 5
estudiante_7[11] = getProm(estudiante_7);//promedio de notas

//estudiante 8
var estudiante_8 = [];
estudiante_8[0] = "26/09/1987";//fecha de nacimiento
estudiante_8[1] = codigoAleatorio();//codigo estudiante
estudiante_8[2] = "Mila";//nombre
estudiante_8[3] = "Alvarez";//apellido
estudiante_8[4] = getEdad(estudiante_8[0]);//edad
estudiante_8[5] = curso;//curso
estudiante_8[6] = notaAleatoria();//materia 1
estudiante_8[7] = notaAleatoria();//materia 2
estudiante_8[8] = notaAleatoria();//materia 3
estudiante_8[9] = notaAleatoria();//materia 4
estudiante_8[10] = notaAleatoria();//materia 5
estudiante_8[11] = getProm(estudiante_8);//promedio de notas

//estudiante 9
var estudiante_9 = [];
estudiante_9[0] = "06/06/2003";//fecha de nacimiento
estudiante_9[1] = codigoAleatorio();//codigo estudiante
estudiante_9[2] = "Darwin";//nombre
estudiante_9[3] = "Waterson";//apellido
estudiante_9[4] = getEdad(estudiante_9[0]);//edad
estudiante_9[5] = curso;//curso
estudiante_9[6] = notaAleatoria();//materia 1
estudiante_9[7] = notaAleatoria();//materia 2
estudiante_9[8] = notaAleatoria();//materia 3
estudiante_9[9] = notaAleatoria();//materia 4
estudiante_9[10] = notaAleatoria();//materia 5
estudiante_9[11] = getProm(estudiante_9);//promedio de notas

//estudiante 10
var estudiante_10 = [];
estudiante_10[0] = "16/11/1989";//fecha de nacimiento
estudiante_10[1] = codigoAleatorio();//codigo estudiante
estudiante_10[2] = "Emma";//nombre
estudiante_10[3] = "perez";//apellido
estudiante_10[4] = getEdad(estudiante_10[0]);//edad
estudiante_10[5] = curso;//curso
estudiante_10[6] = notaAleatoria();//materia 1
estudiante_10[7] = notaAleatoria();//materia 2
estudiante_10[8] = notaAleatoria();//materia 3
estudiante_10[9] = notaAleatoria();//materia 4
estudiante_10[10] = notaAleatoria();//materia 5
estudiante_10[11] = getProm(estudiante_10);//promedio de notas

crearTabla();

function crearTabla(){
	//<div>
	let est = document.createElement("DIV");
	est.className = "pos";
	document.body.appendChild(est);
	//<table>
	let tabla = document.createElement("TABLE");
	tabla.className = "titulos";
	est.appendChild(tabla);

	let cabecera = document.createElement("THEAD");
	tabla.appendChild(cabecera);
	let fila = document.createElement("TR");
	cabecera.appendChild(fila);

	for (const i in infoEstudiante){
		let elemento = document.createElement("TH");
        elemento.innerText = infoEstudiante[i];
        fila.appendChild(elemento);
	
	}

	printEstudiantes(estudiante_1, tabla);
	printEstudiantes(estudiante_2, tabla);
	printEstudiantes(estudiante_3, tabla);
	printEstudiantes(estudiante_4, tabla);
	printEstudiantes(estudiante_5, tabla);
	printEstudiantes(estudiante_6, tabla);
	printEstudiantes(estudiante_7, tabla);
	printEstudiantes(estudiante_8, tabla);
	printEstudiantes(estudiante_9, tabla);
	printEstudiantes(estudiante_10, tabla);

}

function printEstudiantes(estudiante, tabla){

	let cuerpo = document.createElement("TBODY");
	tabla.appendChild(cuerpo);

	let fila2 = document.createElement("TR");
    cuerpo.appendChild(fila2);
	for (const i in estudiante) {
		let datos = document.createElement("TH");
		datos.innerText = estudiante[i];
		fila2.appendChild(datos);

	}
	

}

//-------------------------< funciones para obtener valores >------------------------------

function notaAleatoria(){
	//entre 101 y 499
	var rdm = Math.random()*(4)+1;
	var decimal = rdm.toFixed(1);
	return decimal;
}

function codigoAleatorio(){
	var rdm = Math.floor(Math.random()*(20)+10);
	return rdm;
}

function getProm(estudiante){
	var prom = 0;
	for(var i = 6 ; i < 11 ; i++){
		prom += parseFloat(estudiante[i]); 
	}
	prom = prom/5;
	var res = prom.toFixed(1);

	return res;
}


function getEdad(fecha){

var fHoy = "11/03/2020"
var dias = restaFechas(fecha, fHoy);
var edad = Math.floor(dias/365);

return edad;
}

function restaFechas(f1,f2){

 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }