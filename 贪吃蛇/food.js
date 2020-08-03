// 构造函数 Food
// 属性
//  color
//  width
//  height
//  x
//  y
// 方法
//  render
//  random
var map = document.getElementById("map");
var food_position = "absolute";
var _div = null;
var _map = map;
function Food(options){
    options = options || {};
    this.color = options.backgroundColor || "green";
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
}

Food.prototype.render = function(map){
    var div = document.createElement("div")
    map.appendChild(div);

    _div = div;
    _map = map;

    div.style.position = food_position;
    div.style.top = this.y + "px";
    div.style.left = this.x + "px";

    div.style.width = this.width + "px";
    div.style.height = this.height + "px";

    div.style.backgroundColor = this.color;
}

Food.prototype.random = function(){
    this.x = Tool.getRandom(0,_map.offsetWidth / this.width - 1) * this.width;
    this.y = Tool.getRandom(0,_map.offsetHeight / this.height - 1) * this.height;
    this.color = Tool.getRandomHexColor();
    _div.style.left = this.x + "px";
    _div.style.top = this.y + "px";
    _div.style.backgroundColor = this.color;

}


