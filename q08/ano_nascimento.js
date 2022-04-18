import{input} from './io_utils.js'
function main(){
    
    const [dia_nascimento,mes_nascimento,ano_nascimento]  = input('Dia, mês, ano atuais:').split(',').map(Number)
    const [dia,mes,ano]  = input('Dia, mês, ano atuais:').split(',').map(Number)
    let idade = ano - ano_nascimento
    if(dia<dia_nascimento && mes<=mes_nascimento ){
         idade = idade - 1
         console.log(`A idade é ${idade}`)
    }else{
        console.log(`A idade é ${idade}`)
    }
     
}

main()