import{input} from './io_utils.js'

function main(){
    const A = Number(input('Digite a primeira variável:')) 
    const B = Number(input('Digite a segunda variável:')) 
    const opcao = Number(input('escolha um numero inteiro de 1 a 4:'))

    const soma = A + B
    const subtracao = A - B
    const multiplicacao = A * B
    const divisao = A/B
    
if(opcao==1){
    console.log(`${soma}`)   
}else if(opcao==2){
    console.log(`${subtracao}`)   
}else if (opcao==3){
    console.log(`${multiplicacao}`)
}else if(opcao==4){
    console.log(`${divisao}`)   
}else{
    console.log('A escolha deve ser 1, 2, 3 ou 4')
}
    
   
    
    
    
    
}
main()