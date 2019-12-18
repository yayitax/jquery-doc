(function($) {
    var shade = "#556b2f"

    $.fn.greenify = function(options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options);

        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };

    $.fn.popup = function(action) {

        if (action === "open") {
            // Open popup code.
        }

        if (action === "close") {
            // Close popup code.
        }

    };

    $.fn.myNewPlugin = function() {

        return this.each(function() {
            // Do something to each element here.
        });

    };
}(jQuery));

(function($) {

    $.fn.showLinkLocation = function() {

        this.filter("a").append(function() {
            return " (" + this.href + ")";
        });

        return this;

    };

}(jQuery));

(function($) {
    // // Plugin definition.
    // $.fn.hilight = function(options) {

    //     // Extend our default options with those provided.
    //     // Note that the first argument to extend is an empty
    //     // object – this is to keep from overriding our "defaults" object.
    //     var opts = $.extend({}, $.fn.hilight.defaults, options);

    //     // Our plugin implementation code goes here.

    // };

    // // Plugin defaults – added as a property on our plugin function.
    // $.fn.hilight.defaults = {
    //     foreground: "red",
    //     background: "yellow"
    // };


    // Plugin definition.
    $.fn.hilight = function(options) {

        // Iterate and reformat each matched element.
        return this.each(function() {

            var elem = $(this);

            // ...

            var markup = elem.html();

            // Call our format function.
            markup = $.fn.hilight.format(markup);

            elem.html(markup);

        });

    };

    // Define our format function.
    $.fn.hilight.format = function(txt) {
        return "<strong>" + txt + "</strong>";
    };

}(jQuery));

$.widget("nmk.progressbar", {
    // Default options.
    options: {
        value: 0
    },
    _create: function() {
        var progress = this.options.value + "%";
        this.element.addClass("progressbar").text(progress);
    },

    // Create a public method.
    value: function(value) {

        // No value passed, act as a getter.
        if (value === undefined) {

            return this.options.value;

            // Value passed, act as a setter.
        } else {

            this.options.value = this._constrain(value);
            var progress = this.options.value + "%";
            this.element.text(progress);

        }

    },

    // Create a private method.
    _constrain: function(value) {

        if (value > 100) {
            value = 100;
        }

        if (value < 0) {
            value = 0;
        }

        return value;
    },
    _create: function() {
        this.element.addClass("progressbar");
        this._update();
    },

    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function() {
        var progress = this.options.value + "%";
        this.element.text(progress);
        if (this.options.value == 100) {
            this._trigger("complete", null, { value: 100 });
        }
    },

    _destroy: function() {
        this.element
            .removeClass("progressbar")
            .text("");
    }
});