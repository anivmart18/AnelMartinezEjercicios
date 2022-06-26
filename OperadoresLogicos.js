var cad="casa blanca"
var cadinv="";
var repetido='a';
var cont=0;

for (var i = cad.length - 1; i >= 0; i--) {
    cadinv += cad[i];
    if(cad[i]==repetido){
        cont++;
    }
        {
    }
}
console.log("Entrada:", cad);
console.log("Salida:",cadinv);
console.log("El caracter" ,repetido, "se repite:" +cont ,"veces");


