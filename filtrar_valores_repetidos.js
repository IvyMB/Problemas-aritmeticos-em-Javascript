
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

for (var i = 0; i < totalItems; i++) { //iterador
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort(); // ordena em ordem alfabetica com sort
  let itensUnicos = itensOrdenados.filter( function(element, index, self) {
    return index == self.indexOf(element);
  }); // Implemente aqui a lógica para ter os itens unicos
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}
/*
Utilizando o filter, geramos uma nova array com base na função que passamos para identificar as posições de elementos repetidos.

Esse é um código que funciona OK para arrays menores, pois não é algo que vai escalar muito bem.

Usando o filter, podemos fazer de outra maneira: hashtables.
*/