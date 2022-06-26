let nt1=parseInt(prompt('Ingrese primer nota:',''));
let nt2=parseInt(prompt('Ingrese segunda nota:',''));
let nt3=parseInt(prompt('Ingrese tercera nota:',''));
let suma;
suma = nt1+nt2+nt3;
let prom;
prom = suma / 3;
if (prom >= 7) {
    document.write('PROMOCIONADO');
}