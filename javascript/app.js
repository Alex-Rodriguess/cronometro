var segundos =0
var minutos =0
var horas =0
var intervalo


function start() {
    intervalo= setInterval(contador, 10)
}

function pause() {
    clearInterval(intervalo)
}

function stop() {
    clearInterval(intervalo)
    horas=0
    minutos=0
    segundos=0
    document.getElementById('contador').innerText='00:00:00'
}

function contador(){
    segundos++
    document.getElementById('contador').innerText=horas+':'+minutos+':'+segundos
    if(segundos==60){
        minutos++
        segundos=0
        if(minutos==60){
            horas++
            minutos=0
        }
      
    }

    
}



    
