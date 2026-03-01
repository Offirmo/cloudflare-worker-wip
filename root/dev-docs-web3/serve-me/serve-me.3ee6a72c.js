(()=>{var e=globalThis,r={},t={},o=e.parcelRequire375b;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire375b=o),(0,o.register)("iHGB7",function(e,r){});window.addEventListener("keydown",function e(r){9===r.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))});"webmanifest"===new URLSearchParams(window.location.search).get("ref")&&(console.log("Hello from @monorepo-private/css--framework / atomic--dimension.tsx: dynamically tweaking some CSS: o⋄full-viewport for iOs pinned app..."),function({id:e,css:r,href:t,document:o=window.document}){let n=o.getElementById(e);if(n)return;let i=(()=>{if(r&&t)throw Error("style_once(): conflicting css & href!");if(r){let t=o.createElement("style");return t.setAttribute("id",e),t.innerHTML=r,t}if(t){let r=o.createElement("link");return r.setAttribute("id",e),r.rel="stylesheet",r.href=t,r}throw Error("style_once(): you must provide css or href!")})();o.head.appendChild(i)}({id:"pinned-webapp-adjustments--viewport",css:`
:root {
	/* see @monorepo-private/css--framework/src/atomic/atomic--dimension.css#L28
	 * pinned apps on iOs: dv* are not full screen
	 */
	--o\u{22C4}full-viewport__width: 100lvw;
	--o\u{22C4}full-viewport__height: 100lvh;
}
`}))})();
//# sourceMappingURL=serve-me.3ee6a72c.js.map
