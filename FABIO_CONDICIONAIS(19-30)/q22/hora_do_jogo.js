import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const hora = input('Digite a hora de inicio e a hora de termino do jogo:')
    const [hour_inicio, hour_termino] = hora.split(' ').map(Number)
    const tempo_de_jogo = hora_termino(hour_inicio, hour_termino)
}

function hora_termino(horas_inicio, horas_final){
    if(horas_inicio == horas_final){
        return console.log('O jogo durou 24 horas ')
    }else if(horas_final>horas_inicio){
        return console.log(`O jogo durou ${horas_final - horas_inicio} horas`)
    }else if(horas_final<horas_inicio)
        return console.log(`O jogo durou ${horas_inicio - horas_final} horas`)

}
main()