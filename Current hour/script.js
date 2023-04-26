function loading() {
    var msg = document.getElementById('msg')
    var p = document.getElementById('img')
    var data = new Date()
    var hour = data.getHours()
 msg.innerHTML = `It's ${hour} o'clock`

    if (hour >= 0 && hour < 12) {
        p.src = 'imagens/manha.jpg'
        document.body.style.background = '#e3d871'
    } else if (hour >= 12 && hour < 18) {

        p.src = 'imagens/tarde.jpg'
        document.body.style.background = '#fab875'
    } else {
        p.src = 'imagens/noite.jpg'
        document.body.style.background = '#394454'
    }
  
}