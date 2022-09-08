//Informa uma posição de largura e altura do body
var height = 0
var width = 0
var vidas = 1
var tempo = 15
var criaMoscaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaMoscaTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    criaMoscaTempo = 1000
} else if (nivel === 'hardcore') {
    //750
    criaMoscaTempo = 750
}

function ajustePalco() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(height, width)
}

ajustePalco()

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function positionRandom() {
    //remover o mosca anterior (caso exista)
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }

    //Cria uma posição randomica para um objeto
    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //Cria o elemento html 
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = positionX + 'px'
    mosca.style.top = positionY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}