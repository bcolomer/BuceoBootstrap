/********************************************
 *  funcion sonido burbujas
 ******************************************/ 
function sound(element){
  document.getElementById(element).play();
}
function silence(element){
  document.getElementById(element).pause();
}



/********************************************
 *    función de validación
 *******************************************/


function validacion(){
    let correcto = true;  
    let nombre = document.getElementById('nombre').value; 
    let apellidos = document.getElementById('apellidos').value; 
    let email = document.getElementById('email').value; 
    let terminos = document.getElementById('terminos'); 

    if(nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/i.test(nombre)){
        document.getElementById('nombreHelp').style.visibility="visible";
        document.getElementById("nombre").style.borderColor="red";
        correcto = false;
    }

    if(apellidos=="" ||/^\s+$/.test(apellidos)|| /[0-9]/.test(apellidos)|| !/[a-zñ']{2,}/i.test(apellidos)){
        
        document.getElementById('apellidosHelp').style.visibility="visible";
        document.getElementById("apellidos").style.borderColor="red";
        correcto = false;
    }

    if(email=="" ||!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)){
        
        document.getElementById('emailHelp').style.visibility="visible";
        document.getElementById("email").style.borderColor="red";
        correcto = false;
    }

    if(!terminos.checked ){  
        
        document.getElementById('terminosHelp').style.visibility="visible";
        document.getElementById("terminos").style.borderColor="red";
        correcto = false;
    }
    return correcto;
}

function resetear(id){ 

    document.getElementById(id+'Help').style.visibility="hidden"; 
    document.getElementById(id).style.borderColor="lightgray";
}

