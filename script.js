let veiculos = [];

function cadastrarUsuario(){

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if(nome === "" || email === "" || senha === ""){
    mostrarMensagem("Preencha todos os campos!");
    return;
  }

  mostrarMensagem("Usuário cadastrado com sucesso!");

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
}

function cadastrarVeiculo(){

  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = document.getElementById("ano").value;
  const placa = document.getElementById("placa").value;
  const tipo = document.getElementById("tipo").value;

  if(
    marca === "" ||
    modelo === "" ||
    ano === "" ||
    placa === "" ||
    tipo === ""
  ){
    mostrarMensagem("Preencha todos os campos!");
    return;
  }

  const veiculo = {
    marca,
    modelo,
    ano,
    placa,
    tipo
  };

  veiculos.push(veiculo);

  atualizarTabela();

  atualizarContador();

  limparCampos();

  mostrarMensagem("Veículo cadastrado com sucesso!");
}

function atualizarTabela(){

  const tabela = document.getElementById("listaVeiculos");

  tabela.innerHTML = "";

  veiculos.forEach((veiculo, index) => {

    tabela.innerHTML += `
      <tr>

        <td>${veiculo.marca}</td>
        <td>${veiculo.modelo}</td>
        <td>${veiculo.ano}</td>
        <td>${veiculo.placa}</td>
        <td>${veiculo.tipo}</td>

        <td>
          <button onclick="excluirVeiculo(${index})">
            Excluir
          </button>
        </td>

      </tr>
    `;
  });
}

function excluirVeiculo(index){

  veiculos.splice(index, 1);

  atualizarTabela();

  atualizarContador();

  mostrarMensagem("Veículo removido!");
}

function atualizarContador(){

  document.getElementById("contador").innerText =
    veiculos.length;
}

function limparCampos(){

  document.getElementById("marca").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("placa").value = "";
  document.getElementById("tipo").value = "";
}

function mostrarMensagem(texto){

  const mensagem =
    document.getElementById("mensagem");

  mensagem.innerText = texto;

  mensagem.style.opacity = "1";

  setTimeout(() => {

    mensagem.style.opacity = "0";

  }, 3000);
}