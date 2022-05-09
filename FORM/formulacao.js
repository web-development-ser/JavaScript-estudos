//Primeira função execulta os dados.
function formis() {
  let username = 
  document.getElementById('user').value;
  let password = 
  document.getElementById('pass').value;
  
  //Transformando em number.
  const validPass = Number(password)
  
  //Armazenando os dados.
  let dados = {
    user: username,
    pass: validPass
  }
  
  //Comprovando senha.
  if (dados.pass === 1987) {
    execute()
  } else {
    remova()
  }
}


function execute() {
  let hello = 
  document.getElementById('hello')
  hello.innerHTML = "Hello, seja bem vindo de volta...";
  
  
}
function remova() {
  let hello =
  document.getElementById('hello')
  hello.innerHTML = "Senha inválida..."
  
  
}
