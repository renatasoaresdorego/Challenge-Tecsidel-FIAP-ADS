// Função para obter a data atual
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

function updateTitulo() {
  var select = document.getElementById("dropbox-portico");
  var h3 = document.getElementById("conteudo-selecionado");
  var selectedOption = select.options[select.selectedIndex];
  h3.textContent = selectedOption.textContent;
}

document.addEventListener("DOMContentLoaded", function() {
  var select = document.getElementById("dropbox-portico");
  var h3 = document.getElementById("conteudo-selecionado");
  var defaultOption = select.options[0]; 
  h3.textContent = defaultOption.textContent;
});

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


