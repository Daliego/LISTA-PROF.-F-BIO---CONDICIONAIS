import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite o primeiro numero:')) 
    let B = Number(input('Digite o segundo numero:')) 
    let C = Number(input('Digite o terceiro numero:')) 

    if(A==B==C){
    console.log('3 números iguais')
    }else if(A==B && A!=C){
    console.log('2 números iguais')
    }else if(A==C && A!=B){
    console.log('2 números iguais')
    }else if(C==B && C!=A){
    console.log('2 números iguais')
    }else{
    console.log('Nenhum número igual')
    }
    
    
}
main()