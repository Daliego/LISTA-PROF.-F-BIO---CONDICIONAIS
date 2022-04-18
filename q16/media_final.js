import{input} from './io_utils.js'

function main(){
    const nota1 = Number(input('Digite a primeira nota:')) 
    const nota2 = Number(input('Digite a segunda nota:')) 
   

    const media1 = (nota1 + nota2)/2

if(media1>7){
    console.log('Aprovado')   
}else if(media1<=7){
    let nota3 = Number(input('Digite a terceira nota:'))
    const media2 = (nota1 + nota2 + nota3)/3
    if(media2>5){
        console.log('Aprovado')
    }else{
    console.log('Reprovado')}   
}else{
    
}
    
   
    
    
    
    
}
main()