const readlineSync = require('readline-sync');

//Generamos un número aleatorio entre 1 y 100
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};
let flag = false;
const nro_generado = generarNumeroAleatorio();
//Pedimos al usuario que ingrese un número
let nro_usuario = readlineSync.question('Elije un numero: ');

while (flag==false) {
    //Comparamos con el número generado
    //Decimos al usuario si el número es muy alto o muy bajo
    if (nro_usuario<nro_generado){
        console.log("Tu numero es muy bajo, prueba subiendo.")
        nro_usuario = readlineSync.question('Ingresa otro nro: ');
    }else if (nro_usuario>nro_generado){
        console.log("Tu numero es muy alto, prueba bajando.")
        nro_usuario = readlineSync.question('Ingresa otro nro: ');
    }else if (nro_usuario==nro_generado){
        //Mostramos un msj de felicitaciones cuando el usuario adivina el número
        console.log("¡ACERTASTE! Haz ganado el juego.")
        flag=true;
    }
}




