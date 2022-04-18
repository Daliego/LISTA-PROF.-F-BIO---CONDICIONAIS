import { print, input } from './io_utils.js'

function main(){
    
    let A = Number(input('Digite o primeiro numero:'))
    let B = Number(input('Digite o segundo numero:')) 
    let C = Number(input('Digite o terceiro numero:')) 
    
    function triangulo(number0, number1, number2){
        let triangulo = number0 + number1 + number2
        return triangulo
    }

    if(triangulo(A,B,C) == 180 && A>0 && B>0 && C>0 && A<90 && B<90 && C<90){
       console.log('É um triângulo ocutângulo')
    }else if(triangulo(A,B,C) == 180 && A>0 && B>0 && C>0 && (A==90 || B==90 || C==90)){ 
        console.log('É um triângulo retângulo')
    }else if(triangulo(A,B,C) == 180 && A>0 && B>0 && C>0 && (A>90 || B>90 || C>90)){
        console.log('É um triângulo obtusângulo')
    }else{
        
        console.log('Não é um triangulo')
    }
    
}

main()