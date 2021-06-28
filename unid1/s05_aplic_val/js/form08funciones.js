function verTablas(turnoElegido, mtzAlumnos)
{
    
	
}
 
function fnGenero(xGenero){
    var xGenero = document.getElementById("lstGenero").value;
    if(xGenero=="")
    {
        alert("Seleccione GENERO...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value; 
    if(xResult=="" || xResult==0)
    {
        alert("Revice... Resultado ¿0 o VACIO?)");
        return false;
    }    
    /// Caso contrario /// 
    return true; 
	
}

function borrarMarco(){
    var xGenero = document.getElementById("lstGenero").value;
    if(xGenero=="")
    {
        alert("Seleccione GENERO...");
        return false;
    }
    var xResult = document.getElementById("txtResult").value; 
    if(xResult=="" || xResult==0)
    {
        alert("Revice... Resultado ¿0 o VACIO?)");
        return false;
    }    
    /// Caso contrario /// 
    return true; 
	
}