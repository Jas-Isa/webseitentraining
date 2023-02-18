// When the user scrolls the page, execute myFunction
window.onscroll = function() { makeHeaderSticky() };


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeHeaderSticky() {
    var header = document.getElementById("myHeader");
    var stickyTreshold = header.offsetTop;
    var homepage = document.getElementById("fixedText");

    if (window.pageYOffset > stickyTreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Open about us when the user clicks the button
// function openAboutUs() {
//    document.getElementById ("Switch").innerHTML= Switch();}