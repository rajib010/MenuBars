'use strict';

var bars = document.querySelector("#bars");

// to show the icon of bars...
bars.addEventListener("click", function () {
    var links = document.querySelector(".links");
    // if (links.style.display === 'none') {
    //     links.style.display = 'block';
    // } else {
    //     links.style.display = 'none';
    // }
    links.classList.toggle("one", "two");
});

var password = document.getElementById("password");
var showPw = document.getElementById("showPw");

showPw.addEventListener("click", function() {
password.setAttribute("type", (password.getAttribute("type") === "password" ? "text" : "password"));
});

