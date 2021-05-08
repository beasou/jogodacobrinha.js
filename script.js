let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // definido o tamanho
let snake = [];

snake[0] = { //definindo o local para a cobrinha iniciar, no meio da tela
    x: 8 * box, //cartesiano
    y: 8 * box
};
let direction ="right"; //direção da cobrinha
let food = {
    //faz a comida da cobrinha aparecer em vários locais diferentes
    x: Math.floor(Math.random() * 15 + 1) * box, //gerar numeros exeto os flutuantes 
    y: Math.floor(Math.random() * 15 + 1) * box

}

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

function drawFood(){ //comida da cobrinha
    context.fillStyle = "blue";
    context.fillRect(food.x, food.y, box, box);

}

document.addEventListener('keydown', update);

function update (event){ //o quadrado esta andando para tds direções
    if(event.keyCode == 37 && direction !="right") direction = "left";
    if(event.keyCode == 38 && direction !="down") direction = "up";
    if(event.keyCode == 39 && direction !="left") direction = "right";
    if(event.keyCode == 40 && direction !="up") direction = "down";
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;//para não sair a cobrinha do espaço do quadrado
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    //chamando as funções
    criarBG(); 
    criarCobrinha();
    drawFood();

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
