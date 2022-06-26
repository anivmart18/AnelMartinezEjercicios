
let n=parseInt(prompt('Ingresar un numero entero de 1 al 50:',''));
document.write("La Tabla de multiplicar es " + n);
document.write("<br>");
for(var i = 1; i<=10; i++){
    document.write(n + " * " + i + " = " + n*i);
    document.write("<br>");
}