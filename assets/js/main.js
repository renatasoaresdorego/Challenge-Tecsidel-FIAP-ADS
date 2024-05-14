/*------------------------------------------------------------------*/

/* ATUALIZAR DATA*/
function getDataAtual() {
    const data = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString('pt-BR', options);
}

  // Função para obter o dia da semana atual
function getDiaSemanaAtual() {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date();
    const diaSemana = data.getDay();
    return diasSemana[diaSemana];
}

  // Atualizar os elementos HTML com a data e o dia da semana atual
function atualizarDataDiaSemana() {
    const dataElemento = document.getElementById('data');
    const diaSemanaElemento = document.getElementById('diaSemana');

    dataElemento.textContent = getDataAtual();
}

window.onload = function() {
    atualizarDataDiaSemana();
};

/*------------------------------------------------------------------*/

/* CANVA PORTICO*/

document.addEventListener("DOMContentLoaded", function() {
    var canvasElement = document.getElementById("canvas-imagem");
    if (canvasElement) {
        var ctx = canvasElement.getContext("2d");
        if (ctx) {
            var coordenadasPins = [
                { x: 600, y: 200 },
                { x: 150, y: 650 },
                { x: 420, y: 370 }
            ];

            function updateTitulo() {
                var select = document.getElementById("dropbox-portico");
                var h3 = document.getElementById("conteudo-selecionado");
                var selectedOption = select.options[select.selectedIndex];
                h3.textContent = selectedOption.textContent;

                var mapa = new Image();
                var pinVazado = new Image();
                var pinPreenchido = new Image();
                
                pinVazado.src = "assets/images/pin-vazado.svg";
                pinPreenchido.src = "assets/images/pin-preenchido.svg";

                mapa.onload = function() {
                    canvasElement.width = mapa.width;
                    canvasElement.height = mapa.height;

                    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
                    ctx.drawImage(mapa, 0, 0);

                    switch(selectedOption.value) {
                        case "opcao1":
                            desenharPins(coordenadasPins, [1], pinPreenchido, pinVazado);
                            desenharPins(coordenadasPins, [0, 2], pinVazado, pinPreenchido);
                            break;
                        case "opcao2":
                            desenharPins(coordenadasPins, [2], pinPreenchido, pinVazado);
                            desenharPins(coordenadasPins, [1, 0], pinVazado, pinPreenchido);
                            break;
                        case "opcao3":
                            desenharPins(coordenadasPins, [0], pinPreenchido, pinVazado);
                            desenharPins(coordenadasPins, [1, 2], pinVazado, pinPreenchido);
                            break;
                        default:
                            // Se nenhuma opção estiver selecionada, desenhe todos os pins como pin-vazado
                            desenharPins(coordenadasPins, [0, 1, 2], pinVazado, pinVazado);
                            break;
                    }
                };

                mapa.src = "assets/images/mapa.svg";
            }

            function desenharPins(coordenadas, indices, imagemPreenchida, imagemVazada) {
                indices.forEach(function(index) {
                    ctx.drawImage(imagemPreenchida, coordenadas[index].x, coordenadas[index].y);
                });
                coordenadas.forEach(function(coordenada, index) {
                    if (!indices.includes(index)) {
                        ctx.drawImage(imagemVazada, coordenada.x, coordenada.y);
                    }
                });
            }

            updateTitulo();

            var select = document.getElementById("dropbox-portico");
            select.addEventListener("change", updateTitulo);
        } else {
            console.error("Erro: Não foi possível obter o contexto de desenho do canvas");
        }
    } else {
        console.error("Erro: Elemento canvas-imagem não encontrado");
    }
});

/*------------------------------------------------------------------*/

/*ABRIR FULL SCREEN*/

/*Modal Cameras */
function abrirFullScreen(caminhoDaImagem) {
    const imgFullScreen = new Image();
    imgFullScreen.src = caminhoDaImagem;
  
    imgFullScreen.onload = function() {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement ||
            document.mozFullScreenElement || document.msFullscreenElement;
        if (!fullscreenElement) {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('fullscreen-container');
            const imgElement = document.createElement('img');
            imgElement.src = caminhoDaImagem;
            imgElement.classList.add('fullscreen-image'); // Adiciona a classe fullscreen-image
            imgContainer.appendChild(imgElement);
            document.body.appendChild(imgContainer);
            imgContainer.requestFullscreen = imgContainer.requestFullscreen || imgContainer.webkitRequestFullscreen ||
                imgContainer.mozRequestFullScreen || imgContainer.msRequestFullscreen;
            imgContainer.requestFullscreen();
            imgContainer.addEventListener('fullscreenchange', function() {
                if (!document.fullscreenElement) {
                    document.body.removeChild(imgContainer);
                }
            });
        } else {
            document.exitFullscreen();
        }
    };
  }