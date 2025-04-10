const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

  function checkInputs() {
    const usernameValue = usuario.value;
    const passwordValue = senha.value;

    if (usernameValue === "") {
        setErrorFor(usuario, "O nome de usuário é obrigatório.");
      } else {
        setSuccessFor(usuario);
      }
    if (passwordValue === "") {
        setErrorFor(senha, "A senha é obrigatória.");
      } else if (passwordValue.length < 7) {
        setErrorFor(senha, "Senha incorreta");
      } else {
        setSuccessFor(senha);
      }
      const formControls = form.querySelectorAll(".form-control");

      const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
      });
    
      if (formIsValid) {
        location.href = "TelaPrincipal.html";
      }
    }
    
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
