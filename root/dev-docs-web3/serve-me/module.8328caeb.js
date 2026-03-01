var e=globalThis.parcelRequire375b,t=e.register;t("1gLd8",function(t,n){e("4dFnv"),e("5CB3Y")}),t("4dFnv",function(e,t){window.addEventListener("keydown",function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})}),t("5CB3Y",function(t,n){var o=e("ceYI7");"webmanifest"===new URLSearchParams(window.location.search).get("ref")&&(console.log("Hello from @monorepo-private/css--framework / atomic--dimension.tsx: dynamically tweaking some CSS: o⋄full-viewport for iOs pinned app..."),(0,o.default)({id:"pinned-webapp-adjustments--viewport",css:`
:root {
	/* see @monorepo-private/css--framework/src/atomic/atomic--dimension.css#L28
	 * pinned apps on iOs: dv* are not full screen
	 */
	--o\u{22C4}full-viewport__width: 100lvw;
	--o\u{22C4}full-viewport__height: 100lvh;
}
`}))}),t("ceYI7",function(e,t){Object.defineProperty(e.exports,"default",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});var n=function({id:e,css:t,href:n,document:o=window.document}){let r=o.getElementById(e);if(r)return r;let i=(()=>{if(t&&n)throw Error("style_once(): conflicting css & href!");if(t){let n=o.createElement("style");return n.setAttribute("id",e),n.innerHTML=t,n}if(n){let t=o.createElement("link");return t.setAttribute("id",e),t.rel="stylesheet",t.href=n,t}throw Error("style_once(): you must provide css or href!")})();return o.head.appendChild(i),i}}),t("iHGB7",function(e,t){});
//# sourceMappingURL=module.8328caeb.js.map
