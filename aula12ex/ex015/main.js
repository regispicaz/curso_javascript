//alert(`Olá Mundo`)
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Varifique os dados preenchido e tente novamente!')
    }else{
        //alert('Tudo OK!!!') //Teste
        var fsex = document.getElementsByName('radsex')//referencia o input de sexo
        var idade = ano - Number(fano.value)//calcula idade
        //res.innerHTML = `Idade calculada = ${idade} anos` //Mostrando resultado da idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/bebe-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/bebe-f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','img/jovem-f.png')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'img/adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`//Resultado com os dados preenchidos
        res.appendChild(img)//Chama a imagem ao fundo da página
    }
}