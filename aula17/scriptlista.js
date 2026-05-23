function receber(){
    // recebe variavel
    let item = document.getElementById("item").value;
    let num = document.getElementById("valor").value;

    //caso não encontre o nome ou número
    if(item == "") {
        alert("Digite um item");
        return;

    } else if (valor == "") {
        alert("Digite o vlor do item");
        return;
    }
    //linha
    let linha = document.createElement("tr");

    //bloco da linha
    let element = document.createElement("td");
    element.innerHTML = item;
    let val = document.createElement("td");
    val.innerHTML = num;

    //adiciona item
    document.getElementById("linha").appendChild(element);
    document.getElementById("linha").appendChild(val);

    //criar linhas e depois blocos,
    //precisa tambem criar uma variavel que vai receber o elemento que ira receber os valores de linha e bloco
    //apos isto adivionar os elementos de acordo com o fianl do codigo.
}