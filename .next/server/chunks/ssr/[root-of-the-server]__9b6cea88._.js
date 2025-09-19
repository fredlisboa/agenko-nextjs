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
        // 1. Check for new UTM parameters in the current URL
        const currentParams = new URLSearchParams(searchParams.toString());
        const utmKeys = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content'
        ];
        let newUtmParams = new URLSearchParams();
        let hasNewUtms = false;
        utmKeys.forEach((key)=>{
            if (currentParams.has(key)) {
                newUtmParams.set(key, currentParams.get(key));
                hasNewUtms = true;
            }
        });
        // 2. If new UTMs are found, store them in session storage.
        // This overwrites any old ones.
        if (hasNewUtms) {
            sessionStorage.setItem(SESSION_STORAGE_KEY, newUtmParams.toString());
        }
        // 3. Get the definitive UTMs to use (either newly found or from storage).
        const storedUtmParams = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (!storedUtmParams) {
            return; // No UTMs to apply
        }
        // 4. Find all links and append the stored UTMs.
        // This runs on every page change to catch new links that are rendered.
        const allLinks = document.getElementsByTagName('a');
        for(let i = 0; i < allLinks.length; i++){
            const link = allLinks[i];
            const originalHref = link.getAttribute('href');
            if (originalHref) {
                // Skip mailto, tel, and anchor links on the same page
                if (originalHref.startsWith('mailto:') || originalHref.startsWith('tel:') || originalHref.startsWith('#')) {
                    continue;
                }
                try {
                    // Use URL constructor for robust parameter handling
                    const url = new URL(link.href);
                    // Avoid double-appending
                    const storedParams = new URLSearchParams(storedUtmParams);
                    let alreadyHasAllParams = true;
                    storedParams.forEach((value, key)=>{
                        if (url.searchParams.get(key) !== value) {
                            alreadyHasAllParams = false;
                        }
                    });
                    if (alreadyHasAllParams) {
                        continue;
                    }
                    // Append stored UTMs
                    storedParams.forEach((value, key)=>{
                        url.searchParams.set(key, value);
                    });
                    link.href = url.toString();
                } catch (error) {
                    // Fallback for relative paths like "/contato"
                    if (!originalHref.includes(storedUtmParams)) {
                        if (originalHref.includes('?')) {
                            link.href = `${originalHref}&${storedUtmParams}`;
                        } else {
                            link.href = `${originalHref}?${storedUtmParams}`;
                        }
                    }
                }
            }
        }
    }, [
        pathname,
        searchParams
    ]); // Effect runs on path or param change
    return null; // This component does not render anything
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9b6cea88._.js.map