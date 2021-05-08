let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // definido o tamanho
let snake = [];

snake[0] = { //definindo o local para a cobrinha iniciar, no meio da tela
    x: 8 * box, //cartesiano
    y: 8 * box
};
let direction ="right"; //direção da cobrinha

function criarBG(){ // função de criação do background
    context.fillStyle = "lightgreen"; //fundo do jogo
    context.fillRect(0, 0, 16 * box, 16 * box); //altura e largura para ficar quadrado
}

function criarCobrinha(){ // função de preenchimento da cobrinha
    //vai percorrer todo o array e vai ecrementar
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"; //vai pintar o corpo da cobrinha de verde 
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function iniciarJogo(){
    criarBG(); 
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //add ou dec quadrado quando a cobrinha se move
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //função top, retira o ultimo elemento do array
    snake.pop();

    //nova cabeça da cobrinha
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); // o intervalo de 100 ms para iniciar o jogo e atualizar para dar continuiadade sem travar
