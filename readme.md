# Center Image

This is a simple jQuery plugin to center an image outside of a container by using negative margin.

## Usage

    $('img.popout').centerImg({
      container: $(".content"), // The container element. Used in calculating width
      maxWidth: 600 // The max width of the image. Default is $("body").innerWidth()
    });

