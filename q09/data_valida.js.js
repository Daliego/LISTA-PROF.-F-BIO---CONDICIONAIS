import{input} from './io_utils.js'
function main(){
    
    const [dia,mes,ano]  = input('Dia,mês,ano atuais:').split(',').map(Number)
    
    const mes_dias = 30
    const mes_dias1 = 31
    if(dia<=30 && mes<=12){
         console.log(`Data válida`)
    }else if(dia<=31 && mes<=12){
        console.log(`Data válida`)
    }else{
        console.log(`Data inválida`)
    }
     
}

main()