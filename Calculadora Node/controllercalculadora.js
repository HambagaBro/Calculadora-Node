class _Operacion {

//La clase operacion posee los 2 numeros que se van a utlizar, especificamente en el constructor. //
	constructor(_numero1,_numero2){
		// Se debe poner un "this." antes de cada variable siempre //
	this.numero1=_numero1;
	this.numero2=_numero2;
	}
	suma(){
		//Esta operacion realiza una suma
		return this.numero1+this.numero2;
	}
	resta(){
		//Esta operacion realiza una resta
		return this.numero1-this.numero2;
	}
	multiplicacion(){
		//Esta operacion realizar una multiplicacion
		return this.numero1*this.numero2;
	}
	division(){
		//Esta operacion realiza una divison
		return this.numero1/this.numero2;
	}
}
//Request y Response son funciones anonimas// 
exports.suma= function(req, res){
    
    let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
    res.json(claseinstanciada.suma());
}
//A partir de esta parte se repite, y solo cambia la funcion dependiendo de la operacion//
//que el usuario quiera realizar.//

exports.resta= function(req, res){
    
    let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
    res.json(claseinstanciada.resta());
}

exports.multiplicacion= function(req, res){
    
    let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
    res.json(claseinstanciada.multiplicacion());
}

exports.division= function(req, res){
    
    let claseinstanciada = new _Operacion(req.body.numero1,req.body.numero2);
    res.json(claseinstanciada.division());
}






