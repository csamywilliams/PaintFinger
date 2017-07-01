PaintFinger = function () {

    var canvas,
        context,
        clickX = new Array(),
        clickY = new Array(),
        drag = new Array(),
        paint;

    init = function(){
        this.canvas = document.getElementById("canvas");
        _context = this.canvas.getContext("2d");

        bindEventListeners();
    },

    bindEventListeners =  function() {
        mouseDown();
        mouseOutOfArea();
        mouseMove();
    },

    mouseDown = function() {
        $("#canvas").mousedown(function (event) {

            console.log("mouse down");

            var mouseX = event.pageX - this.offsetLeft;
            var mouseY = event.pageY - this.offsetTop;

            paint = true;

            addClick(mouseX, mouseY, true);
            redraw();
        });
    },

    mouseMove = function() {

        $("#canvas").mousemove(function (event) {
            if(paint) {
                addClick(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
                redraw();
            }
        });
    };

    addClick = function(x, y, dragging) {

        console.log("add click");

        clickX.push(x);
        clickY.push(y);
        drag.push(dragging);
    },

    mouseOutOfArea = function() {
        $("#canvas").mouseleave(() => {
            paint = false;
        });

        $("#canvas").mouseleave(() => {
            paint = false;
        });
    },

    redraw = function() {

        console.log("redraw");

        _context.clearRect(0, 0, _context.canvas.width, _context.canvas.height); // Clears the canvas

        _context.strokeStyle = "#df4b26";
        _context.lineJoin = "round";
        _context.lineWidth = 1;

        for (var i=0; i < clickX.length; i++) {
            _context.beginPath();

            if (drag[i] && i) {
                _context.moveTo(clickX[i-1], clickY[i-1]);
            } else {
                _context.moveTo(clickX[i]-1, clickY[i]);
            }

            _context.lineTo(clickX[i], clickY[i]);
            _context.closePath();
            _context.stroke();
        }
    };

    return {
       init: init
   };

 }();
