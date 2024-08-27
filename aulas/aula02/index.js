const root = document.getElementById("root");

/* componentes da aplicacao */

function Cabecalho() {
    const logo = Imagem("", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const grupo1 = document.createElement("div");
    grupo1.append(logo, titulo);

    const pesquisar = InputSearch();
    const icone = Imagem("", "Ícone de Pesquisar");
    const grupo2 = document.createElement("div");
    grupo2.append(pesquisar, icone);
    
    const header = document.createElement("header");
    header.append(grupo1, grupo2);
    return header;
}

function Principal() {
    const main = document.createElement("main");
    return main;
}

function Rodape(texto) {
    const paragrafo = document.createElement("p");
    paragrafo.innerText = texto
    const footer = document.createElement("footer");
    footer.append(paragrafo);
    return footer;
}

function Botao(nome) {
    const button = document.createElement("input");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);
    return button;
}

function Input(id, tipo, rotulo, obrigatorio = false) {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = document.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    if (obrigatorio) input.setAttribute("required", "");
    const grupo = document.createElement("div");
    grupo.append(label, input);
    return grupo;
}

function InputSearch() {
    const input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Pesquisar...");
    return input;
}

function Link(texto, rota) {
    const link = document.createElement("a");
    link.setAttribute("href", rota);
    link.innerText = texto;
    return link;
}

function Titulo(texto) {
    const titulo = document.createElement("h1");
    titulo.innerText = texto;
    return titulo;
}

function Imagem(origem, texto) {
    const img = document.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;
}

function FormLogin() {
    const button = Botao("Entrar");
    const email = Input("email", "email", "E-mail");
    const senha = Input("senha", "password", "Senha");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.append(email, senha, button);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // chamada ao backend
        navega("/home");
    });
    return form;
}

/* utilitarios */

function navega(rota) {
    root.innerHTML = "";
    if (rota === "/login") {
        Login();
    } else if (rota === "/home") {
        Home();
    } else if (rota === "/perfil") {
        Perfil();
    } else {
        root.innerHTML = "<p>Deu ruim!</p>";
    }
}

/* paginas da aplicacao */

function Perfil() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Home() {
    root.append(Cabecalho());
    root.append(Principal());
}

function Login() {
  const logo = Imagem("https://www.svgrepo.com/show/382151/education-graduation-learning-school-study.svg", "Logo da Aplicação");
  const titulo = Titulo("Aluno Online");
  const link = Link("Esqueceu a Senha?", "/esqueceu-senha");
  const form = FormLogin();
  const main = Principal();
  main.append(logo, titulo, form, link);
  const rodape = Rodape("Copyright (C) 2024");
  root.append(main, rodape);
}

Login();