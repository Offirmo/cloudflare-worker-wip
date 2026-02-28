window.addEventListener("keydown",function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))}),"webmanifest"===new URLSearchParams(window.location.search).get("ref")&&(console.log("Hello from @monorepo-private/css--framework / atomic--dimension.tsx: dynamically tweaking some CSS: o⋄full-viewport for iOs pinned app..."),function({id:e,css:t,href:o,document:n=window.document}){let r=n.getElementById(e);if(r)return;let i=(()=>{if(t&&o)throw Error("style_once(): conflicting css & href!");if(t){let o=n.createElement("style");return o.setAttribute("id",e),o.innerHTML=t,o}if(o){let t=n.createElement("link");return t.setAttribute("id",e),t.rel="stylesheet",t.href=o,t}throw Error("style_once(): you must provide css or href!")})();n.head.appendChild(i)}({id:"pinned-webapp-adjustments--viewport",css:`
:root {
	/* see @monorepo-private/css--framework/src/atomic/atomic--dimension.css#L28
	 * pinned apps on iOs: dv* are not full screen
	 */
	--o\u{22C4}full-viewport__width: 100lvw;
	--o\u{22C4}full-viewport__height: 100lvh;
}
`}));
//# sourceMappingURL=module.f66cb529.js.map
