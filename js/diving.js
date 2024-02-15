/********************************************
 *    función de validación
 */


function validacion(){
    let correcto = true; //todo esta bien hasta... 
    let nombre = document.getElementById('nombre').value; //getter
    let apellidos = document.getElementById('apellidos').value; 
    let email = document.getElementById('email').value; 
    let terminos = document.getElementById('terminos'); //no cojo value porque no estoy escribiendo ni escogiendo



   //document es un objeto get es un getter, coge del objeto document coge un dato, un nodo
   //el nodo es todo el campo, todo lo que tiene los atributos , los estilos colores, border, todo lo relacionado con ese input
    //(nombre).style.visibility cogeria el style y modificacria la visibilidad
    //value es lo que yo he tecleado y lo cogo y lo llamo nombre (la variable)
 
    if(nombre=="" || /^\s+$/.test(nombre) || /[0-9]/.test(nombre) || !/[a-zñ']{2,}/i.test(nombre)){//regex para espacios en blanco o separadores
        //get si se usa a la derecha del igual es un getter si esta a la izquierda es un setter
        //typescript es js mejorado con tipos de declaraciones serias
        document.getElementById('nombreHelp').style.visibility="visible";
        document.getElementById("nombre").style.borderColor="red";
        correcto = false;
       // no deberia irse de la funcion aqui, pero si señalar el error return false;

    }
     if(apellidos=="" ||/^\s+$/.test(apellidos)|| /[0-9]/.test(apellidos)|| !/[a-zñ']{2,}/i.test(apellidos)){
        
        document.getElementById('apellidosHelp').style.visibility="visible";
        document.getElementById("apellidos").style.borderColor="red";
        correcto = false;
        // no deberia irse de aqui, deberia solo marcar campos en rojosreturn false;
    }

     if(email=="" ||!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)){
        
        document.getElementById('emailHelp').style.visibility="visible";
        document.getElementById("email").style.borderColor="red";
        correcto = false;
        // no deberia irse de aqui, deberia solo marcar campos en rojosreturn false;
    }
 
if(!terminos.checked ){ //si no marco aceptar terminos entonces 
        
        document.getElementById('terminosHelp').style.visibility="visible";
        document.getElementById("terminos").style.borderColor="red";
        correcto = false;
        // no deberia irse de aqui, deberia solo marcar campos en rojosreturn false;
    }
    return correcto;
}
function resetear(id){ 

     document.getElementById(id+'Help').style.visibility="hidden";//concateno el id con 'Help' para que cree el nombre de la variable 
    document.getElementById(id).style.borderColor="lightgray";
}
 
