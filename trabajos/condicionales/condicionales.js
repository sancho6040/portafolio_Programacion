/*
 * true -> a salvo
 * false -> en el edificio
 */


var perro = false, gato = false, niño = false;

perro = true;//se baja al perro

gato = true;//se baja al gato
perro = false;//se devuelve al perro

niño = true;//se baja al niño

perro = true;//se baja al perro



if(niño && !(perro || gato)){
    document.writeln("el niño se perdio");
}


if(perro && gato && niño){
    document.writeln("lo conseguiste");
}else if(perro && niño){
    document.writeln("el perro mordio al niño");
}else if(perro && gato){
    document.writeln("el perro se comio al gato");
}