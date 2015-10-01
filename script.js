/**
 * Created by Vadim on 29.09.2015.
 */
function click(){
    alert("cfnvas");
}

var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

//    context.fillStyle = "#222"; // цвет "заливки"
//    context.fillRect(0, 0, canvas.width, canvas.height); // закрашиваем холст

    canvas.onclick = function(e) { // обрабатываем клики мышью
        var x = (e.pageX - canvas.offsetLeft);
        var y = (e.pageY - canvas.offsetTop);
        event(x, y); // выхов функции действия
    };
}
function event (x, y){
    alert(x+"  "+y);
}