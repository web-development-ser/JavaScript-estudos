function troca() {
  new Promise((sucesso, rejeita) => {
    
    let password = document.getElementById('password').value;
    
    console.log(password)
    
    if (password == 1987) {
      sucesso("Senha válida...")
    } else {
      rejeita("Senha inválida...")
    }
    
  }).then ( (vedd) => {
    
    console.log(vedd)
    acess_ss(password)
    
  }).catch ( (erro) => {
    
    erro_six()
    
  })
  
}



function acess_ss(pass) {
  
 let div = document.getElementById('container')
 div.remove(div)
  let aviss = document.querySelector('.container')
  aviss.remove(aviss)
  
  imgWeb()
}


function erro_six() {
  let text = document.querySelector('.container')
  let elem = document.createElement('p')
  elem.innerHTML = "Sua senha não contém correspondência com a salva..."
  text.appendChild(elem)
  elem.setAttribute("class", "erro")
}

function imgWeb() {
  let imgs = document.getElementById('imgs')
  let imgps = document.createElement('img')
  imgs.appendChild(imgps)
  
  //let img = document.querySelector('img')
  imgps.setAttribute("src", "./img/rip.webp")
  imgps.setAttribute("class", "img")
}
