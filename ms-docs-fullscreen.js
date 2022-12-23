// ==UserScript==
// @name         MS Docs full screen width
// @description  Makes the MS Docs content full screen width so it's easier to read with less wrapping
// @author       Chad Baldwin
// @namespace    http://chadbaldwin.net/
// @version      1.20221223
// @match        https://learn.microsoft.com/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  addStyleBlock(`
     .mainContainer.uhf-container.has-default-focus {
       max-width: calc(100% - 32px);
       width: calc(100% - 32px);
     }

     div#left-container {
       max-width: 560px;
     }

     div#additional-resources {
         max-width: 400px;
         min-width: 200px;
         width: auto;
         flex: auto;
     }

     section.primary-holder.column.is-two-thirds-tablet.is-three-quarters-desktop {
         width: auto;
         flex: auto;
     }

     div#main-column {
         width: auto;
         flex: auto;
     }

     td.is-one-third-width-tablet {
         width: 40% !important;
     }

     .nav-bar {
         padding-left: 16px;
         padding-right: 16px;
     }
  `);

  function addStyleBlock(css) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
})();
