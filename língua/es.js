//ORDEN QUE DICE QUE ESPERE
exports.espere = () => {
    return `*Espera, estoy procesando el comando...🏷*️`
}


// ÉXITO AL FINALIZAR EL MANDO
exports.sucesso = () => {
    return `*éxito en terminar el comando✅*`
}


//FALTA TEXTO O PALABRA
exports.palavra = () => {
    return `*Hmm... falta algo, este comando necesita alguna palabra al frente 😆\n\n*Exemplo:* /comando palabra*`
}


//MENSAJE SOLO A LOS ADMS DEL GRUPO
exports.adm = () => {
    return `*Vaya, vaya, este comando solo puede ser utilizado por administradores del grupo🏷️*`
} 


//MENSAJE QUE DICE QUE LA PERSONA NO ES EL DUEÑO
exports.dono = () => {
    return `*Lo siento, este comando solo puede ser utilizado por mi propietario🏷️*`
}


//SOLO EN GRUPOS
exports.grupo = () => {
    return `*este comando solo se puede usar dentro de grupos🏷️*`
}

//EL BOT DEBE SER ADM
exports.admin = () => {
    return `*Necesito ser administrador para poder finalizar este comando...🏷️*`
}