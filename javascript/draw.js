PaintFinger = function() {

    var _canvas,
        _context,
        drag,

        getContext = function() {
            return this._context;
        },

        setContext = function(ctxt) {
            this._context = ctxt;
        },

        getCanvas = function() {
            return this._canvas;
        },

        setCanvas = function(canvas) {
            this._canvas = canvas;
        },

        initialiseCanvas = function() {

            let canvas = document.getElementById("canvas");

            let context = canvas.getContext("2d");

            context.strokeStyle = "#E13EAB";
            context.lineJoin = "round";
            context.lineWidth = 2;

            setContext(context);
            setCanvas(canvas);

            applyBindings(context);

        },

        applyBindings = function(context) {
            getCanvas().addEventListener('mousedown', mousedown, false);
            getCanvas().addEventListener('mousemove', mousemove, false);
            window.addEventListener('mouseup', mouseup, false);
        },

		mousedown = function(event) {
  			var position = getCursorPosition(event);
            getContext().moveTo(position.posX, position.posY);
            getContext().beginPath();
            drag = true;
        },

        mousemove = function(event) {
            if(drag) {
                drawStroke(event);
            }
        },

        mouseup = function() {
            drag = false;
            getContext().closePath();
        },

        drawStroke = function(event) {

            var position = getCursorPosition(event);

            getContext().lineTo(position.posX, position.posY);
            getContext().stroke();
        },

        getCursorPosition = function(event) {
            let canvasBounds = getCanvas().getBoundingClientRect();

            return {
                posX: event.clientX - canvasBounds.left,
                posY: event.clientY - canvasBounds.top
            };
        }

    return {
        initialiseCanvas: initialiseCanvas
    };

}();
