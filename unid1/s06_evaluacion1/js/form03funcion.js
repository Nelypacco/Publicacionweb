function fnGenerarTabla(res,num,nom,ape,tur,gen)
{
	
	document.write("<table border='1'>");
		document.write("<tr>");
			document.write("<th colspan='3' class='titulo'>Datos Generales</th>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>Apellidos</td>");
			document.write("<td rowspan='3' id='tdIzq'><img src='img/f"+num+".jpg' width='200'></td>");
			document.write("<td>"+ape+"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>Nombres</td>");
			document.write("<td>"+nom+"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>Generos</td>");
			document.write("<td>"+gen+"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>Turno</td>");
			document.write("<td id='tdIzq'>"+res+"</td>");
			document.write("<td>"+tur+"</td>");
		document.write("</tr>");
	document.write("</table>");


}

function fnTurno(turno)
{
	switch(turno)
	{
		case 'M': return "Día"; break;
		case 'N': return "Noche"; break;
		default: return "???"; break;
	}
}

function fnGenero(genero)
{
	switch(genero)
	{
		case 'M': return "Masculino"; break;
		case 'F': return "Femenino"; break;
		default: return "???"; break;
	}
}