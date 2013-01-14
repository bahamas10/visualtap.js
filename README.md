visualtap.js
============

Add a visual aspect to touch events on any dom element

** supports multi-touch! **

Usage
-----

See it in action here http://bahamas10.github.com/visualtap.js/

``` html
<script src="visualtap.min.js"></script>
visualtap(document.body);
```

Now, when a `touchstart` event is fired on the body, a nice
circle will appear for a very small amount of time show where
the touch happened.

Advanced
--------

### `function visualtap(elem, opts)`

* `elem`: An event listener will be placed on this element to detect touch
  events and provide visual feedback
* `opts`: An optional object of options
    * `opts.border`: the CSS string defining the border, defaults to `2px solid white`
    * `opts.borderRadius`: the CSS string defining the border radius, defaults to `100px`
    * `opts.timer`: the time in ms to wait before hiding the touch notification, defaults to `80`
    * `opts.percentage`: the size of the element to create as a percentage of the screen size, defaults to `10`

The `visualtap()` function also returns the `div` dom element that was created,
so you can style that manually, or attach an image if you'd like.

License
-------

MIT
