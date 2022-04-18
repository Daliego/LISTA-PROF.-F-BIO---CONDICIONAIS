import { print, input } from './io_utils.js'

function main(){
    
    let A = Number(input('Digite o primeiro numero:'))
    let B = Number(input('Digite o segundo numero:')) 
    let C = Number(input('Digite o terceiro numero:')) 

      //Equilátero = A+B>C
    if( (A+B)>C && A==B==C ){
       console.log('É um triângulo equilátero')
        //isóceles = A+B>C
    }else if( (A+B)>C && A==B && B!=C ){
       console.log('É um triângulo isóceles')
    }else if( (A+B)>C && C==B && A!=C ){
       console.log('É um triângulo isóceles')
    }else if( (A+B)>C && A==C && B!=C ){
       console.log('É um triângulo isóceles')
    }else if( (A+B)>C && A!=B!=C){
        console.log('É um triângulo escaleno')
    } else{
        console.log('Não é triângulo')
    }
    



    
}

main()