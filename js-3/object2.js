let persona = {
	nombre : "Daryani Villota",
	edad : 36,
	ciudad : "Bogota",
	profesion : "Ingeniero de Sistemas",
};

console.log(persona);

function presentacion (persona){
	return "Mi nombre es " + persona.nombre + " tengo " + persona.edad + " años" + " y vivo en " + persona.ciudad;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["musica", "viajar", "deportes"];

console.log("hobbies: " + persona.hobbies);

console.log("hobbies en for");

for (let i = 0; i < persona.hobbies.length; i++) {
	console.log(persona.hobbies[i]);
}

