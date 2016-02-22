/// <reference path="snap.svg-min.js" />
/// <reference path="velocity.min.js" />

var _svg = Snap('#shapes');
var _circle = Snap('.circle');

var customBezier = [.19, 1, .22, 1];


var $square = document.getElementById('square-shape');
var $oct = document.getElementById('oct-shape');

//Velocity.mock = 5;

setTimeout(function () {
    //_circle.animate({ r: 50 }, 250, mina.elastic);


    Velocity($square,
        'transition.expandOut',
        { duration: 260 },
        customBezier
      );
    setTimeout(AnimateOct, 250);
    //Velocity($oct, { scale: .2 }, { duration: 360 }, customBezier);

}, 3000);

function AnimateOct() {

    Velocity($oct,
        'transition.expandIn',
        { duration: 260 },
        customBezier);

    setTimeout(hideOct, 3000);
}

function hideOct() {
    Velocity($oct,
        'transition.expandOut',
        { duration: 200 },
        customBezier);

   setTimeout(AnimateCircle, 250);
    //AnimateCircle();
}

function AnimateCircle() {
    Velocity(document.getElementById('circle-shape'), 'transition.expandIn', { duration: 260 }, customBezier);
}