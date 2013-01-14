/**
 * visualtap.js
 *
 * add a visual aspect to touch events on any dom element
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 1/10/2013
 * License: MIT
 *
 * @preserve
 */

// call this function to make an element visualtap
function visualtap(elem, opts) {
  opts = opts || {};

  // create the div that will show the touch
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.border = opts.border || '2px solid white';
  div.style.borderRadius = opts.borderRadius || '100px';
  div.style.zIndex = '9999';

  // add the event listeners on touch
  elem.addEventListener('touchstart', touchstart, false);
  function touchstart(e) {
    // sanity check
    var ct = e && e.changedTouches && e.changedTouches[0];
    if (!ct) return;
    var x = ct.pageX;
    var y = ct.pageY;

    var size = Math.max(window.innerWidth, window.innerHeight);
    var clone = div.cloneNode(true);
    clone.style.width = clone.style.height = ((opts.percentage || 10) / 100 * size) + 'px';

    // move the touch div into place and show it
    clone.style.top = (y - (clone.style.height.replace(/[^0-9]+$/g, '') / 2)) + 'px';
    clone.style.left = (x - (clone.style.height.replace(/[^0-9]+$/g, '') / 2)) + 'px';
    elem.appendChild(clone);

    // set the timer to remove the touch
    setTimeout(hidediv, opts.timer || 80);
    function hidediv() {
      elem.removeChild(clone);
      delete clone;
    }
  }

  // return the div, let the user do whatever they want
  return div;
}
