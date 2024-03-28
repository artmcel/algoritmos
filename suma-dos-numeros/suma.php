<?php
/**
 * Dado un array de numeros (nums), y un entero (target), retorna los indices de dos numeros que sumados sean igual al target
 * 
 */

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {

        $result = [];
        for( $i=0; $i<sizeof($nums); $i++ ){
            $result[0]=$i;

            for( $j=$i+1; $j<sizeof($nums); $j++){
                $result[1] = $j;
                if( $nums[$i] + $nums[$j] === $target){
                    return $result;
                }
            }
        }
        
    }
}

$res = new Solution();
print_r($res->twoSum([2,7,11,15],9));



?>