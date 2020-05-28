//guarda los input
var nom = document.getElementById("nombre");
var num = document.getElementById("numero");
var inte = document.getElementById("inte");

//identifica el boton y le pone un "accionador"
var boton = document.getElementById("btn_submit");
boton.addEventListener("click", guardar);

function guardar(){
    alert(":D");
    console.log(nom.value);//imprime los valores en consola
    console.log(num.value);
    console.log(inte.value);
    /*document.writeln(nom.value);
    document.writeln(num.value);
    document.writeln(inte.value);
    esta monda no era lo que queria ;v
    */
}
