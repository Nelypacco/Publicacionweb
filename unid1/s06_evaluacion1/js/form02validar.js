
    function fnValidar02()
{

    let xTexto=document.getElementById("txtNumero").value;
    if(xTexto ==""){
        alert("Falta Numero");
        return false;}

    var elementoEstado = document.getElementsByName("rdGenero");
    var seleccionado = false;
    var valorSeleccionado="";
    for( var i=0;i <elementoEstado.length;i++)
    {
        if(elementoEstado[i].checked)
        {
            valorSeleccionado = elementoEstado[i].value;
            seleccionado= true;
        }
    }
    if(!seleccionado){
        alert("Elije Genero");
        return false;
    }
    
    let elementoPref=document.getElementsByName("chkPref[]");
    let conta=0;
    for(var i=0; i< elementoPref.length;i++){
        if(elementoPref[i].checked){
            conta++;
        }
    }
    if(conta !=3){
        alert(`ELEGIR SOLO 3 opciones...NO : ${conta}`);
        return false;
    }else{
        alert("Su preferencia elegida es"+ valorElegidoPreferencia);
    }

  return true;


}


  