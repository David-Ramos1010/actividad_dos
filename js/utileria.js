/*alert ('¡Hola mundo!');*/

/*1. Función autoejecutable*/

/*
*(function (){
	*alert ('¡Hola mundo!');
*})(); /*Esta es una clase autoejecutable y anonima porque no lleva nombre*/
//07:45 a. m. 24/09/2026

//var x;
//x = 1;
//var obtenerValor = function(){
//	return x;
//}

//x = 3;

//console.log(obtenerValor());

function validarEmail(email) {
 	// Expresión regular para validar el formato del email
 	var regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

 	// Validar el formato del email
 	if (!regex.test(email)) {
  		return false;
	}

 	// Separar el nombre de usuario y el dominio del email
 	var partes = email.split("@");
 	var usuario = partes[0];
 	var dominio = partes[1];

	// Validar que el usuario y el dominio no estén vacíos
	if (usuario.length === 0 || dominio.length === 0) {
		return false;
	}

	// Validar que el usuario y el dominio no contengan caracteres especiales
	var caracteresEspeciales = /[!#$%&'*+/=?^_`{|}~]/;

	if (caracteresEspeciales.test(usuario) || caracteresEspeciales.test(dominio)) {
		return false;
	}
 	return true;
}

// Ejemplo de uso
var email = document.getElementById('email').value;
if (validarEmail(email)) {
  console.log("Email válido");
} else {
  console.log("Email inválido");
}

/*
*En la segunda instrucción se solicita que validemos una cadena de texto continua y sin espacios.
*La instrucción dice que solo debe de aceptar letras. Las letras deben de ser mayusculas y minusculas ademas de que permite letras acentuadas.
*/


function validarTexto(text) {
	//aquí construimos un automata que permita letras de la "a" a la "z" incluyendo mayusculas y como las vocales son las unicas que en teoria deberian ir acentuadas no necesitan validación.

	var regex = /^[a-zA-ZáéíóúüýñÁÉÍÓÚÜÑ\s]+$/;

	//test(); actua como un booleano.
	return regex.test(text);

}


var text = "WEIUDDUý eee"
if (validarTexto(text)) {
  console.log("texto valido");
} else {
  console.log("texto inválido");
}


function validarLongitud(long, maxLong) {

	if (long.toString().length < maxLong) {
		console.log("largo valido");
	}
	else {
		console.log("largo inválido")
	}
}	

var long = 12345678910;
var maxLong = 2;
validarLongitud(long, maxLong);





function calcularEdad(fechaNacimiento) {
	var fechaNacimiento_arr = fechaNacimiento.split("/");
	var fechaNacimiento_date = new Date(fechaNacimiento_arr[2], fechaNacimiento_arr[1] - 1, fechaNacimiento_arr[0]);
	var ageDifMs = Date.now() - fechaNacimiento_date.getTime();
	var ageDate = new Date(ageDifMs);

	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var fechaNacimiento = "10/10/2005";
var edad = calcularEdad(fechaNacimiento);
console.log(edad)



  