function carregar() {
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${minuto}`
    // ---------------------------------------------------------
    if (hora >= 6 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = 'rgb(252, 156, 71)'
        document.getElementById('elementos').style.background ='rgb(201, 208, 201)'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = 'rgb(255, 111, 0)'
        document.getElementById('elementos').style.background = 'rgb(187, 144, 91)'
    } else { 
        imagem.src = 'fotonoite.png'
        document.body.style.background = 'rgb(30, 50, 163)'
        document.getElementById('elementos').style.background ='rgb(59, 82, 84)'
    }
}