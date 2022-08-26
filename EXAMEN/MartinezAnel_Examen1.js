
var num_horas=53;
var horas_extras=0;

if (num_horas <= 40){
    var sueldo=num_horas*265;
    console.log("El total a pagar por horas laborables (40hrs) es de " , sueldo);
}
else {
    var sueldo=(40*265);
    var horasExtra= num_horas-40;
    var sueldoExra= (num_horas-40)*350;

    console.log("El total a pagar por horas totales " , sueldo);
    console.log("El total a pagar por horas extras" + horasExtra + "hrs es de:" + sueldoExra);

}

