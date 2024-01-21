const test = "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável."


document.addEventListener('click', event => {
    const elemento = event.target;

    // Texto Habilidade Html
    if (elemento.tagName === 'IMG' && elemento.classList.contains('txt-html')) {
        manipularTexto(elemento, 'txt-value-html', `${test}`);
    }

    // Texto Habilidade Css
    if (elemento.tagName === 'IMG' && elemento.classList.contains('txt-css')) {
        manipularTexto(elemento, 'txt-value-css', `${test}`);
    }
    
    // Texto Habilidade js
    if (elemento.tagName === 'IMG' && elemento.classList.contains('txt-js')) {
        manipularTexto(elemento, 'txt-value-js', `${test}`);
    }

    // Texto Habilidade react 
    if (elemento.tagName === 'IMG' && elemento.classList.contains('txt-react')) {
        manipularTexto(elemento, 'txt-value-react', `${test}`);
    }
   // Texto Habilidade git
   if (elemento.tagName === 'IMG' && elemento.classList.contains('txt-git')) {
    manipularTexto(elemento, 'txt-value-git', `${test}`);
   }        

    


    // Adicione mais condições conforme necessário para outras imagens e textos
});

function manipularTexto(imagem, classeTexto, texto) {
    // Obtém o nome da imagem
    const nomeImagem = imagem.getAttribute('data-nome-imagem');

    // Seleciona o parágrafo dentro da div correspondente
    const paragrafoExistente = document.querySelector(`.habilidade-box .${classeTexto}`);

    if (paragrafoExistente) {
        // Se o parágrafo existir, remove-o
        paragrafoExistente.remove();
    } else {
        // Se não existir, cria um novo parágrafo
        const criaP = document.createElement('p');
        criaP.className = classeTexto;
        criaP.innerHTML = texto;
        
        // Adiciona o novo parágrafo à div correspondente
        const divHabilidadeBox = imagem.closest('.habilidade-box');
        if (divHabilidadeBox) {
            divHabilidadeBox.appendChild(criaP);
        }
    }
}
