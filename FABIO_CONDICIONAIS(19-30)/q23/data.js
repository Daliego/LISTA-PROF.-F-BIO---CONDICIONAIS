import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const datas = input('Digite as datas:') 
    const [dias, meses, anos, dias1, meses1, anos1] = datas.split(' ').map(Number)
    const dias_meses_anos = data(dias, meses, anos, dias1, meses1, anos1)

function data(dias, meses, anos, dias1, meses1, anos1){
    
    if(anos>anos1){
        return console.log('data 1 mais recente que data 2')
   }else if(anos1>anos){
        return console.log('data 2 mais recente que data 1')
   }else if(anos == anos1 && meses>meses1){
        return console.log('data 1 mais recente que data 2')
   }else if(anos == anos1 && meses1>meses){
        return console.log('data 2 mais recente que data 1')
   }else if(anos == anos1 && meses1 == meses && dias>dias1){
        return console.log('data 1 mais recente que data 2')
   }else if(anos == anos1 && meses1 == meses && dias1>dias){
       return console.log('data 2 mais recente que data 1')
   }
}

}

main()