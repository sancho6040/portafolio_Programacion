class GameObject {
    constructor(nombre, x ,y ,estado, context){
        this.imagen = new Image();
        this.nombre = nombre;
        this.x = x;
        this.y = y;
        this.estado = estado;
        this.context = context;

        this.imagen.src = imagenes[this.nombre];
    }

    mostrar(){
        this.context.drawImage(this.imagen, this.x, this.y, 80, 80); ;
    }

    //estado == true <-- esta a salvo
    //estado == false <-- esta en el edificio

    mover(nombre){
        if(!this.estado){//se sube
            switch (nombre) {
                case "kid": this.x = 40; this.y = 100;
                    break;
                case "cat": this.x = 80; this.y = 200;
                    break;
                case "dog": this.x = 50; this.y = 300;
                    break;
            }
        }
        if(this.estado){//se baja
            switch (nombre) {
                case "kid": this.x = 360; this.y = 320;
                    break;
                case "cat": this.x = 280; this.y = 320;
                    break;
                case "dog": this.x = 200; this.y = 320;
                    break;
            }
        }
    }

    cambiarEstado(){
        if(this.estado){
            this.estado = false;
        }else{
            this.estado = true;
        }
    
    }
}