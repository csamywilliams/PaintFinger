Base = function() {

    var initialiseView = function(context) {

            PaintFinger.initialiseCanvas();
            Canvas.bindActions(PaintFinger.getContext());

        };

    return {
        initialiseView : initialiseView
    };

}();
