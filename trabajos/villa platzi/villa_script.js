//contexto 2d
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

//fondo
var fondo = {
    url: "tile.png",
    cargaOk: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//vaca
var vaca = {
    url: "vaca.png",
    cargaOk: false
};
var cantidad = aleatorio(0 , 25);//cantidad de vacas
console.log("numero de vacas: " + cantidad)
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//cerdo
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
/*-----------movimiento cerdo----------*/
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 }
document.addEventListener("keydown", moverCerdo);
var cX = (vp.width)-150;
var cY = (vp.height)-90;



//funciones
function moverCerdo(evento){
    console.log(evento);
    var movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP: 
            cY -= movimiento;
            dibujarCerdo(); 
        break;
        case teclas.DOWN: 
            cY += movimiento;
            dibujarCerdo();
        break;
        case teclas.LEFT: 
            cX -= movimiento;
            dibujarCerdo();
        break;
        case teclas.RIGHT: 
            cX += movimiento;
            dibujarCerdo();  
        break;
        default: 
            console.log("otra tecla");
        break;
    }
}

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
}

function dibujarCerdo(){
    /*if(cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, cX, cY);
    }*/dibujar();
}

function dibujar(){
    if(fondo.cargaOk){
       papel.drawImage(fondo.imagen, 0, 0); 
    }
    if(cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, cX, cY);
    }
    if(vaca.cargaOk){
        for(var v=0; v<cantidad; v++){
            var x = aleatorio(0, 7)*40;
            var y = aleatorio(0, 7)*40;
            papel.drawImage(vaca.imagen, x, y);
        } 
    }
}


function aleatorio(min, max) {
    var resultado = Math.floor(Math.random()*(max - min +1)) + min;
    return resultado;
}