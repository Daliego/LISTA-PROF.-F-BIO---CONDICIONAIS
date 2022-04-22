import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const data = (input('Digite a sua data de aniversário e a data atual:'))
    const [dia, mes, ano, dia_atual, mes_atual, ano_atual] = data.split(' ').map(Number)
    const idades = anos(dia, mes, ano, dia_atual, mes_atual, ano_atual)

}
function anos(dia, mes, ano, dia_atual, mes_atual, ano_atual){
     if(ano_atual == ano && mes_atual>mes){
          const idade = mes_atual - mes
          return console.log(`Recém nascido de ${idade} meses`)
     }else if(ano_atual == ano && mes_atual<mes){
          const idade = mes - mes_atual
          return console.log(`Recém nascido de ${idade} meses`)
     }else if(ano_atual > ano){
          const idade = ano_atual - ano
          return console.log(`${idade} anos de idade`)
     }
       
}
main()