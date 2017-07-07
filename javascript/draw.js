PaintFinger = function() {

    var _canvas,
        _context,
        drag,
        _colour =  "hsla(0, 0%, 0%, 1)",

        initialiseCanvas = function() {

            _canvas = document.getElementById("canvas");

            _context = canvas.getContext("2d");

            _context.lineJoin = "round";
            _context.lineWidth = 2;

            applyBindings();

        },

        applyBindings = function() {
            _canvas.addEventListener('mousedown', mousedown, false);
            _canvas.addEventListener('mousemove', mousemove, false);
            _canvas.addEventListener ("mouseout", mouseup, false);
            window.addEventListener('mouseup', mouseup, false);
            paletteListener();
        },

		mousedown = function(event) {
  			var position = getCursorPosition(event);
            _context.moveTo(position.posX, position.posY);
            _context.beginPath();
            drag = true;
        },

        mousemove = function(event) {
            if(drag) {
                drawStroke(event);
            }
        },

        mouseup = function() {
            drag = false;
            _context.closePath();
        },

        drawStroke = function(event) {

            var position = getCursorPosition(event);

            _context.strokeStyle = _colour;

            _context.lineTo(position.posX, position.posY);
            _context.stroke();
        },

        getCursorPosition = function(event) {
            let canvasBounds = _canvas.getBoundingClientRect();

            return {
                posX: event.clientX - canvasBounds.left,
                posY: event.clientY - canvasBounds.top
            };
        },

        paletteListener = function() {

            document.getElementById("colour-palette").addEventListener("click", function(e) {

                _context.closePath();
            	if(e.target && e.target.nodeName == "LI") {

                    let colour = event.target.dataset.swatch;
                    _colour = colour;
            	}
            });
        };

    return {
        initialiseCanvas: initialiseCanvas
    };

}();
