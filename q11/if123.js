import{input} from './io_utils.js'

function main(){
    let opçao = Number(input('Digite o número da opção:'))
    let numero1 = Number(input('Digite um número:')) 
    let numero2 = Number(input('Digite um número:')) 
    let numero3 = Number(input('Digite um número:')) 
     
    
    if(opçao==1){
    console.log(`O número 1 é ${numero1}`)
    }else if(opçao==2) {
        console.log(`O número 2 é ${numero2}`)
    }else if(opçao==3){
        console.log(`O número 3 é ${numero3}`)
    }else{
        console.log('Só aceitamos os dígitos 1, 2, 3 em opção.')
    }
    

    
}
main()