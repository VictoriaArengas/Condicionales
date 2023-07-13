/**7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */

let dia = prompt("Ingresa un día de la semana")

if (dia.toLowerCase() == ("lunes")) {
    alert("Primer día de la semana, ¡Vamos con toda! 😉");
} else if (dia.toLowerCase() == ("viernes")) {
    alert("Se acerca el fin de semana 😎");
} else if (dia.toLowerCase() == ("sabado") || dia.toLowerCase() == ("domingo")) {
    alert("Que tengas un gran fin de semana 🤩");
} else {
    alert("Vas muy bien ¡Ánimo! 😁")
}
