import{input} from './io_utils.js'

function main(){
    let numero1 = Number(input('Digite um número:')) 
     
    
    if(numero1/2 && numero1%2==0){
        console.log(`O número 1 é par`)
    }else{
        console.log(`O número 1 é ímpar`)
    }

    
}
main()