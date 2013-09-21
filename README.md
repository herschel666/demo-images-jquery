Showing images after they are completely loaded with jQuery
============================
![image](http://www.emanuel-kluge.de/wp-content/uploads/2009/06/bilder-mit-jquery-einblenden.png)

This is the demo code for [an article about showing in images on a website after they are completely loaded](http://www.emanuel-kluge.de/tutorial/bilder-mit-jquery-einblenden-wenn-sie-fertig-geladen-sind/).

----------------
##[Demo](http://www.emanuel-kluge.de/demo/bilder-einblenden-mit-jquery/index.html)##

----------------

The article is in german, but the code is rather simple. When JavaScript is enabled in the browser (indicated by the `.js`-class on the `<html>`-element), all images with the CSS-class `.image` are hidden by giving them an `opacity` of zero. In the script, a loading-spinner is inserted into the DOM, indicating to the visitor that there is something loading.

When the `load`-event is triggered on the `window`-object, all the loading-spinners are removed as well as the `.loading`-class of the `.image`-elements. The fade-in-effect is done by CSS-transitions.

Though it is possible to bind the `load`-event directly to each image, this approach leads to problems when a visitor leaves the page and returns by hitting the browser's back-button. In this case the images are fetched from the browser cache and no `load`-event is triggered. Thus the images keep their `opacity` of zero.

If you have questions, write a comment at the [article's page](http://www.emanuel-kluge.de/tutorial/bilder-mit-jquery-einblenden-wenn-sie-fertig-geladen-sind/) or contact me via [twitter](https://twitter.com/herschel_r).