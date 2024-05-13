//Obtem o contexto do canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Desenha a imagem no canvas
var img = new Image();
img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.height);
}

// Desenha elementos interativos sobre a imagem
// Exemplo de elemento interativo
ctx.fillStyle = 'rgba(255, 0, 0, 0.75)';
ctx.fillRect(326, 98, 43, 21);

// Adicione mais elementos interativos conforme necessário
ctx.fillStyle = 'rgba(173, 202, 52, 0.75)';
ctx.fillRect(551, 98, 43, 21);



// Adiciona eventos de clique aos elementos interativos
canvas.addEventListener('click', function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    // Verifica se o clique ocorreu em um elemento interativo
    if ((mouseX >= 326 && mouseX <= 369 && mouseY >= 77 && mouseY <= 98) ||
        (mouseX >= 551 && mouseX <= 594 && mouseY >= 77 && mouseY <= 98)) {
        // Exibe a modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

});

// Encontre o elemento de fechar da modal
var closeModal = document.querySelector(".close");

// Adicione um evento de clique ao elemento de fechar
closeModal.addEventListener("click", function () {
    // Encontre a modal atual
    var modal = document.querySelector(".modal");
    // Oculte a modal
    modal.style.display = "none";
});