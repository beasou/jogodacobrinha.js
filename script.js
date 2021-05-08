let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // definido o tamanho

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //altura e largura para ficar quadrado
}

criarBG(); 