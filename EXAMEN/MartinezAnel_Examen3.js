var arr1=[3, 2, 1, 1, 2, 3, 2, 3, 1];
var arr2=[1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log("Arreglo 1 =" ,arr1);
console.log("Arreglo 2 =" ,arr2);

function multiplicarSumar(arr1,arr2) {
    for(var i = 0; i < arr1.length; i++){
         console.log( arr1[i] + "*" + arr2[i] + "=" + arr1[i]*arr2[i]);
         console.log( arr1[i] + "+" + arr2[i] + "=" + (arr1[i] + arr2[i]));
        }
}

multiplicarSumar(arr1,arr2);

