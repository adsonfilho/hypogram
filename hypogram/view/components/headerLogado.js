export function createHeader(){

    const header = document.createElement('header');
    header.innerHTML =
    `
    <div class="header-container">
        <img>
        <nav>
            <a href="">Inicio</a>
            <a href="">Sobre</a>
            <a href="">Aprenda Scrum</a>
            <a href="">Questionarios</a>
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