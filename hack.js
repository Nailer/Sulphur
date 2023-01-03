var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar")
var contents = document.querySelector(".container")

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar")
    contents.classList.toggle("checker")
}