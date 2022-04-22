import { print, input } from './io_utils.js'

function main(){
    
    const lados = input('Digite os lados do triangulo:')
    const [a, b, c] = lados.split(' ').map(Number) 
    const triangulo = e_triangulo(a, b, c)
    const hipotenusa = e_hipotenusa(a, b, c)
    
}
function e_hipotenusa(A, B, C){
     if(A>B && A>C){
          console.log(`${A} é a hipotenusa e ${B} e ${C} são catetos`)
     }else if(B>A && B>C){
          console.log(`${B} é a hipotenusa e ${C} e ${A} são catetos`)
     }else if(C>A && C>B){
          console.log(`${C} é a hipotenusa e ${B} e ${A} são catetos`)
     }
}

function e_triangulo(A, B, C){
     if(((A+B)>C) && ((A+C)>B) && ((C+B)>A)){
          return console.log('É um triângulo')
       }else{
          return console.log('Não é um triângulo')

       }
}
main()
