// ==UserScript==
// @name         Nyaa Auto Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto open link in new tab
// @author       scsa3
// @match        https://sukebei.nyaa.si/view/*
// @grant        GM_openInTab
// ==/UserScript==

(function () {
    'use strict';

    main();
})();

function main() {
    let aArray = getAllA();
    for (const aArrayElement of aArray.reverse()) {
        let href = aArrayElement.href;
        if (href.includes("https://sukebei.nyaa.si")) break;
        GM_openInTab(href, {insert: true});
    }
}

function getAllA() {
    let div = document.getElementById("torrent-description");
    let collections = div.getElementsByTagName("a");
    return Array.from(collections)
}
