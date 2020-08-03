// 构造函数 Food
// 属性
//  color
//  width
//  height
//  direction
// 方法
//  render
//  move
var _position = "absolute";
var snakeElement = []; // 存放蛇的各个部分
function Snake(options){

    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = options.direction || "right";
    this.body = [    
        {x: 3, y: 2, color: "black"},
        {x: 2, y: 2, color: "gray"},
        {x: 1, y: 2, color: "gray"}
    ]
}
// 渲染body的每一个item
Snake.prototype.render = function(map){
    // 先删除上一个渲染的蛇
    for(var i = snakeElement.length-1; i >= 0; i--){
        var ele = snakeElement[i];
        ele.parentNode.removeChild(ele);
        snakeElement.splice(i,1);
    }

    var that = this;
    this.body.forEach(function (item){
        var div = document.createElement("div");
        map.appendChild(div);
        div.style.width = that.width + "px";
        div.style.height = that.height + "px";
        div.style.backgroundColor = item.color;
        div.style.position = _position
        div.style.left = item.x * that.width + "px";
        div.style.top = item.y * that .height + "px";
        snakeElement.push(div);
    })
}
// 移动 先移动蛇身
Snake.prototype.move = function(){
    //蛇身的位置
    for(var i = this.body.length - 1; i > 0; i--){
        this.body[i].x = this.body[i-1].x; // 对于蛇身，后一个蛇身等于前一个蛇身的位置
        this.body[i].y = this.body[i-1].y;
    }
    //蛇头的位置
    switch(this.direction){
        case "right":
            this.body[0].x += 1;break;
            case "left":
                this.body[0].x -= 1;break;
                case "up":
                    this.body[0].y -= 1;break;
                    case "down":
                        this.body[0].y += 1;break;
    }
 
}

