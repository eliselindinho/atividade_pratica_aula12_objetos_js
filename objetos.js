let resultado = document.getElementById("resultado");

const listaUsuarios = [
  {
    id: 1,
    nome: "Thiago Pereira",
    sexo: "Masculino",
    idade: 20,
    email: "fulanodetal@termail.com",
  },

  {
    id: 2,
    nome: "Thaís Lins",
    sexo: "Feminino",
    idade: 19,
    email: "thaisdetal@termail.com",
  },

  {
    id: 3,
    nome: "Mariana Ferreira",
    sexo: "Feminino",
    idade: 25,
    email: "marianaferreira@termail.com",
  },

  {
    id: 4,
    nome: "Pedro Ivo Silva",
    sexo: "Masculino",
    idade: 28,
    email: "pedroivosilva@termail.com",
  },
];

function listarUsuario() {
  let trTds = "";
  listaUsuarios.forEach(function (usuario) {
    trTds += `<tr>
    <td>${usuario.id}</td>
    <td>${usuario.nome}</td>
    <td>${usuario.sexo}</td>
    <td>${usuario.idade}</td>
    <td>${usuario.email}</td>
    </tr>`;
  });
  resultado.innerHTML = trTds;
}
window.addEventListener("load", listarUsuario);
