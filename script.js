alert("Óla tudo bem")
var nome = window.prompt('Qual é seu nome?')
window.alert(' é um grande prazer em te conhecer, ' + nome)
function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date ()
    var hora =  data.getHours ()
   
    msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    foto.src = 'fotomanhã.png'
    document.body.style.background = '#ccc7be'
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE! 
    foto.src = 'fototarde.png'
     document.body.style.background = '#b69544'
} else {    
    // BOA NOITE!
     foto.src ='fotonoite.png'
     document.body.style.background = '#192a31'
      
  }

}
