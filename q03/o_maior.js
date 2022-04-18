import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite o primeiro numero:')) 
    let B = Number(input('Digite o segundo numero:')) 
    let C = Number(input('Digite o terceiro numero:')) 
    if(A>B && B>C){
    console.log(`${A} é o maior`)
    }else if(A>C && C>B){
    console.log(`${A} é o maior`)
    }else if(B>C && C>A){
    console.log(`${B} é o maior`)
    }else if(B>A && A>C){
    console.log(`${B} é o maior`)
    }else if(C>A && A>B){
    console.log(`${C} é o maior`)
    }else if(C>B && B>A){
    console.log(`${C} é o maior`)
    }else{
    console.log('Os números são iguais')
}

}
main()