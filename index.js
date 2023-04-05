//7
let questionAreaPintada = Number(prompt('Digite a área a ser pintada'));
function litrosTinta() {
    return questionAreaPintada / 3;
}
function quantidadeLata() {
    return Math.ceil(litrosTinta() / 18);
}
function valorTotal() {
    return quantidadeLata() * 80;
}
console.log('Serao nescessárias', quantidadeLata(),'latas', 'no valor de', valorTotal(), 'reais');


