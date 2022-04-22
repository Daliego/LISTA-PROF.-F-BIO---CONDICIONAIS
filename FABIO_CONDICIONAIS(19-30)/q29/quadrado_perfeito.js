import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numero1 = input('Digite um número de 4 dígitos:')
    const quadrado = quadrado_perfeito(numero1)
    
}
function quadrado_perfeito(numero){
     const numero_decimal1 = Math.floor(numero/100)
     const numero_decimal2 = numero % 100
     const soma = numero_decimal1 + numero_decimal2
     if(soma**2 == numero){
          console.log(`${numero} é um quadrado perfeito.`)
     }else if(soma**2 != numero){
          console.log(`${numero} não é um quadrado perfeito.`)

     }


}
main()