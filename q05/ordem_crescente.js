import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite o primeiro numero:')) 
    let B = Number(input('Digite o segundo numero:')) 
    let C = Number(input('Digite o terceiro numero:')) 
    if(A>B && B>C){
    console.log(`${C}, ${B}, ${A}`)
    }else if(A>C && C>B){
    console.log(`${B}, ${C}, ${A}`)
    }else if(B>C && C>A){
    console.log(`${A}, ${C}, ${B}`)
    }else if(B>A && A>C){
    console.log(`${C}, ${A}, ${B}`)
    }else if(C>A && A>B){
    console.log(`${B}, ${A}, ${C}`)
    }else if(C>B && B>A){
    console.log(`${A}, ${B}, ${C}`)
    }else{
    console.log('Os números são iguais')
}

}
main()