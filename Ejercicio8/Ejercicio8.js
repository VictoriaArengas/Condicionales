/** 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/
let numero1 = prompt("Por favor ingresa el primer número");
let numero2 = prompt("Por favor ingresa el segundo número");
let numero3 = prompt("Por favor ingresa el tercer número");
if (numero1 >= numero2 && numero1 >= numero3) {
    document.write("El número " + numero1 + " es el mayor");}