/*
Project: fitVideos.js
Author: Jeeva
Date: June 6, 2016
*/

var fitVideos = {};
fitVideos.selectors = [
      'iframe[src*="player.vimeo.com"]',
      'iframe[src*="youtube.com"]',
      'iframe[src*="youtube-nocookie.com"]',
      'iframe[src*="kickstarter.com"][src*="video.html"]',
      'object',
      'embed'
    ];
// mselect all iframes, or mebeded videos
fitVideos.init = function () {
  for (var j = 0; j < this.selectors.length; j++) {
    var nodesToWrap = document.querySelectorAll(this.selectors[j]);
    console.log(nodesToWrap);
    var addedToDocument = false;

    // wrappign iframes with a div
    for (var index = 0; index < nodesToWrap.length; index++) {
      var wrapper = document.createElement("div");
      wrapper.className = "fitVideosClass";
        var node = nodesToWrap[index];
        node.style.width = "100%";
        node.style.height = "100%";
        node.style.position = "absolute";
        node.style.top = "0";
        node.style.left = "0";
        node.parentNode.insertBefore(wrapper, node);
        addedToDocument = true;
        node.parentNode.removeChild(node);
        wrapper.appendChild(node);
    }

    var iframes = document.getElementsByClassName('fitVideosClass');
    for (var i = 0; i < iframes.length; i++) {
      for (var k = 0; k < nodesToWrap.length; k++) {
        // calculate the aspect ratio & getting the right padding
        var padding = (nodesToWrap[k].height / nodesToWrap[k].width) * 100;
        console.log(padding);
        iframes[i].style.position = "relative";
        /* 16:9 = (9/16 * 100) = 56.25 */
        iframes[i].style.paddingBottom = padding + "%";
      }
    }
  }
}