<?php

require __DIR__ . '/vendor/autoload.php';

use App\GeradorPdf;

$pdf = new GeradorPdf();
$pdf->gerarPdf("Kaue");

echo "PDF gerado com sucesso!";