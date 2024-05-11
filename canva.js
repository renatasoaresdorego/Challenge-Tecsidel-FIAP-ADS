//Obtem o contexto do canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Desenha a imagem no canvas
var img = new Image();
img.onload = function(){
    ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.height);
}

    // Desenha elementos interativos sobre a imagem
    // Exemplo de elemento interativo
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(100, 100, 50, 50);

    // Adicione mais elementos interativos conforme necessário

    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(200, 100, 50, 50);

    // Adiciona eventos de clique aos elementos interativos
canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    // Verifica se o clique ocorreu em um elemento interativo
    if ((mouseX >= 100 && mouseX <= 150 && mouseY >= 100 && mouseY <= 150) ||
        (mouseX >= 200 && mouseX <= 250 && mouseY >= 100 && mouseY <= 150)) {
        // Exibe a modal
        modal.style.display = "block";
    }
});