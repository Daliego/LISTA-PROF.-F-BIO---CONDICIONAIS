import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const numeros = input('Digite os numeros:') 
    const [A, B, C] = numeros.split(' ').map(Number)
    const baskara = formula_baskara(A, B, C)

    

}

function formula_baskara(a, b , c){
     const delta = b**2 - 4*a*c

     
     let x1 = (-b + Math.sqrt( delta ))/(2*a)
     let x2 = (-b - Math.sqrt( delta ))/(2*a)
     if(delta>0){
          x1 = (-b + Math.sqrt( delta ))/(2*a)
          x2 = (-b - Math.sqrt( delta ))/(2*a)
          console.log(`${x1}`)
          console.log(`${x2}`)

     }else if(delta==0){
          x1 = (-b)/(2*a)
          console.log(`${x1}`)
     }else if(delta<0){
          console.log('Impossível calcular')
     }
}

main()