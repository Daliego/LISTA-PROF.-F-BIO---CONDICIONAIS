import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const senha = Number(input('Digite uma senha:'))
    const senha_certa = senha_confirmada(senha)


}
function senha_confirmada(senha1){
     if(senha1 == 1234){
          console.log('Acesso permitido')
     }else{
          console.log('Acesso negado')
     }
}
main()