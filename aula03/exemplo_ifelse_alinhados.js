// exemplo if/else alinhados
let usuarioLogado = true;
let temPermissão = false;

if (usuarioLogado) { //mesma coisa que usuariologado == true
    
    if (temPermissão) { 
        console.log("Acesso liberado");
    } else {
        console.log("Acesso negado! você não tem permissão");
    }
}
else{
    console.log("Acesso negado: Faça login primeiro");
}