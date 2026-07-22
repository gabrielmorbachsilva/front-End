const mslogin = document.getElementById("msLogin");
const btlogin = document.getElementById("btLogin");

document.getElementById("formLogin")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        let usuario =
            document.getElementById("usuario").value;
        let senha =
            document.getElementById("senha").value;
        if (usuario === "admin@gmail.com" &&
            senha === "admin") {

            alert("Login realizado!");
            mslogin.style.display = "flex";
            btlogin.style.display = "none";
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });