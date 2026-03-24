<?php

namespace App;

use Mpdf\Mpdf;

class GeradorPdf
{
    public function gerarPdf(string $nome)
    {
        $mpdf = new Mpdf();

        $html = "<h1>Olá, $nome!</h1>";
        $html .= "<p>PDF gerado com Composer + OO</p>";

        $mpdf->WriteHTML($html);
        $mpdf->Output("resultado.pdf", "F");
    }
}