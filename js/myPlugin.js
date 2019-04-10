
(function($){
    $.fn.changeColor = function(options){

        var settings = $.extend({
            text: "Lorem",
            c: "green",
            bc: "red"
        }, options);
        
        this.css({
            color: settings.c,
            backgroundColor: settings.bc
        });

        this.text(settings.text);

        return this;
    };

    $.fn.addButton = function(options){
        var mySettings = $.extend({
            text: "New Button",
            classes : [],
            fSize : 16
        }, options);

        var newButton = $("<button></button>");
        newButton.text(mySettings.text);
        newButton.css("font-size", mySettings.fSize + "px");
        var cls = mySettings.classes.join(" ");
        newButton.addClass(cls);

        this.append(newButton);
        return this;
    }

}(jQuery));


