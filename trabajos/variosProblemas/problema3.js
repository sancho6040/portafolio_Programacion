document.write("<u>");
document.write("<big>");
for(var y = 1; y <= 3; y++){
    
    for(var x = 1; x <= 3; x++){
        if(y == 1){
            if(x == 1)document.write(8);
            if(x == 2)document.write(3);
            if(x == 3)document.write(6);
        }else if(y == 2){
            if(x == 1)document.write(5);
            if(x == 2)document.write(9);
            if(x == 3)document.write(7);
        }else if(y == 3){
            if(x == 1)document.write(4);
            if(x == 2)document.write(1);
            if(x == 3)document.write(2);
        }
        document.write("|");

    }
    document.write("<br>");
}
document.write("</big>");
document.write("</u>");