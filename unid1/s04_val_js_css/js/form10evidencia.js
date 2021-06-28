const fnValidar10 = () => {
    const fnValidar10 = () => {
        var xTexto = document.getElementById("txtTexto").value;
        if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(xTexto))) {
        alert("Escribe CORREO valido...");
        return false;
    }
    
        var xEdad= document.getElementById("txtEdad").value;
        if(!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(xEdad))) {
        alert("Escribe CORREO valido...");
        return false;
    }

    /// Caso contrario ///

    return true;
    }

}