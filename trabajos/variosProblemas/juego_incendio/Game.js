var game = true;
//contexto 2D
var cv = document.getElementById("canvas");
var lienzo = cv.getContext("2d");
//GameOver
var GameOver = {
    url: "assets/GameOver.png",
    cargaOk: false
};
GameOver.imagen = new Image();
GameOver.imagen.src = GameOver.url;
GameOver.imagen.addEventListener("load", cargarGameOver);
//fondo
var fondo = {
    url: "assets/fondo.png",
    cargaOk: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//edificio
var edificio = {
    url: "assets/edificio.png",
    cargaOk: false
};
edificio.imagen = new Image();
edificio.imagen.src = edificio.url;
edificio.imagen.addEventListener("load", cargarEd);

//fondo
var camion = {
    url: "assets/camion.png",
    cargaOk: false
};
camion.imagen = new Image();
camion.imagen.src = camion.url;
camion.imagen.addEventListener("load", cargarCamion);
//--------------------------------------------------------------------------
//Botones

var bKid = document.getElementById("kid");
var bCat = document.getElementById("cat");
var bDog = document.getElementById("dog");
var bReset = document.getElementById("reset");
bKid.addEventListener("click", clickKid);
bCat.addEventListener("click", clickCat);
bDog.addEventListener("click", clickDog);
bReset.addEventListener("click", reset);


//--------------------------------------------------------------------------
var kX = 40, kY = 100;//kid
var cX = 80, cY = 200;//cat
var dX = 50, dY = 300;//Dog

var imagenes = [];
imagenes["kid"]= "assets/kid.png";
imagenes["cat"]= "assets/cat.png";
imagenes["dog"]= "assets/dog.png";

var coleccion = [];
coleccion.push(new GameObject("kid", kX, kY, false, lienzo));
coleccion.push(new GameObject("cat", cX, cY, false, lienzo));
coleccion.push(new GameObject("dog", dX, dY, false, lienzo));

function dibujar(){
    if(game){
        if(fondo.cargaOk){
            lienzo.drawImage(fondo.imagen, 0 , 0, 500, 400);
        }
        if(edificio.cargaOk){
            lienzo.drawImage(edificio.imagen, -10, 0, 240, 430);
        }
        if(camion.cargaOk){
            lienzo.drawImage(camion.imagen, 300 , 280, 200, 130);
        }

        for(var i of coleccion){
            i.mostrar();
            console.log(i.nombre + " " + i.estado);
        }

        comprovar();

        if(GameOver.cargaOk && !game){
            lienzo.drawImage(GameOver.imagen, -10, -50);
        }

    }
}

function clickKid(){
    for(var i of coleccion){
        if(i.nombre == "kid"){
           i.cambiarEstado();
           i.mover("kid");
        }
    }
    dibujar();
}

function clickCat(){
    for(var i of coleccion){
        if(i.nombre == "cat"){
           i.cambiarEstado();
           i.mover("cat");
        }
    }
    dibujar();
}

function clickDog(){
    for(var i of coleccion){
        if(i.nombre == "dog"){
           i.cambiarEstado();
           i.mover("dog");
        }
    }
    dibujar();
}

function reset(){//reinicia las variables a sus estados iniciales
    for(var i of coleccion){
        i.estado = false;
        i.mover(i.nombre);
    }

    game = true;
    dibujar();
}

function comprovar(){
    var niño, gato, perro;

    for(var i of coleccion){
        switch (i.nombre){
            case "kid": niño = i.estado; break;
            case "cat": gato = i.estado; break;
            case "dog": perro = i.estado; break;
        }
    }
    
    
    if(niño && !(perro || gato)){
        //alert("el niño se perdio");
        game = false;
    }

    if(perro && gato && niño){
        //alert("lo conseguiste");
        game = false;
    }else if(perro && niño){
        //alert("el perro mordio al niño");
        game = false;
    }else if(perro && gato){
        //alert("el perro se comio al gato");
        game = false;
    }

}

function cargarGameOver(){
    GameOver.cargaOk = true;
    dibujar();
}

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarEd(){
    edificio.cargaOk = true;
    dibujar();
}

function cargarCamion(){
    camion.cargaOk = true;
    dibujar();
}
