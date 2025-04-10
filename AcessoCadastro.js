const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacao = document.getElementById("confirmar");


/*function cadastrar () {

  fetch("http://localhost:8080/cadastrar",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'applicantion/json'
      },
      method: "POST",
      body: JSON.stringify({ 
        nome: usuario.value,
        email: email.value,
        senha: senha.value

      }) 
    })

    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})
};*/



form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  //cadastrar();
  limpar();
});



function checkInputs() {
  const usernameValue = usuario.value;
  const emailValue = email.value;
  const passwordValue = senha.value;
  const passwordConfirmationValue = confirmacao.value;

  if (usernameValue === "") {
    setErrorFor(usuario, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(usuario);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(senha, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(senha);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(confirmacao, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(confirmacao, "As senhas não conferem.");
  } else {
    setSuccessFor(confirmacao);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log(
    usuario.value,
    email.value,
    senha.value)
    //location.href = "TelaPrincipal.html";
  }
}

function limpar(){
    usuario.value = "";
    email.value = "";
    senha.value = "";
    confirmacao.value = "";
  };

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

  
}