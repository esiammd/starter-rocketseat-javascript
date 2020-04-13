function experiencia(anos) {
    var retorno;
    
    if (anos <= 1) {
        retorno = 'Iniciante';
    } else if (anos <= 3) {
        retorno = 'Intermediário';
    } else if (anos <= 6) { 
        retorno = 'Avançado';
    } else {
        retorno = 'Jedi Master';
    }

    return retorno;
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));