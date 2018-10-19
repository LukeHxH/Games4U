function validar () {
	var podeValidar = true;
	if(document.formulario.op.value == '') {
		podeValidar = false;
		alert("Escolha alguma alternativa para submeter!");
	}
	return podeValidar;
}