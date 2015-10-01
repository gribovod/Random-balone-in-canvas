/**
 * Created by Vadim on 29.09.2015.
 */
function click(){
    alert("cfnvas");
}

var canvas;
var canvasHeight = 600;
var canvasWidth = 800;
var context;
var RadiusOfCircle = 10;
var ArayOfCircles = new Array();


window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;

    var cori = RCFNC();
    ArayOfCircles[1] = (new Circle(cori.X,  cori.Y , RadiusOfCircle));
    DrawAllCircle();


    canvas.onclick = function(e) { // обрабатываем клики мышью
        var x = (e.pageX - canvas.offsetLeft);
        var y = (e.pageY - canvas.offsetTop);
        event(x, y); // выхов функции действия
    };
}

function event (x, y){
    console.log(x+"  "+y);
    ArayOfCircles[1].CheckPoint(x,y);

}

function Circle(x,y,r){
    var X = x;
    var Y = y;
    var R = r;

    this.Draw  = function (){
        context.beginPath();
        context.arc(X, Y, R, 0, 2*Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'red';
        context.stroke();
    };

    this.CheckPoint = function(XofPoint, YofPoint){
        var h = Math.sqrt(Math.pow((X-XofPoint),2) + Math.pow((Y-YofPoint),2));

        var a = Math.pow((X-XofPoint),2);
        var b = Math.pow((Y-YofPoint),2);

        if (R <= h) {
            console.log( 'Дa!' );
            return true;
        } else {
            console.log( 'НЕТ!' );
            return false;
        }
    };
}

function RCFNC() { //RendomiseCoordinateForNewCircle
    var point = {};
    var max = canvasWidth - RadiusOfCircle;
    var min =  RadiusOfCircle;
    var rand = min + Math.random() * (max - min);
    point.X = Math.round(rand);

    max = canvasHeight - RadiusOfCircle;
    min =  RadiusOfCircle;
    rand = min + Math.random() * (max - min)
    point.Y = Math.round(rand);

    return point;
}
function DrawAllCircle(){
    ArayOfCircles.forEach(function(item, i, ArayOfCircles){
            item.Draw();
        }
    );
}