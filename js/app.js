window.addEventListener("load", function() {
	var resultado=document.getElementById('resultado');
	resultado.addEventListener("click",function(){
    	var nombre=document.getElementById('nombre').value;
    	var edad=parseInt(document.getElementById('edad').value);
    	var sexo=document.getElementById('sexo').value;
    	var imprimir=document.getElementById('imprimir');
    	var persona = new EntidadPersona(nombre, edad, sexo);
    	imprimir.innerHTML=persona.datos();
	});
    function EntidadPersona(nombre,edad,sexo){
    	this.nombre=nombre;
    	this.edad= edad;
    	this.sexo= sexo;
    	this.mayor_edad=(this.edad >=18);
    	this.datos= function(){
    		if(this.mayor_edad){			
    			 return " Hola, mi nombre es"+ this.nombre+ ", "+ "tengo "+ this.edad+ " años y soy mayor de edad"; 
    		}else{
   	
    			 return " Hola, mi nombre es"+ this.nombre+ ", "+ "tengo "+ this.edad+ " años y soy menor de edad";  
    		}
    	};
    	
    }      
});


