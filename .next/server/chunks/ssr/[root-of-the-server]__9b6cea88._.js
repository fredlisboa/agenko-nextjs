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
const SESSION_STORAGE_KEY = 'utm_params_session';
function UtmLinkUpdater() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentQueryString = searchParams.toString();
        // 1. If the current URL has any 'utm_' parameter, save the entire query string.
        if (currentQueryString.includes('utm_')) {
            sessionStorage.setItem(SESSION_STORAGE_KEY, currentQueryString);
        }
        // 2. Get the stored UTM parameters.
        const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
        // 3. If there are no stored params, do nothing.
        if (!storedUtmParams) {
            return;
        }
        // 4. Update all <a> tags on the page.
        const allLinks = document.getElementsByTagName('a');
        for(let i = 0; i < allLinks.length; i++){
            const link = allLinks[i];
            const originalHref = link.getAttribute('href');
            // Ensure we have a valid link and it's not a mail/tel link.
            if (originalHref && !originalHref.startsWith('mailto:') && !originalHref.startsWith('tel:')) {
                // Check if the parameters are already in the link to prevent duplicates.
                if (link.href.includes(storedUtmParams)) {
                    continue;
                }
                // Append the UTM parameters.
                if (originalHref.includes('?')) {
                    link.href = `${originalHref}&${storedUtmParams}`;
                } else {
                    link.href = `${originalHref}?${storedUtmParams}`;
                }
            }
        }
    }, [
        pathname,
        searchParams
    ]); // Re-run on every navigation
    return null; // This component renders nothing.
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9b6cea88._.js.map