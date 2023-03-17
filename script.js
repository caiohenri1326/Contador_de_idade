function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('imagens')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO]Verifique o Ano e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        if(fsex[0].checked){
            genero = 'Homem'
                if (idade == 0 && idade <= 4){
                    img.src = 'bb-masc.png'
                    //Bebe
            }
                else if(idade <= 10){
                    img.src = 'criança-masc.png'
                    //criança
            }
                else if(idade < 13){
                    img.src = 'pre-adolecente-masculino.png'
                    //pre-adolescente 
            }
                else if (idade < 18 ){
                    img.src = 'adolecente-masc.png'
                    //adolescente 
            }
                else if (idade < 45){
                    img.src = 'homem-adulto-m.png'
                    //adulto
            }
                else{
                    img.src = 'idoso-homem.png'
                    //idoso
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade == 0 && idade <= 4){
                //Bebe
                img.src = 'bb-fem.png'
            }
            else if(idade <= 10){
                 //criança
                 img.src = 'criança-fem.png'
            }
            else if(idade < 13){
                //pre-adolescente 
                img.src = 'pre-adolescente-m.png'
            }
            else if (idade < 18 ){
                //adolescente 
                img.src = 'adolecente-fem.png'
            }
            else if (idade < 45){
                //adulto
                img.src = 'mulher-adulta.png'
            }
            else{
                //idoso
                img.src = 'idosa-mulher.png'
            }
        }
        img.style.margin = '15px'
        res.style.margin = '20px'
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero} com a idade de ${idade} anos`
        res.appendChild(img)
        }
    }