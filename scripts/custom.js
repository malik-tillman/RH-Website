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

/* Top Header Height or Bottom Header Displacement */
var bottomDisplacement = "47px";

/* DOM Query for Catogory/Filter Label, List Container, and Items */
var filterLabel;
var filterList = document.getElementsByClassName("ProductList-filter-list");
var filterItems = document.getElementsByClassName("ProductList-filter-list-item");

/* Toggler for Catogory/Filter | 0 is closed and 1 is open */
var filterToggler = 0;

/* Catagory/Filter List Container Height */
var filterHeight = 220;

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

/* Event Listener for Deteting Scroll */
window.addEventListener("scroll", function() {
  /* Catch the Current Scroll Position */
  var thisScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  /* Check For Scroll Direction */
  if (thisScrollPos > lastScrollPos) {
    /* If scroll is going down, stick bottom header to top of page*/
    if (bottomHeader.style.top === bottomDisplacement){
      bottomHeader.style.top = topNull;
    }

    /* Also Make Top Header Transparent */
    topHeader.style.opacity = 0;
  } else {
    /* If scroll is going up, stick bottom header to bottom of top header */
    if (bottomHeader.style.top === topNull ){
      bottomHeader.style.top = bottomDisplacement;
    }

    /* Also Make Top Header Visible */
    topHeader.style.opacity = 1;
  }

  /* Mobile/Negative Scroll Fix */
  lastScrollPos = thisScrollPos <= 0 ? 0 : thisScrollPos;
}, false);

window.addEventListener("resize", function() {
  //console.log("Resized");
}, false);

/* Reset Filter Label Reference */
function filterReset(detach) {
  filterLabel = document.getElementsByClassName("ProductList-filter-dropdownToggle-label");
  if(window.innerWidth <= mobileBreakpoint && filterLabel[0]) {
    /* Get Current Catogory/Filter Refs */
    var currentFilterLabel = document.getElementsByClassName("ProductList-filter-dropdownToggle-label");
    var currentFilterList = document.getElementsByClassName("ProductList-filter-list");
    var currentFilterItems = document.getElementsByClassName("ProductList-filter-list");

    /* Detach Current Event Listener */
    if(detach){ filterLabel[0].removeEventListener("click", toggleFilterList, false); }

    /* Reset Category/Filter DOM References */
    filterLabel = currentFilterLabel;
    filterList = currentFilterList;

    /* Re-Attach Event Listener for Deteting Mobile Catogory/Filter Label Toggles */
    filterLabel[0].addEventListener("click", toggleFilterList, false);
  }
}

/* Give Catagory/Filter List a Reset onStart*/
filterReset(false);

/* Keep Resetting Each Second */
setInterval(function() {filterReset(true)}, 100);
