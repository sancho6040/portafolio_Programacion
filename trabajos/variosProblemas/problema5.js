var texto =  document.getElementById("fecha");
var button = document.getElementById("boton");
button.addEventListener("click", action);

function action(){
    var Año1 = texto.value;
    var Año2 = 2020;
    var txt = document.createElement("P");
    for (Año1; Año1 <= Año2; Año1++){
        if (((Año1 % 4 == 0) && (Año1 % 100 != 0 )) || (Año1 % 400 == 0)){
            txt.innerHTML += Año1 + " Es bisiesto. <br>";
        }
    }
    document.body.appendChild(txt);
}