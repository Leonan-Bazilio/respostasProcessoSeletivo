//questão 1

const indice = 13
let soma = 0

for (let k = 0; k < indice; k++) {
  soma = soma + k


}
console.log(soma)

//resposta: 78



//questao 2
function pertencerFibonacci(numero) {
  let a = 0
  let b = 1
  let soma
  while (b <= numero) {
    if (b === numero) {
      return `o numero ${numero} pertence a sequencia de Fibonacci.`
    }
    soma = a + b
    a = b
    b = soma
  }
  return `o numero ${numero} não pertence a sequencia de Fibonacci.`
}
const numeroQualquer = 14
console.log(pertencerFibonacci(numeroQualquer))


/*questao 3
a) 9 (de 2 em 2)
b)128 (dobrando o valor)
c)49 (somando numeros impares em sequencia, primeiro 1, depois 3,depois 5 e assim por diante(36+13=49))
d)100 ( começou aumentando 12 e depois somando 8 no valor que aumenta entao aumentou 12, depois +20, depois +28 e o ultimo +36 resultando em 100)
e)13 (Fibonacci do exercicio anterior, soma os 2 ultimos numeros para resultar no proximo)
f)200  (proximo numero que começa com a letra 'd', essa ja conhecia pois eu e pai brincava de mandar esses desafios um para o outro quando eu era pequeno( kkkk informaçao desnecessaria mas ta ai))
*/



/*questao 4
supondo que os interuptores fossem o 1,2,3 e as salas A,B,C* por exemplo e puder considerar as lampadas esquentando eu ligaria o 1 e deixaria por um depois desligaria o 1 e logo em seguida ligaria o 2 e iria pra sala A, se a lampada estiver acesa é o 2, se tiver apagada mas quente é o 1 e se estiver apagada e fria é o 3, depois disso so simplesmente acender um dos interrupitores que sobrar e ir em uma das salas que sobrou, assim com 2 vezes descobre todos*/


//questão 5
function inverterTexto(texto) {
  let palavraInverida = ''
  for (let i = texto.length - 1; i >= 0; i--) {
    palavraInverida += texto[i]
  }
  return palavraInverida
}

let meuNomeAoContrario = "manoeL"
console.log(inverterTexto(meuNomeAoContrario))
