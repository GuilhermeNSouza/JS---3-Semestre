//Crie uma função chamada "reverseString" que aceita uma string que deverá ser retornado de forma inversa a que foi passada. 
//Exemplo passo o meu nome Thiago e é retornado "ogaihT"
function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i)
    }
    return reversed
  }
  const input = 'Guillherme'
  const reversed = reverseString(input)
  console.log(reversed)