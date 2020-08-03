function restart(){

}

//初始化函数，页面加载的时候调用重置函数，重新开始
window.onload = function () {
    // // 禁止页面滚动
    // document.body.addEventListener('touchmove', function(e){
    //     e.preventDefault();
    // }, { passive: false });  //passive 参数不能省略，用来兼容ios和android
    document.documentElement.style.overflow='hidden';
    var move=function(e){
        e.preventDefault && e.preventDefault();
        e.returnValue=false;
        e.stopPropagation && e.stopPropagation();
        return false;
    }
    // 禁止页面滚动
    var keyFunc=function(e){
    if(37<=e.keyCode && e.keyCode<=40){
    return move(e);
    }
    }



    var map = document.getElementById("map");
    var game = new Game(map);
    game.init();
};