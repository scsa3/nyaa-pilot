// ==UserScript==
// @name         learning
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at		 document-start
// @match        https://localhost:*/*p.html*
// @match        https://sukebei.nyaa.si/view/*
// ==/UserScript==

(function () {
    'use strict';

    main();
})();

function main() {
    let div = document.getElementById("myFrame");
    let iframe = document.createElement("iframe");
    iframe.src = "https://picbaron.com/ulhkpcs9ywww/SSNI-916.jpg.html";
    iframe.id = "https://picbaron.com/ulhkpcs9ywww/SSNI-916.jpg.html";
    iframe.onload = getImg;
    div.appendChild(iframe)
    // let iframe = document.getElementById("https://picbaron.com/ulhkpcs9ywww/SSNI-916.jpg.html");
    // iframe.onload = getImg;
}

function getImg() {
    document.getElementById("log").innerText = "123";
    // let iframe = unsafeWindow.document.getElementById("https://picbaron.com/ulhkpcs9ywww/SSNI-916.jpg.html");
    // let img = iframe.contentWindow.document.querySelector("img");
}