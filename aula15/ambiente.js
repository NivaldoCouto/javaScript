let num = [5, 8, 2, 9, 3]
num.push(1) //mostra a posição do vetor
    //.sort() //coloca os valores em ordem crescente
console.log(`O vetor tem ${num} posições.`)
console.log(`O primeiro valor do vetor é : ${num[0]}`)
    /*
    let pos = num.indexOf(8) // mostra a posição no array
    console.log(`O vetor 8 esta na posição ${pos}`)
    */

let pos = num.indexOf(4) // colocando vetor que nao existe no array /
console.log(`O vetor 4 esta na posição ${pos}`) // quando nao encontra o valor, retorna -1 
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log('O valor esta na posição: ' + pos)
}