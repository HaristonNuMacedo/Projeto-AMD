<?php
//FORMATA A DATA QUE VEM DO MYSQL
function vemdata($qqdata){
	$tempdata=substr($qqdata,8,2).'/'.
		  substr($qqdata,5,2).'/'.
		  substr($qqdata,0,4);
	return($tempdata);
}

//FORMATA A DATA PARA O MYSQL
function vaidata($qqdata){
	$tempdata=substr($qqdata,4,4).'/'.
                  substr($qqdata,2,2).'/'.
		  substr($qqdata,0,2);
	return($tempdata);
}
//FORMATA A DATA PARA O MYSQL
function vaidata2($qqdata){
	$tempdata=substr($qqdata,6,4).'/'.
                  substr($qqdata,3,2).'/'.
		  substr($qqdata,0,2);
	return($tempdata);
}
//FORMATA A DATA PARA O MYSQL
function vaidata3($qqdata){
	$tempdata=substr($qqdata,0,4).'-'.
                  substr($qqdata,5,2).'-'.
		  substr($qqdata,8,2);
	return($tempdata);
}
// RETIRA AS '/' DA DATA QUE VEM DO BANCO
function semBarras($qqdata){
	$tempdata=substr($qqdata,0,4).
                  substr($qqdata,5,2).
		  substr($qqdata,8,2);
	return($tempdata);
}

// Apenas o Ano e Mês para cálculo dos agendamentos realizados
function anoMes($qqdata){
	$tempdata=substr($qqdata,0,4).'/'.
                  substr($qqdata,5,2);
        return($tempdata);
}
function mesAno($qqdata){
	$tempdata=substr($qqdata,5,2).'/'.
                  substr($qqdata,0,4);
        return($tempdata);
}
function dia($qqdata){
	$tempdata=substr($qqdata,8,2);
        return($tempdata);
}
function mes($qqdata){
	$tempdata=substr($qqdata,5,2);
        return($tempdata);
}
function ano($qqdata){
	$tempdata=substr($qqdata,0,4);
        return($tempdata);
}
function hora($qqdata){
	$tempdata=substr($qqdata,0,2);
        return($tempdata);
}
function hora2($qqdata){ /* pega somente a hora do datetime */
	$tempdata=substr($qqdata,11,2).'h'.
                substr($qqdata,14,2).'min';
        return($tempdata);
}
function hora3($qqdata){ /* pega somente a hora do datetime */
	$tempdata=substr($qqdata,11,2);
        return($tempdata);
}
function horaMin($qqdata){
	$tempdata=substr($qqdata,0,2).'h'.
                substr($qqdata,3,2).'min';
        return($tempdata);
}
function horaMin2($qqdata){
	$tempdata=substr($qqdata,0,2).':'.
                substr($qqdata,3,2);
        return($tempdata);
}
function minuto($qqdata){
	$tempdata=substr($qqdata,3,5);
        return($tempdata);
}

function vemDataHora($data)
                    {
                        $tempdata = substr($data, 8, 2) . '/' .
                            substr($data, 5, 2) . '/' .
                            substr($data, 0, 4) . 
                            substr($data, 10, 9);
                        return ($tempdata);
                    }
?>

