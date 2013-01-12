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
  div.hidden = true;
  div.style.position = 'absolute';
  div.style.border = opts.border || '2px solid white';
  div.style.borderRadius = opts.borderRadius || '100px';
  elem.appendChild(div);

  // timer for the touch fadeout
  var timer;

  // add the event listeners on touch
  elem.addEventListener('touchstart', touchstart, false);
  function touchstart(e) {
    // sanity check
    var ct = e && e.changedTouches && e.changedTouches[0];
    if (!ct) return;
    var x = ct.pageX;
    var y = ct.pageY;

    var size = Math.max(window.innerWidth, window.innerHeight);
    div.style.width = ((opts.percentage || 10) / 100 * size) + 'px';
    div.style.height = div.style.width;

    if (timer) clearTimeout(timer);
    // move the touch div into place and show it
    div.style.top = (y - (div.style.height.replace(/[^0-9]+$/g, '') / 2)) + 'px';
    div.style.left = (x - (div.style.height.replace(/[^0-9]+$/g, '') / 2)) + 'px';
    div.hidden = false;

    // set the timer to remove the touch
    timer = setTimeout(hidediv, opts.timer || 80);
  }

  function hidediv() {
    div.hidden = true;
  }

  // return the div, let the user do whatever they want
  return div;
}
