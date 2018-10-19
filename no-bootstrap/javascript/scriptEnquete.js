function validarEnquete() {

	var podeValidar = true;
	var textoEnquete = document.formLogin.txtArea.value.trim();
	//trim() faz que não haja espaços nem antes e nem depois do texto digitado


	if (textoEnquete == "") { 
		// Verificando se o campo está vazio
		podeValidar = false;
		document.getElementsByTagName('span')[0].innerHTML = "Escreva algo...";
		document.formLogin.txtArea.focus();
		// Se estiver vazio, uma mensagem será exibida num 'span' na página
	} else {
		document.getElementsByTagName('span')[0].innerHTML = ""; // Retirando o que estiver escrito no span de erros
		//Como só há 1 span na página, foi utilizado o getElementsByTagName, que retorna o único span

		String.prototype.toCapitalize = function() {
			// PS: Esta foi uma solução encontrada por pesquisa na internet para resolver um problema

			/*
				Esta função faz que as primeiras letras de uma string fiquem maiúsculas e as outras minúsculas:

				Ex: "mInHa StRiNg" --> "Minha String"

			*/
			return this.toLowerCase().replace(/^.|\s\S/g, function(string) { return string.toUpperCase(); });
		}
		var jogo1 = "1 ON 1 SOCCER".toCapitalize();
		var jogo2 = "BOB ESPONJA".toCapitalize();
		var jogo3 = "FEUDALISM".toCapitalize();
		var jogo4 = "HAUNT THE HOUSE".toCapitalize();
		var jogo5 = "INCURSION".toCapitalize();
		var jogo6 = "PLANET RACERS".toCapitalize();
		var jogo7 = "TROLLFACE QUEST".toCapitalize();
		textoEnquete = textoEnquete.toCapitalize();
		// Ao declarar estas variáveis, pego os nomes de cada jogo para verificar se o que o usuário digitou contém um dos mesmos

		/*
			Primeiramente, uso a função 'to capitalize()' para o nome dos jogos, deixando-os num formato
			E depois, utilizo a mesma função para 'capitalizar' o texto que o usuário digitou
			Dessa forma, os nomes dos jogos e o que o usuário digitou ficam no mesmo formato, facilitando a comparação
		*/

		if(textoEnquete.search(jogo1) == -1 && textoEnquete.search(jogo2) == -1 && textoEnquete.search(jogo3) == -1 
			&& textoEnquete.search(jogo4) == -1 && textoEnquete.search(jogo5) == -1 && textoEnquete.search(jogo6) == -1
			&& textoEnquete.search(jogo7) == -1) {
				// Fazendo a verificação para ver se existe um dos jogos dentro do texto que o usuário digitou
				podeValidar = false;
				document.formLogin.txtArea.focus();
				document.getElementsByTagName('span')[0].innerHTML = "Você não digitou nenhum de nossos jogos!";
		}
	}
	document.formLogin.txtArea.value = "";
	return podeValidar;
}

function limparSpan() {
	document.getElementsByTagName('span')[0].innerHTML = "";
	document.formLogin.txtArea.focus(); // Focar a textArea

	// Função para limpar o que está escrito no span que mostra as mensagens de erro quando o usuário clicar no botão 'reset'
}