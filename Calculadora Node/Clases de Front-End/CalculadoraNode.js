class _Operacion {
	constructor (_numero1,_numero2 ){
		this.numero1=_numero1;
		this.numero2=_numero2;
	}
	
	suma()
	{
		var objetoenviar = this;
		//Regresa la promesa
		return new Promise(function(resolve, reject){
			
			try {
				
				var xhr = new XMLHttpRequest();
				
				//Esta funcion llama al localhost y llama a la operacion sumar
				
		xhr.open('POST', 'http://localhost:8080/Asuma');
		xhr.setRequestHeader('Content-Type', 'application/json');
				
				//Esta funcion carga la respuesta de la suma
				
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
			else
			{
				reject(xhr);				
			}
		};
				xhr.send(JSON.stringify(objetoenviar));
			}
			//Esta parte carga el error en caso de que no funcione 
			catch (err){
				reject(err.message)
			}
		});
	}
	
	resta()
	{
		var objetoenviar = this;
		//Regresa la promesa
		return new Promise(function(resolve, reject){
			
			try {
				
				var xhr = new XMLHttpRequest();
				
				//Esta funcion llama al localhost y llama a la operacion restar
				
		xhr.open('POST', 'http://localhost:8080/Aresta');
		xhr.setRequestHeader('Content-Type', 'application/json');
				
				//Esta funcion carga la respuesta de la resta
				
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
			else
			{
				reject(xhr);				
			}
		};
				xhr.send(JSON.stringify(objetoenviar));
			}
			catch (err){
				reject(err.message)
			}
		});
	}
	
	multiplicacion()
	{
		var objetoenviar = this;
		//Regresa la promesa
		return new Promise(function(resolve, reject){
			
			try {
				
				var xhr = new XMLHttpRequest();
				
				//Esta funcion llama al localhost y llama a la operacion multiplicar
				
		xhr.open('POST', 'http://localhost:8080/Amultiplicacion');
		xhr.setRequestHeader('Content-Type', 'application/json');
				
				//Esta funcion carga la respuesta de la multiplicacion
				
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
			else
			{
				reject(xhr);				
			}
		};
				xhr.send(JSON.stringify(objetoenviar));
			}
			catch (err){
				reject(err.message)
			}
		});
	}
	
	division()
	{
		var objetoenviar = this;
		return new Promise(function(resolve, reject){
			
			try {
				
				var xhr = new XMLHttpRequest();
				
				//Esta funcion llama al localhost y llama a la operacion dividir
				
		xhr.open('POST', 'http://localhost:8080/Adivision');
		xhr.setRequestHeader('Content-Type', 'application/json');
				
				//Esta funcion carga la respuesta de la division
				
		xhr.onload = function() {
			if (xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
			else
			{
				reject(xhr);				
			}
		};
				xhr.send(JSON.stringify(objetoenviar));
			}
			catch (err){
				reject(err.message)
			}
		});
	}
}


//Las funciones presentes a continuación son las de la calculadora con promesas, no necesitan ningún cambio.
function num(numero){
	document.getElementById("desplegar").value=document.getElementById("desplegar").value +=numero;
}

function suma(){
	numero1=parseInt(document.getElementById("desplegar").value);
	signo='+';
	document.getElementById("desplegar").value="";
}

function resta(){
	numero1=parseInt(document.getElementById("desplegar").value);
	signo='-';
	document.getElementById("desplegar").value="";
}

function multiplicacion(){
	numero1=parseInt(document.getElementById("desplegar").value);
	signo='*';
	document.getElementById("desplegar").value="";
}

function division(){
	numero1=parseInt(document.getElementById("desplegar").value);
	signo='/';
	document.getElementById("desplegar").value="";
}

function igual(){
	numero2=parseInt(document.getElementById("desplegar").value);
	let claseoperacioninstaciada=new _Operacion(numero1,numero2);

	//Este switch se encarga de eligir la operación de acuerdo a lo digitado por el usuario.
	
	switch(signo){
		case '+':
		document.getElementById("desplegar").value=claseoperacioninstaciada.suma().then(function(response)
		{
			document.getElementById('desplegar').value=response;
		},function(error)
		{
			document.getElementById("desplegar").value="Hizo algo mal";
		});
		break;

		case '-':
		document.getElementById("desplegar").value=claseoperacioninstaciada.resta().then(function(response)
		{
			document.getElementById('desplegar').value=response;
		},function(error)
		{
			document.getElementById("desplegar").value="Hizo algo mal";
		});
		break;

		case '*':
		document.getElementById("desplegar").value=claseoperacioninstaciada.multiplicacion().then(function(response)
		{
			document.getElementById('desplegar').value=response;
		},function(error)
		{
			document.getElementById("desplegar").value="Hizo algo mal";
		});
		break;
		case '/':
		document.getElementById("desplegar").value=claseoperacioninstaciada.division().then(function(response)
		{
			document.getElementById('desplegar').value=response;
		},function(error)
		{
			document.getElementById("desplegar").value="Hizo algo mal";
		});
		break;
	}
}
