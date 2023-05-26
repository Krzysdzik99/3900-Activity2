//I attempted my hand at some Javascript but this is my first time using it. I learn this from W3schools

//When the user scrolls on the page, we need the function to execute
window.onscroll = function() {myScrollFunction()};

//Get the top nav bar
let navbar = document.getElementById("top_nav");

//Get the offset position of the top navbar
let sticky = navbar.offsetTop;

//Add the sticky class to the navbar when you reach its scroll position. It needs to remove the sticky class when the scroll no longer occurs
function myScrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}