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

// <---- esta funcion va a estar en la validación del correo en el cuestionario

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

/*Ejemplo de uso
*var email = document.getElementById('email').value;
*if (validarEmail(email)) {
*  console.log("Email válido");
*} else {
*  console.log("Email inválido");
}*/

/*
*En la segunda instrucción se solicita que validemos una cadena de texto continua y sin espacios.
*La instrucción dice que solo debe de aceptar letras. Las letras deben de ser mayusculas y minusculas ademas de que permite letras acentuadas.
*/

// <---- Esta funcion va a estar en la validación del nombre 


function validarTexto(text) {
	//aquí construimos un automata que permita letras de la "a" a la "z" incluyendo mayusculas y como las vocales son las unicas que en teoria deberian ir acentuadas no necesitan validación.

	var regex = /^[a-zA-ZáéíóúüýñÁÉÍÓÚÜÑ\s]+$/;

	//test(); actua como un booleano.
	return regex.test(text);

}


/*var text = "WEIUDDUý eee"
*if (validarTexto(text)) {
* console.log("texto valido");
*} else {
*  console.log("texto inválido");
}*/

// <--- Esta funcion va a estar en la validación del número de télefono porque por lo general son 10 digitos

function validarLongitud(long, maxLong) {

	if (long.toString().length < maxLong) {
		console.log("largo valido");
		return true;
	}
	else {
		console.log("largo inválido")
		return false;
	}
}	

var long = 9511824052;
var maxLong = 11;
validarLongitud(long, maxLong);




// <-- Esta función va a estar en la fevha de nacimiento del formulario
function calcularEdad(fechaNacimiento) {
	var fechaNacimiento_arr = fechaNacimiento.split("/");
	var fechaNacimiento_date = new Date(fechaNacimiento_arr[2], fechaNacimiento_arr[1] - 1, fechaNacimiento_arr[0]);
	var ageDifMs = Date.now() - fechaNacimiento_date.getTime();
	var ageDate = new Date(ageDifMs);

	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var fechaNacimiento = "10/10/2008";
var edad = calcularEdad(fechaNacimiento);
console.log(edad)

// <--- Esta función no tengo ni idea donde estara
function esMayorDeEdad (edad) {

	if(edad >= 18){
		console.log("Eres mayor de edad :D ");
		return true;
	}
	else {
    		console.log("Eres menor de edad :( ");
		return false;
	}
}

esMayorDeEdad(edad);


//  <--- Esta validación ira tanto en el formulario como el login
function validarPassword(password){
	var valida = true;

	if ( password.length >= 8 ) {
        	console.log("longitud valida");
	} else {
		console.log("longitud inválida");
		valida = false;
	}

	if ( password.match(/[A-Z]/) ) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos una letra en Mayuscula");
		valida = false;
	}
	
	if ( password.match(/\d/) ) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos un numero");
		valida = false;
	}

	var espacios = false;
	var cont = 0;

	while (!espacios && (cont < password.length)) {
  		if (password.charAt(cont) == " ")
    		espacios = true;
  		cont++;
	}

	if (espacios) {
  		alert ("La contraseña no puede contener espacios en blanco");
  		return false;
	}

	if ( password.match(/[^a-z\#\&]+/g, "") ) {
		console.log("Correcto");
	} else {
		console.log("Debe tener al menos un caracter especial");
		valida = false;
	}

	return valida;
}

var password = "Hola12/";
validarPassword(password);

//  <--- Esta validación ira tanto en el formulario como el login

function validarPasswords(password, password2) {

	if (password.length == 0 || password2.length == 0) {
		console.log("Los campos de la password no pueden quedar vacios");
		return false;
	}

	if (password != password2) {
		console.log("Las passwords deben de coincidir");
		return false;
	} else {
		console.log("Todo esta correcto");
	return true; 
	}
}

var password2 = "Hola12/";
validarPasswords(password, password2);

//  <--- Esta validación ira en un evento secundario

function calcularTiempo(fecha){
	
	const fecha1 = new Date('1821, 09, 16');

	var fecha_arr = fecha.split("/");
	var fecha_date = new Date(fecha_arr[2], fecha_arr[1] - 1, fecha_arr[0]);

	var DifMs = fecha_date.getTime() - fecha1.getTime();

	var difYears = Math.floor(DifMs / (1000 * 60 * 60 * 24 * 365));
	var difDays = Math.floor(DifMs / (1000 * 60 * 60 * 24));

	return {
		Años: difYears, 
		Días: difDays
	};
}

var fecha = "10/10/2008";
var tiempo = calcularTiempo(fecha);
console.log(tiempo)



function mostrarError(idError, mensaje) {
	var elemento = document.getElementById(idError);
	elemento.textContent = mensaje;
	elemento.style.display = "block";
}

function ocultarError(idError) {
	var elemento = document.getElementById(idError);
	elemento.textContent = "";
	elemento.style.display = "none";
}

function soloDigitos(texto) {
	return texto.replace(/\D/g, "");
}


var formularioContacto = document.querySelector(".formulario");

if (formularioContacto) {
	formularioContacto.addEventListener("submit", function (evento) {
		evento.preventDefault();

		var nombre = document.getElementById("nombre").value.trim();
		var email = document.getElementById("email").value.trim();
		var telefono = document.getElementById("telefono").value.trim();
		var mensaje = document.getElementById("mensaje").value.trim();
		var mensajeGeneral = document.getElementById("mensaje-general");
		var formularioValido = true;

		if (nombre.length === 0 || !validarTexto(nombre)) {
			mostrarError("error-nombre", "Escribe un nombre válido (solo letras).");
			formularioValido = false;
		} else {
			ocultarError("error-nombre");
		}

		if (!validarEmail(email)) {
			mostrarError("error-email", "Escribe un email valido.");
			formularioValido = false;
		} else {
			ocultarError("error-email");
		}

		if (telefono.length > 0 && !validarLongitud(soloDigitos(telefono), 11)) {
			mostrarError("error-telefono", "El telefono debe tener maximo 10 digitos.");
			formularioValido = false;
		} else {
			ocultarError("error-telefono");
		}

		if (mensaje.length === 0) {
			mostrarError("error-mensaje", "Escribe tu mensaje.");
			formularioValido = false;
		} else {
			ocultarError("error-mensaje");
		}

		if (formularioValido) {
			mensajeGeneral.style.color = "green";
			mensajeGeneral.textContent = "¡Mensaje enviado correctamente!";
			formularioContacto.reset();
		} else {
			mensajeGeneral.style.color = "#c00";
			mensajeGeneral.textContent = "Revisa los campos marcados en rojo.";
		}
	});
}


var formularioLogin = document.querySelector(".formulario-login");

if (formularioLogin) {
	formularioLogin.addEventListener("submit", function (evento) {
		evento.preventDefault();

		var nombre = document.getElementById("nombre-login").value.trim();
		var fechaNacimientoInput = document.getElementById("fecha-nacimiento").value.trim();
		var telefono = document.getElementById("telefono-login").value.trim();
		var email = document.getElementById("email-login").value.trim();
		var password = document.getElementById("password").value;
		var password2 = document.getElementById("password2").value;
		var mensajeGeneral = document.getElementById("mensaje-general-login");
		var formularioValido = true;

		if (nombre.length === 0 || !validarTexto(nombre)) {
			mostrarError("error-nombre-login", "Escribe un nombre valido (solo letras).");
			formularioValido = false;
		} else {
			ocultarError("error-nombre-login");
		}

		var edad = calcularEdad(fechaNacimientoInput);

		if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fechaNacimientoInput) || isNaN(edad) || !esMayorDeEdad(edad)) {
			mostrarError("error-fecha-nacimiento", "Usa el formato dd/mm/aaaa y sé mayor de edad.");
			formularioValido = false;
		} else {
			ocultarError("error-fecha-nacimiento");
		}

		if (!validarLongitud(soloDigitos(telefono), 11) || soloDigitos(telefono).length === 0) {
			mostrarError("error-telefono-login", "El teléfono debe tener máximo 10 dígitos.");
			formularioValido = false;
		} else {
			ocultarError("error-telefono-login");
		}

		if (!validarEmail(email)) {
			mostrarError("error-email-login", "Escribe un email válido.");
			formularioValido = false;
		} else {
			ocultarError("error-email-login");
		}

		if (!validarPassword(password)) {
			mostrarError("error-password", "Mínimo 8 caracteres, una mayúscula, un número y un carácter especial.");
			formularioValido = false;
		} else {
			ocultarError("error-password");
		}

		if (!validarPasswords(password, password2)) {
			mostrarError("error-password2", "Las contraseñas deben coincidir.");
			formularioValido = false;
		} else {
			ocultarError("error-password2");
		}

		if (formularioValido) {
			mensajeGeneral.style.color = "green";
			mensajeGeneral.textContent = "¡Sesión iniciada correctamente! Llevas " + calcularTiempo(fechaNacimientoInput).Días + " días desde 1821.";
		} else {
			mensajeGeneral.style.color = "#c00";
			mensajeGeneral.textContent = "Revisa los campos marcados en rojo.";
		}
	});
}
