<?php 
	$connection = mysqli_connect("127.0.0.1","root","","bancoautweb");
	$op = $_POST['op'];
	$jogo = $_POST['jogo'];

	$query = "call inserirAvaliacao('$op', '$jogo')";
	$result = mysqli_query($connection, $query);

	if ($result) {
		header('Location: index.html');
	} else {
		echo mysqli_error($connection);
	}
?>