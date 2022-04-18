import{input} from './io_utils.js'

function main(){
    let A = Number(input('Digite um número:')) 
    let B = Number(input('Digite um número:')) 
    let C = Number(input('Digite um número:')) 
    let D = Number(input('Digite um número:')) 
    let E = Number(input('Digite um número:')) 
     
    
    if(A>(C && D && E) && (C && D && E)>B){
        console.log(`O ${A} é o maior e o menor ${B}`)
    }
    if(A>(B && D && E) && (B && D && E)>C){
        console.log(`O ${A} é o maior e o menor ${C}`)
    }
    if(A>(B && C && E) && (B && C && E)>D){
        console.log(`O ${A} é o maior e o menor ${D}`)
    }
    if(A>(B && C && D) && (B && C && D)>E){
        console.log(`O ${A} é o maior e o menor ${E}`)
    }
    
    else if(B>(C && D && E) && (C && D && E)>A){
        console.log(`O ${B} é o maior e o menor ${A}`)
    }
    else if(B>(A && D && E) && (A && D && E)>C){
        console.log(`O ${B} é o maior e o menor ${C}`)    
    }
    else if(B>(A && C && E) && (A && C && E)>D){
        console.log(`O ${B} é o maior e o menor ${D}`)    
    }
    else if(B>(A && C && D) && (A && C && D)>E){
        console.log(`O ${B} é o maior e o menor ${E}`)    
    }
    
    else if(C>(B && D && E) && (B && D && E)>A){
        console.log(`O ${C} é o maior e o menor ${A}`)
    }
    else if(C>(A && D && E) && (A && D && E)>B){
        console.log(`O ${C} é o maior e o menor ${B}`)
    }
    else if(C>(A && B && E) && (A && B && E)>D){
        console.log(`O ${C} é o maior e o menor ${D}`)
    }
    else if(C>(A && B && D) && (A && B && D)>E){
        console.log(`O ${C} é o maior e o menor ${E}`)
    }
    
    else if (D>(B && C && E) && (B && C && E)>A){
        console.log(`O ${D} é o maior e o menor ${A}`)
    }else if (D>(A && C && E) && (A && C && E)>B){
        console.log(`O ${D} é o maior e o menor ${B}`)
    }else if (D>(A && B && E) && (A && B && E)>C){
        console.log(`O ${D} é o maior e o menor ${C}`)
    }else if (D>(A && B && C) && (A && B && C)>E){
        console.log(`O ${D} é o maior e o menor ${E}`)

    }else if(E>(B && C && D) && (B && C && D)>A){
        console.log(`O ${E} é o maior e o menor é ${A}`)
    }else if(E>(A && C && D) && (A && C && D)>B){
        console.log(`O ${E} é o maior e o menor é ${B}`)
    }else if(E>(A && B && D) && (A && B && D)>C){
        console.log(`O ${E} é o maior e o menor é ${C}`)
    }else if(E>(A && B && C) && (A && B && C)>D){
        console.log(`O ${E} é o maior e o menor é ${D}`)
    }else{

    }

    
}
main()