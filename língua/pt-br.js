//COMANDO DIZENDO PARA ESPERAR
exports.espere = () => {
    return `*Espere, estou processando o comando...🏷*️`
}


//SUCESSO EM FINALIZAR O COMANDO
exports.sucesso = () => {
    return `*sucesso em finalizar o comando✅*`
}


//FALTANDO TEXTO OU PALAVRA
exports.palavra = () => {
    return `*Hmm... está faltando algo, este comando precisa de alguma palavra na frente 😆\n\n*Exemplo:* /comando Nabuto Ls*`
}


//MENSAGEM APENAS OS ADMS DO GRUPO
exports.adm = () => {
    return `*Opa, opa🧐✋, este comando só pode ser utilizado por administradores do grupo🏷️*`
} 


//MENSAGEM DIZENDO QUE A PESSOA NÃO É O DONO
exports.dono = () => {
    return `*Desculpe, este comando só pode ser utilizado pelo meu dono🏷️*`
}


//APENAS EM GRUPOS
exports.grupo = () => {
    return `*este comando só pode ser utilizado dentro de grupos🏷️*`
}

//O BOT PRECISA SER UM ADM
exports.admin = () => {
    return `*eu preciso ser um administrador para conseguir finalizar este comando...🏷️*`
}