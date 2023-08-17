'use strict';

var bars = document.querySelector("#bars");

function showData() {
    var links = document.querySelector(".links");
    if (links.style.display === 'none') {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }
}
bars.addEventListener("click", showData);

