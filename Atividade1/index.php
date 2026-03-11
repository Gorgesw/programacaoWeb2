<?php
echo("DADOS DA REQUISIÇÃO:<br>");
echo('Nome: '.$_REQUEST['nome']);
echo('<br>Telefone: '.$_REQUEST['telefone']);
echo('<br>Email: '.$_REQUEST['email']);
echo('<br>Mensagem: '.$_REQUEST['mensagem']);


echo("<br>");

echo "<br>Método da requisição: " . $_SERVER['REQUEST_METHOD'];
echo "<br>URL da requisição: " . $_SERVER['REQUEST_URI'];

?>