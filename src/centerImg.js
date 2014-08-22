(function($) {

    $.fn.centerImg = function( options ) {

        // Some default settings
        var settings = $.extend({
            container : $("body"),
            maxWidth: $("body").innerWidth()
        }, options);

        var containerWidth = settings.container.innerWidth();

        return this.each( function() {

            // Get a true image width no matter what styles are applied
            var image = new Image();
            image.src = $(this).attr("src");
            var imgWidth = image.naturalWidth;

            // If the image is less than the container then
            // we do not need to perform any actions. Just bail.
            if (imgWidth <= containerWidth) {
                return this;
            }

            // If the img is greater than the max then reset
            // the width to the max. This allows more flexibility
            // if you want to keep them contained to a certain max
            if (imgWidth > settings.maxWidth) {
                $(this).attr("width", "" + settings.maxWidth + "px");
                imgWidth = settings.maxWidth;
            }

            // Figure out our negative margin based on halfing everything
            marginLeft = (imgWidth / 2) - (containerWidth / 2);

            // Here we set the style with a negative margin to make it truely centered.
            return $(this).attr("style", "margin-left: -" + marginLeft + "px;");

        });

    };

}(jQuery));