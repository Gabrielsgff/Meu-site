function carregar() {
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = 14
    let minuto = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${minuto}`
    // ---------------------------------------------------------
    if (hora >= 6 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = 'rgb(252, 156, 71)'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = ''
        document.body.style.background = 'rgb(255, 111, 0)'
    } else { 
        imagem.src = ''
        document.body.style.background = 'rgb(30, 50, 163)'
    }
}