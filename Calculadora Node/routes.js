var controllercalculadora = require('./controllercalculadora.js');

// Esta función llama a las operaciones, dependiendo de lo elegido por el usuario.

module.exports = function(app){
	
	app.post('/Asuma',controllercalculadora.suma);
	
	app.post('/Aresta',controllercalculadora.resta);
	
	app.post('/Amultiplicacion',controllercalculadora.multiplicacion);
	
	app.post('/Adivision',controllercalculadora.division);
};