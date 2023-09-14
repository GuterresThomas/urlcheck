const axios = require('axios'); 

// URL que você deseja verificar (URL da página inicial)
const url = "https://otica.onrender.com/";

// Tempo em milissegundos entre as verificações (14 minutos)
const intervalo = 12 * 60 * 1000;

// Função para verificar a URL
async function verificarURL() {
    try {
        const response = await axios.get(url);
        
        // Verifique o código de status da resposta (200 significa OK)
        if (response.status === 200) {
            console.log(`A URL ${url} está ativa.`);
        } else {
            console.log(`A URL ${url} retornou um código de status ${response.status}.`);
        }
    } catch (error) {
        console.error(`Erro ao verificar a URL: ${error.message}`);
    }
}

// Inicie a verificação da URL imediatamente
verificarURL();

// Inicie o intervalo de verificação da URL a cada intervalo de tempo
setInterval(verificarURL, intervalo);
