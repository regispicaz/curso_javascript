function loading(){
    var msg = window.document.getElementById('msg')
    var image = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    //hora = 19 //Forçando horário para testes
    msg.innerHTML =`Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        image.src = 'img/manha_web.png'
        window.document.body.style.background = '#eadc8e'
    }else if(hora >=12 && hora <= 18){
        //Boa tarde!
        image.src = 'img/tarde_web.png'
        window.document.body.style.background = '#d3753a'
    }else {
        //Boa noite!
        image.src = 'img/noite_web.png'
        window.document.body.style.background = '#575658'
    }
}