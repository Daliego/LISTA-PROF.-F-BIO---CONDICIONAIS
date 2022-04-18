import { input } from './io_utils.js'

function main(){
   
    const numero_primos = Number(input('Digite um número de 0 a 100:'))
    function primo(primos){
        const os_primos = [2, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
        return os_primos
    }
    if(primo(numero_primos) == [0] | [1] | [2] | [3] | [4] | [5] | [6] | [7] | [8] | [9] | [10] | [11] | [12] | [13] | [14] | [15] | [16] | [17] | [18] | [19] | [20] | [21] | [22] | [23]){
        console.log(`É um número primo`)
    } else{
        console.log('Não é um número primo')
    }
   
}
    main()

