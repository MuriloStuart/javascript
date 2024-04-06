function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixaid = ''
        if (fsex[0].checked) {
            genero = "Homem"
            if ( idade >=0 && idade <10){
                var faixaid = 'Criança'
            } else if (idade <21){
                var faixaid = 'Jovem'
            } else if (idade <50){
                var faixaid = 'Adulto'
            } else{
                var faixaid = 'Idoso'
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if ( idade >=0 && idade <10){
                var faixaid = 'Criança'
            } else if (idade <21){
                var faixaid = 'Jovem'
            } else if (idade <50){
                var faixaid = 'Adulta'
            } else{
                var faixaid = 'Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} ${faixaid} com ${idade} anos`
    }
}
