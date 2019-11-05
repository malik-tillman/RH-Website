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

/* DOM Query for Catogory/Filter Label, List Container, and Items */
var filterLabel = document.getElementsByClassName("ProductList-filter-dropdownToggle-label");
var filterList = document.getElementsByClassName("ProductList-filter-list");
var filterItems = document.getElementsByClassName("ProductList-filter-list-item");

/* Toggler for Catogory/Filter | 0 is closed and 1 is open */
var filterToggler = 0;

/* Catagory/Filter List Container Height */
var filterHeight = 0;

/* Calculate Catagory/Filter List Container Height */
for(item in filterItems) {
  filterHeight += 20;
}

window.addEventListener("load", function(){
  console.log("Loaded");
}, false)

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

/* Event Listener for Deteting Mobile Catogory/Filter Label Toggles */
filterLabel[0].addEventListener("click", function () {
  filterToggler ^= true;

  console.log(filterHeight);

  if(filterToggler) {
    // Open
    filterList[0].style.height = filterHeight + "px";
    filterList[0].style.opacity = 1;
  } else {
    // Close
    filterList[0].style.height = "0px";
    filterList[0].style.opacity = 0;
  }
}, false);
