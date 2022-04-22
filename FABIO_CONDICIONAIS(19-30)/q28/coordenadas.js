import prompt from 'prompt-sync'
const input = prompt()
function main(){
     const coordenadas = input('Digite as coordenadas cartesianas:')
     const [x, x1, y, y1] = coordenadas.split(' ').map(Number)
      const area_retangulo = retangulo(x, x1, y, y1)
}
main()
function retangulo(x, x1, y, y1){
     if(x == x1 && y>y1){
          const area = x1 * (y-y1)
          if(area>0){
               console.log(`${area}`)
          }else if(area<0){
               console.log(`${area*(-1)}`)
          }
          

     }else if(x == x1 && y1>y){
          const area = x1 * (y1-y)
          if(area>0){
               console.log(`${area}`)
          }else if(area<0){
               console.log(`${area*(-1)}`)
          }

     }else if(x == x1 && y == y1){
          console.log(`Não há retângulo com somente uma cordenada cartesiana.`)
     }else if(y == y1 && x>x1){
          const area = y1 * (x-x1)
          if(area>0){
               console.log(`${area}`)
          }else if(area<0){
               console.log(`${area*(-1)}`)
          }

          }else if(y == y1 && x1>x){
          const area = y1 * (x1-x)
          if(area>0){
               console.log(`${area}`)
          }else if(area<0){
               console.log(`${area*(-1)}`)
          }
     }

}