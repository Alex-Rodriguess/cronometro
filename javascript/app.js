var segundos = 00
var minutos = 00
var horas = 00

var intervalo


function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit);
    }
}


function start() {
    intervalo = setInterval(contador, 1000)
}

function pause() {
    clearInterval(intervalo);
}

function stop() {
    clearInterval(intervalo)
    horas = 0
    minutos = 0
    segundos = 0
    document.getElementById('contador').innerText = '00:00:00'
}

function contador() {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0
    }

    document.getElementById('contador').innerText = twoDigits(horas) + ':' + twoDigits(minutos) + ':' + twoDigits(segundos)
    if (minutos == 60) {
        horas++;
        minutos = 0
    }

}

