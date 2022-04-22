import {input} from './io_utils.js'

function main(){
    const angulo = input('Digite um ângulo:')
    const e_quadrante = quadrante(angulo) 

}


function quadrante(angulo_qualquer){
    if(angulo_qualquer>0 && angulo_qualquer<=90){
        return console.log('È do primeiro quadrante')
    }else if(angulo_qualquer>90 && angulo_qualquer<=180){
        return console.log('È do segundo quadrante')
    }else if(angulo_qualquer>180 && angulo_qualquer<=270){
        return console.log('È do terceiro quadrante')
    }else if(angulo_qualquer>270 && angulo_qualquer<=360){
        return console.log('È do quarto quadrnte')
    }else{}
}

main()
