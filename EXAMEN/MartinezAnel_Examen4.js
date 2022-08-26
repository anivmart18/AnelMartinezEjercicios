class Persona{
    constructor(nombre,apellido,edad) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    getDetalles(){
        console.log(this.nombre + " " + this.apellido + "de" + this.edad + "anios");
    }

}

class Empleado extends  Persona {
    constructor(nombre,apellido,edad,tipo) {
        super(nombre,apellido,edad);
         this.nombre=nombre;
         this.apellido=apellido;
         this.edad=edad;
         this.tipo=tipo;
    }

    getDetalles(){
        console.log(this.nombre + " " + this.apellido + "de" + this.edad + "anios" + " " + "-" +this.tipo);
    }
}

class Nomina{
    constructor(empleados) {
        this.empleados= empleados;
    }

    calcularPago(nombre,apellido,edad,tipo){
        var aleatorio = Math.floor(Math.random() * 15) + 5;
        var descuentoSindicato=(aleatorio*350)*0.10;
        var descuentoConfianza=(aleatorio*500)*0.13;
        if (tipo == "c" ){
            console.log(nombre + " " + apellido + " de " + edad + " anios " + " - "+tipo +" pertenece a Empleado de Confianza con un sueldo de $ " + ((aleatorio*500)-descuentoConfianza) + " por " + aleatorio + " dias trabajados" );
        }
        else{
            console.log(nombre + " " + apellido + " de " + edad + " anios " + " - "+tipo +" pertenece a Sindicato con un sueldo de $ " + ((aleatorio*350)-descuentoSindicato) + " por " + aleatorio + " dias trabajados" );
        }
    }



    calcularNomina(){
        this.empleados.map((Empleado) => {
            this.calcularPago(Empleado.nombre,Empleado.apellido,Empleado.edad,Empleado.tipo);
        })
    }

}

var p1 = new Persona("Maria Roberta", "Mendez", 33 );
var p2 = new Persona("Daniela", "Desiderio", 23 );
var p3 = new Persona("Alexander", "Martinez", 26 );

var e1 = new Empleado("Maria Roberta", "Mendez", 33,"c");
var e2 = new Empleado("Daniela", "Desiderio", 23 ,"c");
var e3 = new Empleado("Alexander", "Martinez", 26,"s");

var n1= new Nomina([e1,e2,e3] );

n1.calcularNomina();