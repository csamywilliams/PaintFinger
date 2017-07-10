Canvas = function() {

    var _context,

        bindActions = function() {

            _context = PaintFinger.getContext();

            onClickClearCanvas();
        },

        onClickClearCanvas = function() {
            document.getElementById("clearCanvas").addEventListener("click", clearCanvas, true);
        },

        clearCanvas = function() {
            _context.clearRect(0, 0, canvas.width, canvas.height);
        };

    return {
        bindActions : bindActions,
        clearCanvas : clearCanvas
    };

}();
