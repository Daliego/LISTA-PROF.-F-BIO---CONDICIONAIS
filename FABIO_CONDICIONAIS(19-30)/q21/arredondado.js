import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numero = input('Digite um número decimal aqui:')
    const arredondado = decimal(numero)
}

function decimal(numeral) {
    if (numeral - Math.floor(numeral) < 0.5) {
        return console.log(`${Math.floor(numeral)}`)
    } else if (numeral - Math.floor(numeral) >= 0.5) {
        return console.log(`${Math.floor(numeral) + 1}`)
    } else {}
}


main()