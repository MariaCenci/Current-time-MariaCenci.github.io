function loading() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hour = data.getHours()
 msg.innerHTML = `It's ${hour} o'clock`

    if (hour >= 0 && hour < 12) {
        img.src = 'IMAGENS/manha.jpg'
        document.body.style.background = '#e3d871'
    } else if (hour >= 12 && hour < 18) {

        img.src = 'IMAGENS/tarde.jpg'
        document.body.style.background = '#fab875'
    } else {
        img.src = 'IMAGENS/noite.jpg'
        document.body.style.background = '#394454'
    }
  
}
