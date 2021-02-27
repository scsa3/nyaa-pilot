// ==UserScript==
// @name         HandyImage Extend
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @grant        none
// @match        https://picbaron*
// ==/UserScript==

(function () {
    'use strict';
    main();
})();

function main() {
    let body = document.body;
    if (isAfterHandyImage()) {
        let img = body.querySelector("img");
        if (img.style.margin === "auto") {
            img.remove();
        }
    }
}

function isAfterHandyImage() {
    let body = document.body;
    if (body.style.marginTop !== "0px") return false;
    if (body.style.marginBottom !== "0px") return false;
    if (body.style.marginLeft !== "0px") return false;
    if (body.style.marginRight !== "0px") return false;
    return body.bgColor === "grey";
}

