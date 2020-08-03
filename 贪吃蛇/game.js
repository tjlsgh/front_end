// 构造函数 Game
// 属性
//  food
//  snake
//  map
// 方法
//  init()
//  runAuto()
//  bindKey()
function Game(map){
    this.score = 3;
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
}
Game.prototype.init = function(){
    this.food.render(this.map);
    this.food.random();
    this.snake.render(this.map);
    this.whenSnakeMove();
    this.bindKey();
    this.mouseDown();
}
Game.prototype.whenSnakeMove = function(){
    var that = this;
    var timeId = setInterval(function(){
        this.snake.move();
        this.snake.render(this.map); 
        var maxX = this.map.offsetWidth / this.snake.width - 1;
        var maxY = this.map.offsetHeight / this.snake.height - 1;
        var snakeHeadX = this.snake.body[0].x;
        var snakeHeadY = this.snake.body[0].y;
        // 判断是否吃到自己
        for(var i = this.snake.body.length - 1; i > 0; --i){
            if(snakeHeadX == this.snake.body[i].x &&
                snakeHeadY == this.snake.body[i].y){
                clearInterval(timeId);
                alert("Snakes don't eat themselves");
            }
        }
        // 判断边界
        if(snakeHeadX > maxX || snakeHeadX<0 || snakeHeadY > maxY || snakeHeadY < 0){
            clearInterval(timeId);
            alert("Sorry, Wall hitter");
        }

        // 判断蛇是否吃到食物
        this.snakeEatFood();
     
    }.bind(that),150);
}
Game.prototype.bindKey = function(){
    var that = this;
    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            case 37: this.snake.direction = "left";break;
            case 38: this.snake.direction = "up";break;
            case 39: this.snake.direction = "right";break;
            case 40: this.snake.direction = "down";break;
        }
    }.bind(that),false);
}

Game.prototype.snakeEatFood = function(){
    var snakeHeadX = this.snake.body[0].x * this.snake.width;
    var snakeHeadY = this.snake.body[0].y * this.snake.height;
    if(this.food.x == snakeHeadX && this.food.y == snakeHeadY){
        var snakeTail = this.snake.body[this.snake.body.length - 1];
        this.snake.body.push({
            x: snakeTail.x,
            y: snakeTail.y,
            color: this.food.color
        });
        this.food.random();
        //得分
        this.score += 1;
        document.getElementById("length").innerText = this.score;
    }
}

Game.prototype.mouseDown = function(){
    var that = this;
    var restart = document.getElementById("map");
    restart.onclick = function(){
        location.reload();
    }
}
