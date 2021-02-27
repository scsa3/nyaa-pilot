// ==UserScript==
// @name         Nyaa Pilot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       scsa3
// @run-at		 document-start
// @match        https://sukebei.nyaa.si/view/*
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    main();
})();

function main() {
    let aArray = getAllA();
    window.addEventListener("message", receiveMessage, false);
    appendIframes(aArray);
}

function getAllA() {
    let div = document.getElementById("torrent-description");
    return div.getElementsByTagName("a");
}

function appendIframes(aArray) {
    for (let a of aArray) {
        appendAIframe(a);
    }
}

function appendAIframe(aTag) {
    let iframe = document.createElement("iframe");
    iframe.src = aTag.href;
    iframe.id = aTag.href;
    iframe.height = "1";
    iframe.width = "1";
    iframe.sandbox.add('allow-forms');
    iframe.sandbox.add('allow-same-origin');
    iframe.sandbox.add('allow-scripts');
    let div = document.createElement("div");
    div.appendChild(iframe);
    aTag.parentNode.insertBefore(div, aTag);
}

function receiveMessage(e) {
    let url = e.data.url;
    let src = e.data.src;
    if (url !== undefined && src !== undefined) {
        let f = document.getElementById(url);
        let img = document.createElement("img");
        img.src = src;
        f.parentNode.insertBefore(img, f);
        f.remove();
    }
}
