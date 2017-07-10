Canvas = function() {

    var _context,

        bindActions = function(context) {

            _context = context;

            clearCanvas();

        },

        clearCanvas = function() {
            _context.clearRect(0, 0, canvas.width, canvas.height);

            console.log(_context);
        };

    return {
        bindActions : bindActions
    };

}();
