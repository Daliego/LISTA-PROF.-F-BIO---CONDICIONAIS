import{input} from './io_utils.js'

function main(){
    const horas_professor1 = Number(input('Digite o  número de horas dadas de aula pelo professor 1:')) 
    const horas_professor2 = Number(input('Digite o  número de horas dadas de aula pelo professor 2:')) 
    const valor_aula1 = Number(input('Digite o valor da hora aula do professor 1:'))
    const valor_aula2 = Number(input('Digite o valor da hora aula do professor 2:'))

    const salario_1 = horas_professor1 * valor_aula1
    const salario_2 = horas_professor2 * valor_aula2

if(salario_1>salario_2){
    console.log('O professor 1 possui um salário maior')   
}else if(salario_2>salario_1){
    console.log('O professor 2 possui um salário maior')   
}else{
    console.log('O professor 2 e o professor 1 possuem o mesmo salário')
}
    
   
    
    
    
    
}
main()