var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var img = new Image();
img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.height);
}

canvas.addEventListener('click', function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    if (mouseX >= 326 && mouseX <= 369 && mouseY >= 77 && mouseY <= 98) {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

    if (mouseX >= 551 && mouseX <= 594 && mouseY >= 77 && mouseY <= 98) {
        var modal = document.getElementById('myModal2');
        modal.style.display = "block";
    }
});

var closeModal = document.querySelector(".close");
var closeModal2 = document.querySelector(".close2");

closeModal.addEventListener("click", function () {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
});

closeModal2.addEventListener("click", function () {
    var modal2 = document.querySelector(".modal2");
    modal2.style.display = "none";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        var modal = document.querySelector(".modal");
        var modal2 = document.querySelector(".modal2");
        
        if (modal.style.display === "block") {
            modal.style.display = "none";
        }
        if (modal2.style.display === "block") {
            modal2.style.display = "none";
        }
    }
});
