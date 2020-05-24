window.addEventListener('load',function(){
    let formulario = document.querySelector('.formulario').addEventListener('submit',ReadDatos);
    var div_data = this.document.querySelector('#datos_info');
    function ReadDatos(e){

        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = Number(document.querySelector('#edad').value);

        div_data.style.display = 'block';

        var data_nom = document.querySelector('#data_nom span');
        var data_ape = document.querySelector('#data_ape span');
        var data_eda = document.querySelector('#data_eda span');

          data_nom.innerHTML = nombre;
          data_ape.innerHTML = apellido;
          data_eda.innerHTML = edad.toString();    
          
          Datos(nombre,apellido,edad);

        e.preventDefault();
    }

    function Datos(nombre,apellido,edad){
        if(nombre.trim().length==''){
            alert("Ingrese Llene los Campos");
            return false;
           }
    
           if(apellido.trim().length==''){
            alert("Ingrese su apellido por favor");
            return false;
           }
    
           if(edad.trim().length<=0 || isNaN(edad)){
                alert('Ingrese un numeros correctos');
                return false;
           }
    }
});