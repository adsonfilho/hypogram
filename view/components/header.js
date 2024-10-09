export function createHeader(){

    const header = document.createElement('header');
    header.innerHTML =
    `
    <div class="header-container">
        <img>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="sobre.html">Sobre</a>
            <a href="aprendaScrum.html">Aprenda Scrum</a>
            <a href="">Questionários</a>
        </nav>
        <div id="botoes">
            <button>Certificado</button>
            <button>Entrar</button>
        </div>
    </div>
    `;

    const img = header.querySelector('img');
    img.src = '../public/imgs/logotipo.svg';
    img.alt = "Logotipo do curso";

    const main = document.querySelector('main');
    document.body.insertBefore(header, main);
}