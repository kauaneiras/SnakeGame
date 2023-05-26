window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    gridSize = 20;
    SnakeSize = 3;

    setInterval(Game, 100)

    document.addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 39:
                velX = 1;
                velY = 0;
                break;
            case 40:
                velX = 0;
                velY = 1;
                break;
            case 80:
                velX = 0;
                velY = 0;
                break;
        }
    });
};

function Game(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lime";

    positionX += velX;
    positionY += velY;

    if (positionX > gridSize) {
        positionX = 0;
    };
    if (positionX < 0) {
        positionX = gridSize;
    };
    if (positionY > gridSize) {
        positionY = 0;
    };
    if (positionY < 0) {
        positionY = gridSize;
    };

    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x*gridSize, snake[i].y*gridSize, gridSize-2, gridSize-2);
        if (snake[i].x == positionX && snake[i].y == positionY) {
            SnakeSize = 3;
        }
    };

    snake.push({x:positionX, y:positionY});

    while (snake.length > SnakeSize) {
        snake.shift();
    };

    ctx.fillStyle = "yellow";
    ctx.fillRect(foodX*gridSize, foodY*gridSize, gridSize-2, gridSize-2);

    if (foodX == positionX && foodY == positionY) {
        SnakeSize++;
        foodX = Math.floor(Math.random()*gridSize);
        foodY = Math.floor(Math.random()*gridSize);
    }
};