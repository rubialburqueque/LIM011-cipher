window.cipher = {
  encode: (string, offset) => {
    // mensaje recibido
    let msgCipher = ''
    let textChar = ''
    for (let i = 0; i < string.length; i++) {
      const character = string[i]
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65
        msgCipher += String.fromCharCode(textChar)
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        textChar = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97
        msgCipher += String.fromCharCode(textChar)
      } else {
        msgCipher += character
      }
    }
    return msgCipher
  },
  decode: (string, offset) => {
    // mensaje recibido
    let msgDecipher = ''
    let textChar = ''
    // inicio recorrido de caracteres
    for (let i = 0; i < string.length; i++) {
      const characterD = string[i]

      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        textChar = (string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90
        msgDecipher += String.fromCharCode(textChar)
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        const textChar = ((string.charCodeAt(i) - 122 - parseInt(offset)) % 26) + 122
        msgDecipher += String.fromCharCode(textChar)
      } else {
        msgDecipher += characterD
      }
    }
    // retornar respuesta
    return msgDecipher
  }
}
