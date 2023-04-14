function consulta_cep() {
  // salva o valor digitado no input
  var cep = document.getElementById("cep").value;

  // realiza a consulta pelo cep
  $.ajax({
    url: "https://viacep.com.br/ws/" + cep + "/json/",
    type: "GET",

    // caso a consulta tenha sucesso:
    success: function (response) {
      // configura o retorno da busca pelo cep em tela
      document.getElementById("response").innerHTML =
        "Cep: "        + response.cep        + "<br>" +
        "Logradouro: " + response.logradouro + "<br>" +
        "Bairro: "     + response.bairro     + "<br>" +
        "Localidade: " + response.localidade + "<br>" +
        "UF: "         + response.uf         + "<br>";

      // caso o cep nao exista, mostre essa mensagem
      if (response.cep == undefined) {
        document.getElementById("response").innerHTML = "Cep não encontrado";
      }
    },
  });
}
