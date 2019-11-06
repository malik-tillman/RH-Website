// -----------------------------------------------------------------------------
// Custom.js for Romeo Hunte Official website
// Author: Malik Tillman
//  This is a script file for making programmatic changes.
// -----------------------------------------------------------------------------

/* Top of page */
var lastScrollPos = 0;

/* Mobile Breakpoint */
var mobileBreakpoint = 640;

/* DOM Query for Top and Bottom Header */
var topHeader = document.getElementById("header-top-container");
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

/* Toggles Catagory/Filter List */
function toggleFilterList() {
  filterToggler ^= true;

  if(filterToggler) {
    // Open
    filterList[0].style.height = filterHeight + "px";
    filterList[0].style.opacity = 1;
  } else {
    // Close
    filterList[0].style.height = "0px";
    filterList[0].style.opacity = 0;
  }
}

/* Reset Filter Label Reference */
function filterReset(detach) {
  if(window.innerWidth <= mobileBreakpoint) {
    /* Get Current Catogory/Filter Refs */
    var currentFilterLabel = document.getElementsByClassName("ProductList-filter-dropdownToggle-label");
    var currentFilterList = document.getElementsByClassName("ProductList-filter-list");
    var currentFilterItems = document.getElementsByClassName("ProductList-filter-list");

    /* Detach Current Event Listener */
    if(detach){ filterLabel[0].removeEventListener("click", toggleFilterList, false); }

    // /* Reset Catagory/Filter DOM References */
    filterLabel = currentFilterLabel;
    filterList = currentFilterList;

    /* Re-Attach Event Listener for Deteting Mobile Catogory/Filter Label Toggles */
    filterLabel[0].addEventListener("click", toggleFilterList, false);
  }
}

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

    /* Also Make Top Header Transparent */
    topHeader.style.opacity = 0;
  } else {
    /* If scroll is going up, stick bottom header to bottom of top header */
    if (bottomHeader.style.top == topNull ){
      bottomHeader.style.top = "55px";
    }

    /* Also Make Top Header Visible */
    topHeader.style.opacity = 1;
  }

  /* Mobile/Negative Scroll Fix */
  lastScrollPos = thisScrollPos <= 0 ? 0 : thisScrollPos;
}, false);

/* Give Catagory/Filter List a Reset onStart*/
filterReset(false);

/* Keep Resetting Each Second */
setInterval(function() {filterReset(true)}, 1000);
