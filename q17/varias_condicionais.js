import{input} from './io_utils.js'

function main(){
    const A = Number(input('Digite a primeira variável:')) 
    const B = Number(input('Digite a segunda variável:')) 
   

    const resto = A % B
    //se resto = 1
    const resto1 = (A % B) + A + B
    //se resto = 3
    const resto3 = (A+B)*A
    //se resto = 4
    const resto4 = (A+B)/B
    //Nada
    const nada = A**2
    const nada2 = B**2

if(resto==1){
    console.log(`${resto1}`)   
}else if(resto==2){
    if((A%2)==0){
        console.log('A é par')
    }else{
        console.log('A é ímpar')    
    }
    if((B%2)==0){
        console.log('B é par')
    }else{
        console.log('B é ímpar')
    }
}else if (resto==3){
        console.log(`${resto3}`)
}else if(resto==4){
    if(B != 0)
    console.log(`${resto4}`)
    else{
        console.log(`Impossível calcular`)
    }
}else{
    console.log(`${nada} e ${nada2}`)
}
    
   
    
    
    
    
}
main()