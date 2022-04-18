import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite um número:')) 
    let B = Number(input('Digite um número:')) 
    let C = Number(input('Digite um número:')) 
    let D = Number(input('Digite um número:')) 
    let E = Number(input('Digite um número:')) 
     
    const media = ((A+B+C+D+E)/5)
    if(A>media && B>media && C>media ){
        console.log(`${A} é maior do que a média`)
        console.log(`${B} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
        
    }else if(A>media && B>media && D>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${B} é maior do que a média`)
        console.log(`${D} é maior do que a média`)
        
    }else if(A>media && B>media && E>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${B} é maior do que a média`)
        console.log(`${E} é maior do que a média`)


    }else if(A>media && C>media && D>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(A>media && C>media && E>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
        console.log(`${E} é maior do que a média`)


    }else if(A>media && D>media && E>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${D} é maior do que a média`)
        console.log(`${E} é maior do que a média`)
    

    }else if(B>media && C>media && D>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(B>media && C>media && E>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
        console.log(`${E} é maior do que a média`)
    

    }else if(B>media && D>media && C>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${D} é maior do que a média`)
        console.log(`${C} é maior do que a média`)
    
    }else if(B>media && D>media && E>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${D} é maior do que a média`)
        console.log(`${E} é maior do que a média`)
    

    }else if(C>media && E>media && D>media){
        console.log(`${C} é maior do que a média`)
        console.log(`${E} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(A>media && B>media){
        console.log(`${A} é maior que a média`)
        console.log(`${B} é maior do que a média`)

    }else if(A>media && C>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${C} é maior do que a média`)

    }else if(A>media && D>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(A>media && E>media){
        console.log(`${A} é maior do que a média`)
        console.log(`${E} é maior do que a média`)

    }else if(B>media && C>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${C} é maior do que a média`)

    }else if(B>media && D>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(B>media && E>media){
        console.log(`${B} é maior do que a média`)
        console.log(`${E} é maior do que a média`)

    }else if(C>media && D>media){
        console.log(`${C} é maior do que a média`)
        console.log(`${D} é maior do que a média`)

    }else if(C>media && E>media){
        console.log(`${C} é maior do que a média`)
        console.log(`${E} é maior do que a média`)

    }else if(D>media && E>media){
        console.log(`${D} é maior do que a média`)
        console.log(`${E} é maior do que a média`)

    }else if(A>media){
        console.log(`${A} é maior do que a média`)

    }else if(B>media){
        console.log(`${B} é maior do que a média`)

    }else if(C>media){
        console.log(`${C} é maior do que a média`)

    }else if(D>media){
        console.log(`${D} é maior do que a média`)

    }else if(E>media){
    console.log(`${E} é maior do que a média`)
    }else{}
        
    
    
    
    
}
main()