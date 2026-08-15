(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const videos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4"
];
function HeroBanner() {
    _s();
    const [currentVideo, setCurrentVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Changement de vidéo toutes les 10 secondes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBanner.useEffect": ()=>{
            const interval = setInterval({
                "HeroBanner.useEffect.interval": ()=>{
                    setCurrentVideo({
                        "HeroBanner.useEffect.interval": (prev)=>(prev + 1) % videos.length
                    }["HeroBanner.useEffect.interval"]);
                }
            }["HeroBanner.useEffect.interval"], 10000);
            return ({
                "HeroBanner.useEffect": ()=>clearInterval(interval)
            })["HeroBanner.useEffect"];
        }
    }["HeroBanner.useEffect"], []);
    // Synchronisation et force le play pour la vidéo active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBanner.useEffect": ()=>{
            const activeVideo = videoRefs.current[currentVideo];
            if (activeVideo) {
                activeVideo.currentTime = 0;
                activeVideo.play().catch({
                    "HeroBanner.useEffect": ()=>{
                    // Gestion silencieuse si le navigateur bloque la lecture automatique
                    }
                }["HeroBanner.useEffect"]);
            }
        }
    }["HeroBanner.useEffect"], [
        currentVideo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full aspect-video min-h-[500px] flex items-center justify-center overflow-hidden",
        children: [
            videos.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: (el)=>{
                        videoRefs.current[index] = el;
                    },
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    preload: "auto",
                    className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: src,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, src, false, {
                    fileName: "[project]/components/Banner.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 z-10"
            }, void 0, false, {
                fileName: "[project]/components/Banner.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 container mx-auto px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6",
                        children: [
                            "Expert Dératisation ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Banner.tsx",
                                lineNumber: 62,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600",
                                children: "à Marseille"
                            }, void 0, false, {
                                fileName: "[project]/components/Banner.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Banner.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-10",
                        children: "Intervention rapide, discrète et garantie contre tous types de nuisibles."
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:+33762240168",
                        className: "bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-xl inline-block",
                        children: "Appeler le 07 62 24 01 68"
                    }, void 0, false, {
                        fileName: "[project]/components/Banner.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banner.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Banner.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(HeroBanner, "4aIsrTiywPjbsvumXxWnUFWKL2g=");
_c = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Banner_tsx_0hgb271._.js.map