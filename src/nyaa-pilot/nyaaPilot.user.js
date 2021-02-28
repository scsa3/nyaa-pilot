// ==UserScript==
// @name         Nyaa Pilot
// @namespace    https://github.com/scsa3/nyaa-pilot/raw/master/src/nyaa-pilot/nyaaPilot.user.js
// @version      0.3.1
// @author       scsa3
// @description  Preview image from link in description page
// @homepageURL  https://github.com/scsa3/nyaa-pilot
// @updateURL    https://github.com/scsa3/nyaa-pilot/raw/master/src/nyaa-pilot/nyaaPilot.user.js
// @downloadURL  https://github.com/scsa3/nyaa-pilot/raw/master/src/nyaa-pilot/nyaaPilot.user.js
// @supportURL   https://github.com/scsa3/nyaa-pilot/issues
// @match        https://sukebei.nyaa.si/view/*
// @run-at		 document-end
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    main();
})();

function main() {
    window.addEventListener("message", receiveMessage, false);
    linkToIframe();
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

function linkToIframe() {
    let aTagArray = getLinksInDescription();
    appendIframes(aTagArray);
}

function getLinksInDescription() {
    let div = document.getElementById("torrent-description");
    return div.getElementsByTagName("a");
}

function appendIframes(aArray) {
    for (let a of aArray) {
        if (a.href.endsWith('.jpg')) {
            appendAImage(a);
        } else {
            appendAIframe(a);
        }
    }
}

function appendAImage(aTag) {
    let img = document.createElement("img");
    img.src = aTag.href;
    img.id = aTag.href;
    let div = document.createElement("div");
    div.appendChild(img);
    aTag.parentNode.insertBefore(div, aTag);
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


