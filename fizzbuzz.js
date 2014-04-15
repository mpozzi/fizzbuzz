/*fizzbuzz - Mario Pozzi*/
function recuperar(){
	
	if (localStorage.length != 0){
		//Números Limites
		$('#param1').val(localStorage.getItem("param1"));
		$('#param2').val(localStorage.getItem("param2"));
		
		//Multiplos
		$('#mult1').val(localStorage.getItem("mult1"));
		$('#mult2').val(localStorage.getItem("mult2"));
		$('#mult3').val(localStorage.getItem("mult3"));
		
		//Identificadores
		$('#ident1').val(localStorage.getItem("ident1"));
		$('#ident2').val(localStorage.getItem("ident2"));
		
	}else{
		alert('No hay datos almacenados');	
	}
}
function ordenar(par1,par2){
	if ( isNaN(par1) || isNaN(par2) ){
		alert('Debe completar con numeros los parametros');
		return false;
	}else{
		par1 = parseInt(par1);
		par2 = parseInt(par2);
		console.log('ordenar',par1,par2);
		if (par1 != par2){
			console.log('entro al if', par1,par2);
			if (par1 < par2){
				console.log('entro al MENOR');
				param1 = par1;
				param2 = par2;
			}else if (par1 > par2){
				console.log('entro al MAYOR');
				param1 = par2;
				param2 = par1;
			}
		}	
		 var ordenado = new Array();
		 ordenado.push(param1,param2);
		 console.log(ordenado);
		 return ordenado;
	}
}
function borrar(){
	localStorage.clear();
}
function guardar(){
	console.log('guardo');
	var param1 = $('#param1').val();
	var param2 = $('#param2').val();
	localStorage.setItem("param1",param1); 
	localStorage.setItem("param2",param2);
	
	//Multiplos
	var mult1 = $('#mult1').val();
	var mult2 =	$('#mult2').val();
	var mult3 =	$('#mult3').val();
	localStorage.setItem("mult1",mult1); 
	localStorage.setItem("mult2",mult2); 
	localStorage.setItem("mult3",mult3);
		
		//Identificadores
	var ident1 = $('#ident1').val();
	var ident2 = $('#ident2').val();
	localStorage.setItem("ident1",ident1);
	localStorage.setItem("ident2",ident2);
}
function muestreo(){
	var ordenado = new Array();
	var param1 = $('#param1').val();
	var param2 = $('#param2').val();
	
	//Multiplos
	var mult1 =	$('#mult1').val();
	var mult2 =	$('#mult2').val();
	var mult3 =	$('#mult3').val();
		
		
		//Identificadores
	var ident1 = $('#ident1').val();
	var ident2 = $('#ident2').val();
	
	if (param1 == "" || param2 == "" || mult1 == "" || mult2 == "" || mult3 == ""){
		alert('Debe completar todos los campos');
	}else{
	
		console.log(param1);
		console.log(param2);
		
		var tabla = new Array();
		
		ordenado = ordenar(param1,param2);
		
		console.log('desp de funcion',ordenado);
		param1 = ordenado[0];
		param2 = ordenado[1];
		
		
		console.log(param1,'',param2);
		var i = param1;
		while(i >=param1 && i <= param2){
			console.log('paso',i);
		    if (i % mult3 == 0){
		    	console.log(ident1+ident2);
		        tabla.push(ident1+ident2);
		    }
		    else if (i % mult2 == 0){
		    	console.log(ident1);
		        tabla.push(ident1);
		    }
		    else if (i % mult1 == 0){
		    	console.log(ident2);
		        tabla.push(ident2);
		    }
		    else{
		        console.log(i);
		        tabla.push(i);
		    }
			i++;
		}
		alert(tabla);				
			
		}
	}
	
function maximin(){
	$('#mult1').attr('min',param1);
	$('#mult1').attr('max',param2);
	$('#mult2').attr('min',param1);
	$('#mult2').attr('max',param2);
	$('#mult3').attr('min',param1);
	$('#mult3').attr('max',param2);
}

    $(document).ready(function(){
        
        $('#form_test').html5form({
            allBrowsers : true,
            responseDiv : '#response',
            messages: 'es',
            method : 'GET',
            colorOn :'#6b6764',
            colorOff :'#0d85a5'
        });
	    
        
    });
	    $('#param1').on('blur', function () {
	    	var param1 = document.getElementById('param1').value;
			var param2 = document.getElementById('param2').value;
			
			ordenar(param1,param2);
			maximin();		
		
		});
	 	$('#param2').on('blur', function () {
	    	var param1 = document.getElementById('param1').value;
			var param2 = document.getElementById('param2').value;
			
			ordenar(param1,param2);
	    	maximin();
		
		//    alert("changed1");
		});
		$('#mult1').on('blur', function (e) {
	    	var param1 = document.getElementById('param1').value;
			var param2 = document.getElementById('param2').value;
			var mult1 = document.getElementById('mult1');
			if (mult1.value < param1 || mult1.value > param2){
				mult1.value = "";
			}
		});
		$('#mult2').on('blur', function (e) {
	    	var param1 = document.getElementById('param1').value;
			var param2 = document.getElementById('param2').value;
			var mult2 = document.getElementById('mult2');
			if (mult2.value < param1 || mult2.value > param2){
				console.log(mult2.value);
				mult2.value = "";
			}
		});
		$('#mult3').on('blur', function (e) {
	    	var param1 = document.getElementById('param1').value;
			var param2 = document.getElementById('param2').value;
			var mult3 = document.getElementById('mult3');
			if (mult3.value < param1 || mult3.value > param2){
				mult3.value = "";
			}
		});
	
