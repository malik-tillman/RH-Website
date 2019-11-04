// -----------------------------------------------------------------------------
// Custom.js for Romeo Hunte Official website
// Author: Malik Tillman
//  This is a script file for making programmatic changes.
// -----------------------------------------------------------------------------

/* Top of page */
var lastScrollPos = 0;

/* DOM Query for Bottom Header */
var bottomHeader = document.getElementById("header-bottom-container");

/* Null top style */
var topNull = bottomHeader.style.top;

/* Event Listener for Deteting Scroll */
window.addEventListener("scroll", function() {
  /* Catch the Current Scroll Position */
  var thisScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  /* Check For Scroll Direction */
  if (thisScrollPos > lastScrollPos) {
    /* If scroll is going down, stick bottom header to top of page*/
    if (bottomHeader.style.top == "55px"){
      bottomHeader.style.top = topNull;
    }
  } else {
    /* If scroll is going up, stick bottom header to bottom of top header */
    if (bottomHeader.style.top == topNull ){
      bottomHeader.style.top = "55px";
    }
  }

  /* Mobile/Negative Scroll Fix */
  lastScrollPos = thisScrollPos <= 0 ? 0 : thisScrollPos;
}, false);
