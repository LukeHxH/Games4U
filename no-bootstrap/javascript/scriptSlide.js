var nmrImagens = 3; // Definindo o número de imagens
var delayImagens = 3; // Definindo o número de segundos para a troca de imagem

function carregarImg () {
	imagemAtual = 0; // Diz a imagem que está sendo mostrada no momento na tela
	vetorImagens = new Array();
	vetorImagens[0] = document.getElementById("img1");
	vetorImagens[0].style.visibility = "visible";

	document.getElementById("l"+0).style.visibility = "visible"; // Colocando a primeira imagem visível

	for (var i = 1; i < nmrImagens; i++) {
        vetorImagens[i] = document.getElementById("img" + (i + 1)); /* Pegando as imagens de acordo com o index do for */
        // Essas imagens estão sendo armazenadas no vetor 'vetorImagens'
        document.getElementById("l" + i).style.visibility = "visible";
        /* Pegando os círculos que ficam no topo do slide de acordo com o index do for */
    }

    document.getElementById("l" + 0).style.backgroundColor = "rgba(255, 255, 255, 0.90)"; 
    // Colocando o estilo para os círculos que ficam no topo do slide
    document.getElementById("legenda" + imagemAtual).style.visibility = "visible";
    // Colocando a legenda para tal foto visível

    temporizador = setInterval(Timer, delayImagens*1000);
    // Setando o tempo para a transição do slide
    passarSlide(); // Chamando a função que faz o efeito de passar o slide
}

function Timer() {
    imagemAtual++;
    if (imagemAtual == nmrImagens)
        imagemAtual = 0;
    passarSlide(); // Chamando a função que faz o slide passar
}
// Indo para a próxima imagem
function proxima() {
	imagemAtual++;
	if (imagemAtual == nmrImagens)
	    imagemAtual = 0;
	/* 
		No caso, quando o slide estiver na última imagem, quando o usuário clicar na seta de avançar,
		o imagemAtual terá seu valor igual a 4 (maior que o número de imagens).

		Então, um novo valor tem que passado à esta variável, já que é para exibir a primeira imagem do slide.

		Assim, o novo valor de imagemAtual tem que ser o correspondente à posição da primeira imagem, ou seja, 0.
	*/
	passarSlide(); // Chamando a função que faz o slide passar

	clearInterval(temporizador); // Limpado o temporizador para quando o usuário clicar no botão de passar slide
	temporizador = setInterval(Timer, delayImagens*1000);
}
//Retornando à imagem anterior
function anterior() {
	imagemAtual--; // Diminui a posição da imagem atual
	if (imagemAtual == -1)
	    imagemAtual = nmrImagens - 1;
	/* 
		No caso, quando o slide estiver na primeira imagem, quando o usuário clicar na seta de voltar,
		o imagemAtual terá seu valor igual a -1.

		Então, um novo valor tem que passado à esta variável, já que é para exibir a última imagem do slide.

		Assim, o novo valor de imagemAtual tem que ser o correspondente à posição da última imagem, ou seja,
		o total de imagens-1, já que para as posições, o 0 conta como a primeira.
	*/
	passarSlide(); // Chamando a função que faz o slide passar

	clearInterval(temporizador); // Limpado o temporizador para quando o usuário clicar no botão de voltar slide
	temporizador = setInterval(Timer, delayImagens*1000);
}
// Funções para as bolinhas de cima
function primeiraImagem() {
	imagemAtual = 0; // A imagem atual será a primeira, que estará na posição 0 do vetorImagens
	passarSlide();

	clearInterval(temporizador);
	temporizador = setInterval(Timer, delayImagens*1000);
}

function segundaImagem() {
	imagemAtual = 1; // A imagem atual será a segunda, que estará na posição 1 do vetorImagens
	passarSlide();

	clearInterval(temporizador);
	temporizador = setInterval(Timer, delayImagens*1000);
}

function terceiraImagem() {
	imagemAtual = 2; // A imagem atual será a terceira, que estará na posição 2 do vetorImagens
	passarSlide();

	clearInterval(temporizador);
	temporizador = setInterval(Timer, delayImagens*1000);
}

function passarSlide () { // Função para fazer o slide passar
	for (var i = 0; i < nmrImagens; i++) {
		vetorImagens[i].style.opacity = "0";
		vetorImagens[i].style.visibility = "hidden";

		document.getElementById("l" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
		document.getElementById("legenda" + i).style.visibility = "hidden";
	}
	vetorImagens[imagemAtual].style.opacity = "1"; // Colocando a imagem que está na posição 'imagemAtual' para ficar visível
	vetorImagens[imagemAtual].style.visibility = "visible";
	document.getElementById("l" + imagemAtual).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
	// Cor para o círculo que está localizado no topo correspondente à imagem atual
	document.getElementById("legenda" + imagemAtual).style.visibility = "visible";
	// Legenda correspondente à imagem atual visível
}