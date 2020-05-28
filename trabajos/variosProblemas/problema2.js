var valor1 = [3, 5, 7, 8, 7, 8, 15, 37];
var valor2 = [1, 2, 2, 1, 5, 5, 3, 39];

for( i in valor1){
proceso2(valor1[i], valor2[i]);
}

function proceso2(a, b){
    var c, d;
    if(b > a){
        c = b - a;
    }else{
        c = a - b;
    }
    d = a + b;
    document.write(a +" + "+ b +" = ");
    document.write(c);
    document.write(d);
    document.write("<br>");
}

