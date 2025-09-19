module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/UtmLinkUpdater.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/UtmLinkUpdater.tsx
__turbopack_context__.s([
    "UtmLinkUpdater",
    ()=>UtmLinkUpdater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
function UtmLinkUpdater() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Get the current query string (e.g., "utm_source=google&utm_medium=cpc")
        const utmParamQueryString = searchParams.toString();
        // Only run the logic if there are any query parameters
        if (utmParamQueryString) {
            const allLinks = document.getElementsByTagName('a');
            for(let i = 0; i < allLinks.length; i++){
                const link = allLinks[i];
                const originalHref = link.getAttribute('href');
                // Only modify links that have an href and don't already include these params
                if (originalHref && !originalHref.includes(utmParamQueryString)) {
                    try {
                        const url = new URL(link.href);
                        // Append each parameter from the current URL to the link's URL
                        searchParams.forEach((value, key)=>{
                            url.searchParams.set(key, value);
                        });
                        link.href = url.toString();
                    } catch (error) {
                        // This handles relative links like "/about" gracefully
                        if (originalHref.includes('?')) {
                            link.href = `${originalHref}&${utmParamQueryString}`;
                        } else {
                            link.href = `${originalHref}?${utmParamQueryString}`;
                        }
                    }
                }
            }
        }
    // This effect should re-run on every page navigation
    }, [
        pathname,
        searchParams
    ]);
    return null; // This component does not render anything
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9b6cea88._.js.map