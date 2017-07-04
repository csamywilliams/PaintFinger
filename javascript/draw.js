PaintFinger = function() {

    var canvas,
        _context,
        drag,

        getContext = function() {
            return this._context;
        },

        setContext = function(ctxt) {
            this._context = ctxt;
        },

        initialiseCanvas = function() {

            canvas = document.getElementById("canvas");

            context = canvas.getContext("2d");

            context.strokeStyle = "#E13EAB";
            context.lineJoin = "round";
            context.lineWidth = 2;

            setContext(context);

            applyBindings();

        },

        applyBindings = function() {
        	mousemove();
            mousedown();
            mouseup();
            mouseout();
        },

		mousedown = function() {
        	$("#canvas").mousedown(function(event) {
      			var position = getCursorPosition(event);
                getContext().moveTo(position.posX, position.posY);
                getContext().beginPath();
                drag = true;
            });

        },

        mousemove = function() {
            $("#canvas").mousemove(function(event) {
                if(drag) {
                    drawStroke(event);
                }
            });
        },

        mouseup = function() {
            $("#canvas").mouseup(function(event) {
                drag = false;
                getContext().closePath();
            });
        },

        mouseout = function() {
            $("#canvas").mouseout(function(event) {
                drag = false;
                getContext().closePath();
            });
        },

        drawStroke = function(event) {

            var position = getCursorPosition(event);

            getContext().lineTo(position.posX, position.posY);
            getContext().stroke();
        },

        getCursorPosition = function(event) {
            let canvasBounds = canvas.getBoundingClientRect();

            return {
                posX: event.clientX - canvasBounds.left,
                posY: event.clientY - canvasBounds.top
            };
        }

    return {
        initialiseCanvas: initialiseCanvas
    };

}();
