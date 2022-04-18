import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite um número de 2 dígitos:')) 
    function dezenas(Number){
        const as_dezenas =  Math.floor(Number/10)
        return as_dezenas
    }
    function unidades(Number){
        const as_unidades = Number%10
        return as_unidades
    }
    

    
    if(dezenas(A)==unidades(A)){
    console.log(`O número de dezenas é igual o número de unidades`)
    }else{
    console.log(`O número de dezenas é diferente do número de unidades`)
    
    }
}
main()