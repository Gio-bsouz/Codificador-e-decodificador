// Função para codificar uma string em Base64
function encodeToBase64(str) {
    try {
        let encodedStr = btoa(str); // Codifica a string
        return encodedStr;
    } catch (e) {
        console.error("Erro ao codificar a string: ", e);
        return null;
    }
}

// Função para decodificar uma string de Base64
function decodeFromBase64(encodedStr) {
    try {
        let decodedStr = atob(encodedStr); // Decodifica a string
        return decodedStr;
    } catch (e) {
        console.error("Erro ao decodificar a string: ", e);
        return null;
    }
}

// Exemplo de uso:
let originalString = "Olá, mundo!";
let encodedString = encodeToBase64(originalString);
console.log("Codificado: " + encodedString);  // Saída: Codificado: T2zDoSwgbXVuZG8h

let decodedString = decodeFromBase64(encodedString);
console.log("Decodificado: " + decodedString);  // Saída: Decodificado: Olá, mundo!
