import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite o primeiro numero:')) 
    let B = Number(input('Digite o segundo numero:')) 
    if(A>B){
    console.log(`${A} é maior e ${B} é menor`)
    }else if(A<B){
    console.log(`${A} é menor e ${B} é maior`)
    }else{
    console.log('Os números são iguais')
    
}
}
main()