function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var uano = document.getElementById('inano')
    var res = document.getElementById('res')
    if (uano.value.length == 0 || Number(uano.value) > ano) {
        alert('[ERROR] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(uano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade < 21) {
                //  jovem
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // criança
                img.setAttribute('src', 'bebe_f.png')
            } else if (idade < 21) {
                //  jovem
                img.setAttribute('src', 'jovem_f.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'adulto_f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `-*-*-* O Sistema Detectou ${genero} com ${idade} anos. -*-*-*`
        res.appendChild(img)
    }

}