//I attempted the ability to have the nav bar be sticky but I am having some issues
//Following the W3 Schools tutorial
Window.onScroll = function () {
    myFunction()
};
let navbar = document.getElementById("top_nav");
let sticky = navbar.offsetTop;

function myFunction () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}