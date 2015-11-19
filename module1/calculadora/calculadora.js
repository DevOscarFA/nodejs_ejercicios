var operation = prompt("Operación a realizar \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Divición");
operation = parseInt(operation);

if(operation == '' && operation <= 0){
	alert("No ha seleccionado una operación valida!");
}else{
	var cuantity;
	var array = [];
	if(operation == 1){
		cuantity = prompt("Cantidad de números a sumar.");
		array = getData(cuantity);
		var resAdd =  addData(array);
		alert("Resultado de la suma es "+resAdd)
	}else if(operation == 2){
		cuantity = prompt("Cantidad de números a restar.");
		array = getData(cuantity);
		var resSubtract =  subtractData(array);
		alert("Resultado de la resta es "+resSubtract)
	}else if(operation == 3){
		cuantity = prompt("Números a multiplicar.");
		if(cuantity != 2){
			alert("Tiene que ser dos números");
		}else{
			array = getData(cuantity);
			var resMult = multiplyData(array);
			alert("Resultado de la multiplicacion es "+resMult)
		}
	}else if(operation == 4){
		cuantity = prompt("Números a divición.");
		if(cuantity != 2){
			alert("Tiene que ser dos números");
		}else{
			array = getData(cuantity);
			var resDiv = divideData(array);
			alert("Resultado de divición es "+resDiv)
		}
	}
}

function getData(cuantity){
	var array = [];
	for(var i = 0 ; i < cuantity; i++){
		var number = prompt("Ingrese los números");
		array[i] = number;
	}
	return array;
}

function addData(array){
	var result = 0;
	for(var i in array){
		result += parseInt(array[i]);
	}
	return result;
}

function subtractData(array){
	var result = 0;
	for(var i in array){
		result -= parseInt(array[i]);
	}
	return result;
}

function multiplyData(array){
	var result = 1;
	for(var i in array){
		result *= parseInt(array[i]);
	}
	return result;
}

function divideData(array){
	var result = array[0];
	console.log(array.length);
	for(var i = 1; i < array.length; i++ ){
		result = parseInt(result) / parseInt(array[i]);
	}
	return result;
}