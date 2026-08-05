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
            mslogin.style.display = "block";
            mslogin.querySelector(".nav-link").style.display = "block";
            mslogin.querySelector(".nav-link").style.whiteSpace = "nowrap";
            btlogin.style.display = "none";

            // Fecha a modal de login
            const modal = bootstrap.Modal.getInstance(document.getElementById("janela"));
            if (modal) {
                modal.hide();
            }
} else {
            alert("Usuário ou senha inválidos!");
        }
    });

// ===== MODAL DE AGENDAMENTO =====
document.getElementById("formAgendamento")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = document.getElementById("nomeCliente").value;
        let email = document.getElementById("emailCliente").value;
        let telefone = document.getElementById("telefoneCliente").value;
        let procedimento = document.getElementById("procedimento").value;
        let data = document.getElementById("dataAgendamento").value;
        let hora = document.getElementById("horaAgendamento").value;

        // Formata a data para o padrão brasileiro (dd/mm/aaaa)
        let dataFormatada = data.split("-").reverse().join("/");

        alert("✅ Agendamento realizado com sucesso!\n\n" +
            "Cliente: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Telefone: " + telefone + "\n" +
            "Procedimento: " + procedimento + "\n" +
            "Data: " + dataFormatada + "\n" +
            "Horário: " + hora);

        // Fecha a modal e limpa o formulário
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalAgendamento"));
        if (modal) {
            modal.hide();
        }
        this.reset();
    });
