Base = function() {

    var initialiseView = function(context) {

            PaintFinger.initialiseCanvas();
            Canvas.bindActions();

        };

    return {
        initialiseView : initialiseView
    };

}();
