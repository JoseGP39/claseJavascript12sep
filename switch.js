//ejercicio condicional switch para compaarar varios datos

//declaramos variable para capturar dato de entrada
var dia = prompt("Ingresa el dia de la semana");

switch (dia) {
    case "lunes":
        alert("lunes");
        break;
    case "martes":
        alert("martes");
        break;
    case "miercoles":
        alert("miercoles");
        break;
    case "jueves":
        alert("jueves");
        break;
    case "viernes":
        alert("viernes");
        break;
        default: //con esta palabra reservada si no ingresamos un dia valido, nos muestra un mensaje 
        alert("dia no valido");

}
