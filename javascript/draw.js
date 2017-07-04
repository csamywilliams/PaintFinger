PaintFinger = function() {

    var canvas,
        context;

    initialiseCanvas = function() {

            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");

            context.strokeStyle = "#E13EAB";
            context.lineJoin = "round";
            context.lineWidth = 2;

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
                context.moveTo(position.posX, position.posY);
                context.beginPath();
            });

        },

        mousemove = function() {
            $("#canvas").mousemove(function(event) {
                drawStroke(event);
            });
        },

        drawStroke = function(event) {

          var position = getCursorPosition(event);

          context.lineTo(position.posX, position.posY);
          context.stroke();
        }

        mouseup = function() {
            $("#canvas").mouseup(function(event) {
                context.closePath();
            })
        },

        mouseout = function() {
            $("#canvas").mouseout(function(event) {
                context.closePath();
            })
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
