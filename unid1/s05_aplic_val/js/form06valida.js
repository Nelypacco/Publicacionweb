function fnValidar06()
{
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
   

    function verConteo(genero, mtzAlumnos)
    {
        contadorGenero = 0;
        if(mtzAlumnos.length > 0){
        mtzAlumnos.forEach(element => {
            if(element [3]==genero){
            contadorGenero++;
        }
    });
    //Por que es equivalente
/*  for (var i=0; i < mtzAlumnos.length; i++) { 
        mtzGenero - atzAlumnos[i][3]; //Genero
        if(mtzGenero == genero){
            contadorGenero++;
        }
    }                                                            */
    }                                                                        
    document.getElementById("txtResult").value = contadorGenero;
         
}
