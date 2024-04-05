/**
 * Dado un string (s) que contiene palabras y espacios, retorna la longitud de la ultima parlabra.
 * @param {string} s
 * @return {number}
 */


const  lenghtOfLastWord = ( s )=>{

    s = s.trimStart().trimEnd();

    let arg = [];
    let wrd = '';

    for( const w of s){
        if(w !== ' '){
            wrd += w;
        }else if(wrd.length > 0){
            arg[arg.length] = wrd;
            wrd = '';
        }
    }
    if( wrd.length > 0 ){
        arg[arg.length] = wrd;
        return wrd.length;
    }

}



console.log( lenghtOfLastWord("   fly me   to   the moon  ") );
console.log( lenghtOfLastWord("Hello world") );
