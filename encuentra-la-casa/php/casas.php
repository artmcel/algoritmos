<?php

function EncuentraCasas( $c, $x ){

    $c=$c*2;
    $numeros_nones = [];
    $numeros_pares = [];


    // Recorrer los numeros pares y nones
    for( $i=1; $i<=$c; $i++){
        if( $i % 2 !=0 ){
            $numeros_nones[] = $i;
        }else{
            $numeros_pares[] = $i;
        }
    }

    // Ordenar los números nones como key de manera ascendente
    sort($numeros_nones);
    
    // Ordenar los números pares de manera descendente
    rsort($numeros_pares);
    
    // Crear el array asociativo
    $array_asociativo = array_combine($numeros_nones, $numeros_pares);

    
    // Retornar el value del key que sea igual al índice indicado
    return isset($array_asociativo[$x]) ? $array_asociativo[$x] : null;

}

// Ejemplo de uso
$c = 3;
$x = 5;
$resultado = EncuentraCasas($c, $x);

if ($resultado !== null) {
    echo "El valor de $x es: $resultado";
} else {
    echo "No se encontró ningún valor asociado al índice $x";
}




?>