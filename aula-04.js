//for -> variável, validação e o que acontece no final

const quant = 10
let soma = 0

for (let i = 0; i < quant; i++) {
    console.log(i)
    soma = soma + i
}
console.log('acabou', soma)