PaintFinger = function() {

    var _canvas,
        _context,
        drag,

        initialiseCanvas = function() {

            _canvas = document.getElementById("canvas");

            _context = canvas.getContext("2d");

            _context.strokeStyle = "#E13EAB";
            _context.lineJoin = "round";
            _context.lineWidth = 2;

            applyBindings();

        },

        applyBindings = function() {
            _canvas.addEventListener('mousedown', mousedown, false);
            _canvas.addEventListener('mousemove', mousemove, false);
            window.addEventListener('mouseup', mouseup, false);
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

            _context.lineTo(position.posX, position.posY);
            _context.stroke();
        },

        getCursorPosition = function(event) {
            let canvasBounds = _canvas.getBoundingClientRect();

            return {
                posX: event.clientX - canvasBounds.left,
                posY: event.clientY - canvasBounds.top
            };
        }

    return {
        initialiseCanvas: initialiseCanvas
    };

}();
