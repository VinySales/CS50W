// Fiz isso em JavaScript, se alguém puder e quiser otimizar, fique a vontade e responda aqui! :D

const QUANTIDADE_DE_LINHAS = 5000;
const QUANTIDADE_DE_CASAS = 6;
const NUMERO_INICIAL = 1;
const TEXTO_INICIAL = "OP";

var lista = criarLista(QUANTIDADE_DE_LINHAS, QUANTIDADE_DE_CASAS, NUMERO_INICIAL, TEXTO_INICIAL);

console.log(lista);

//----- Functions -----
function criarLista(quantidadeDeLinhas, quantidadeDeCasas, numeroInicial, textoInicial){
    if (!quantidadeDeLinhas ||
        !quantidadeDeCasas ||
        !numeroInicial ||
        !textoInicial) return;

    let lista = [];
    let quantidadeDeZeros;
    let texto;
    
    for (let i = numeroInicial; i <= quantidadeDeLinhas; i++) {
        texto = textoInicial + i;
    
        if (texto.length <= quantidadeDeCasas) {
            quantidadeDeZeros = "";

            for (let n = 0; n < quantidadeDeCasas - texto.length; n++) {
                quantidadeDeZeros += "0";
            }

            lista.push(texto.substr(0, textoInicial.length) + quantidadeDeZeros + i);
        }
    }
    
    return lista;
}