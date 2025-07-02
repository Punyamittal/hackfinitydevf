module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('hero');
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [days, setDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hours, setHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("00");
    const [minutes, setMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("00");
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("00");
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRefs = {
        hero: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null),
        domains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null),
        features: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null),
        timeline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null),
        sponsors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null)
    };
    const sponsors = [
        {
            name: "Devfolio",
            logo: "data:image/png;base64,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",
            tier: "Visionary"
        },
        {
            name: "ETHIndia",
            logo: "data:image/png;base64,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",
            tier: "Visionary"
        }
    ];
    const domains = [
        {
            title: "Artificial Intelligence",
            icon: "🧠",
            desc: "Build intelligent systems that can learn and adapt"
        },
        {
            title: "Machine Learning",
            icon: "⚙️",
            desc: "Create predictive models and smart algorithms"
        },
        {
            title: "Blockchain",
            icon: "🔗",
            desc: "Develop decentralized applications and smart contracts"
        },
        {
            title: "Open Innovation",
            icon: "💡",
            desc: "Pioneer breakthrough solutions to global challenges"
        },
        {
            title: "EdTech",
            icon: "🎓",
            desc: "Transform education through technology"
        },
        {
            title: "FinTech",
            icon: "📈",
            desc: "Revolutionize financial services and payments"
        },
        {
            title: "Healthcare",
            icon: "🩺",
            desc: "Improve healthcare accessibility and outcomes"
        },
        {
            title: "Your Domain",
            icon: "➕",
            desc: "Bring your own innovative ideas to life"
        }
    ];
    const timeline = [
        {
            phase: "Registration Opens",
            date: "June 1, 2025",
            status: "completed"
        },
        {
            phase: "Team Formation",
            date: "September 1–15, 2025",
            status: "active"
        },
        {
            phase: "Problem Statements Release",
            date: "October 1, 2025",
            status: "upcoming"
        },
        {
            phase: "Hacking Phase",
            date: "October 18, 8:00 AM",
            status: "upcoming"
        },
        {
            phase: "Mentoring Sessions",
            date: "Throughout the event",
            status: "upcoming"
        },
        {
            phase: "Judging",
            date: "October 19, 9:00 AM",
            status: "upcoming"
        },
        {
            phase: "Closing Ceremony & Prizes",
            date: "October 19, 2:00 PM",
            status: "upcoming"
        }
    ];
    const features = [
        {
            title: "₹50L+ Prize Pool",
            desc: "Massive rewards for innovation",
            icon: "🏆"
        },
        {
            title: "Amazing Swags",
            desc: "Exclusive merchandise and tech gear",
            icon: "🎁"
        },
        {
            title: "Top Mentors",
            desc: "Learn from industry leaders",
            icon: "👨‍🏫"
        },
        {
            title: "Global Network",
            desc: "Connect with worldwide talent",
            icon: "🌍"
        },
        {
            title: "24/7 Support",
            desc: "Round-the-clock assistance",
            icon: "🚀"
        },
        {
            title: "Creative Freedom",
            desc: "Infinite possibilities to innovate",
            icon: "🎨"
        }
    ];
    // Client-side rendering check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    // Countdown Timer Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const countDownDate = new Date("Oct 18, 2025 00:00:00").getTime();
        const updateCountdown = ()=>{
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursLeft = String(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, '0');
            const minutesLeft = String(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))).padStart(2, '0');
            const secondsLeft = String(Math.floor(distance % (1000 * 60) / 1000)).padStart(2, '0');
            if (distance > 0) {
                setDays(daysLeft);
                setHours(hoursLeft);
                setMinutes(minutesLeft);
                setSeconds(secondsLeft);
            }
        };
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return ()=>clearInterval(interval);
    }, []);
    // Scroll Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b70905ebec6d0998" + " " + "min-h-screen bg-black text-white overflow-x-hidden font-poppins",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b70905ebec6d0998" + " " + "fixed inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b70905ebec6d0998" + " " + "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        suppressHydrationWarning: true,
                        className: "jsx-b70905ebec6d0998" + " " + "particles-bg",
                        children: [
                            ...Array(50)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 20}s`,
                                    animationDuration: `${10 + Math.random() * 20}s`
                                },
                                className: "jsx-b70905ebec6d0998" + " " + "particle"
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-b70905ebec6d0998" + " " + "fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-purple-500/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b70905ebec6d0998" + " " + "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b70905ebec6d0998" + " " + "text-2xl font-bold font-orbitron bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                                children: "HackFixity"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b70905ebec6d0998" + " " + "hidden md:flex space-x-8",
                                children: [
                                    'Home',
                                    'Domains',
                                    'Features',
                                    'Timeline',
                                    'Sponsors'
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${item.toLowerCase()}`,
                                        className: "jsx-b70905ebec6d0998" + " " + "hover:text-purple-400 transition-colors font-medium",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "jsx-b70905ebec6d0998" + " " + "md:hidden text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-b70905ebec6d0998" + " " + "w-6 h-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16",
                                        className: "jsx-b70905ebec6d0998"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRefs.hero,
                className: "jsx-b70905ebec6d0998" + " " + "relative min-h-screen flex items-center justify-center pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b70905ebec6d0998" + " " + "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-b70905ebec6d0998" + " " + "text-5xl md:text-7xl font-bold mb-6 font-orbitron",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",
                                    children: "HackFixity"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-b70905ebec6d0998" + " " + "text-2xl md:text-3xl mb-4 font-orbitron font-light",
                                children: "Infinite Fun. Infinite Creativity."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-b70905ebec6d0998" + " " + "text-xl md:text-2xl mb-8 text-gray-300",
                                children: "From Caffeine to Code – Experience the Best"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b70905ebec6d0998" + " " + "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b70905ebec6d0998" + " " + "text-lg mb-2",
                                        children: "World's Biggest Agentic AI Hackathon"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b70905ebec6d0998" + " " + "text-3xl font-bold text-purple-400 font-orbitron",
                                        children: "October 18, 2025"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                suppressHydrationWarning: true,
                                className: "jsx-b70905ebec6d0998" + " " + "grid grid-cols-4 gap-4 max-w-md mx-auto mb-12",
                                children: isClient ? [
                                    {
                                        label: 'Days',
                                        value: days
                                    },
                                    {
                                        label: 'Hours',
                                        value: hours
                                    },
                                    {
                                        label: 'Minutes',
                                        value: minutes
                                    },
                                    {
                                        label: 'Seconds',
                                        value: seconds
                                    }
                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-purple-900/30 backdrop-blur-md rounded-lg p-4 border border-purple-500/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b70905ebec6d0998" + " " + "text-2xl md:text-3xl font-bold font-orbitron text-purple-400",
                                                children: item.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b70905ebec6d0998" + " " + "text-sm text-gray-400",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 19
                                    }, this)) : [
                                    'Days',
                                    'Hours',
                                    'Minutes',
                                    'Seconds'
                                ].map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-purple-900/30 backdrop-blur-md rounded-lg p-4 border border-purple-500/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b70905ebec6d0998" + " " + "text-2xl md:text-3xl font-bold font-orbitron text-purple-400",
                                                children: "--"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b70905ebec6d0998" + " " + "text-sm text-gray-400",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b70905ebec6d0998" + " " + "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105",
                                        children: "Register Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "jsx-b70905ebec6d0998" + " " + "border border-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all",
                                        children: "Become a Sponsor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b70905ebec6d0998" + " " + "mt-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b70905ebec6d0998" + " " + "text-gray-400 mb-6",
                                        children: "Proudly Sponsored By"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b70905ebec6d0998" + " " + "flex justify-center items-center gap-12",
                                        children: sponsors.map((sponsor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b70905ebec6d0998" + " " + "bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all transform hover:scale-110 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: sponsor.logo,
                                                    alt: sponsor.name,
                                                    className: "jsx-b70905ebec6d0998" + " " + "h-20 w-40 object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRefs.domains,
                className: "jsx-b70905ebec6d0998" + " " + "py-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                                        children: "Innovation Domains"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Choose your battlefield and create revolutionary solutions that will shape the future"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: domains.map((domain, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        animationDelay: `${index * 0.1}s`
                                    },
                                    className: "jsx-b70905ebec6d0998" + " " + "group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-4xl mb-4 group-hover:scale-110 transition-transform",
                                            children: domain.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-xl font-bold mb-3 font-orbitron text-purple-300",
                                            children: domain.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-gray-400 text-sm",
                                            children: domain.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRefs.features,
                className: "jsx-b70905ebec6d0998" + " " + "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
                                        children: "Why HackFixity?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Experience the ultimate hackathon with unprecedented opportunities and resources"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-5xl mb-6 text-center",
                                            children: feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-2xl font-bold mb-4 text-center font-orbitron text-cyan-300",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-gray-400 text-center",
                                            children: feature.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRefs.timeline,
                className: "jsx-b70905ebec6d0998" + " " + "py-20 bg-gradient-to-r from-blue-900/10 to-purple-900/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                        children: "Event Timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl text-gray-300",
                                    children: "Your journey to innovation starts here"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "max-w-4xl mx-auto",
                            children: timeline.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b70905ebec6d0998" + " " + `relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + `w-full max-w-md bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 ${event.status === 'completed' ? 'border-green-500/50 bg-green-900/10' : event.status === 'active' ? 'border-yellow-500/50 bg-yellow-900/10' : 'border-blue-500/30'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b70905ebec6d0998" + " " + `inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${event.status === 'completed' ? 'bg-green-500/20 text-green-400' : event.status === 'active' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`,
                                                    children: event.status.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl font-bold mb-2 font-orbitron text-blue-300",
                                                    children: event.phase
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "text-gray-400",
                                                    children: event.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, this),
                                        index < timeline.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + "absolute left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent top-8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 346,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 305,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 304,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: sectionRefs.sponsors,
                className: "jsx-b70905ebec6d0998" + " " + "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent",
                                        children: "Become a Sponsor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Join us in empowering the next generation of innovators and gain unprecedented exposure to top talent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-3xl font-bold text-center mb-12 font-orbitron text-purple-300",
                                    children: "Why Sponsor HackFixity?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b70905ebec6d0998" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: [
                                        {
                                            title: "Global Reach",
                                            desc: "5000+ participants worldwide",
                                            icon: "🌍"
                                        },
                                        {
                                            title: "Top Talent",
                                            desc: "Connect with skilled developers",
                                            icon: "⭐"
                                        },
                                        {
                                            title: "Brand Exposure",
                                            desc: "Massive social media coverage",
                                            icon: "📢"
                                        },
                                        {
                                            title: "Innovation",
                                            desc: "First look at cutting-edge solutions",
                                            icon: "🚀"
                                        }
                                    ].map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-md rounded-2xl p-6 border border-pink-500/30 text-center hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "text-4xl mb-4",
                                                    children: benefit.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl font-bold mb-2 font-orbitron text-pink-300",
                                                    children: benefit.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "text-gray-400",
                                                    children: benefit.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                {
                                    tier: "Visionary",
                                    price: "$50,000+",
                                    color: "purple",
                                    features: [
                                        "Keynote speaking slot",
                                        "Exclusive recruiting lounge",
                                        "Prime branding placement",
                                        "Custom challenge sponsorship",
                                        "Judging panel participation"
                                    ]
                                },
                                {
                                    tier: "Innovator",
                                    price: "$25,000",
                                    color: "blue",
                                    features: [
                                        "Dedicated challenge sponsorship",
                                        "Recruiting booth access",
                                        "Featured in all communications",
                                        "Mentor participation",
                                        "Resume database access"
                                    ]
                                },
                                {
                                    tier: "Supporter",
                                    price: "$10,000",
                                    color: "pink",
                                    features: [
                                        "Logo placement on all materials",
                                        "Social media features",
                                        "Resume database access",
                                        "Event day presence",
                                        "Networking opportunities"
                                    ]
                                }
                            ].map((tier, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b70905ebec6d0998" + " " + `bg-gradient-to-br from-${tier.color}-900/20 to-black/20 backdrop-blur-md rounded-2xl p-8 border border-${tier.color}-500/30 hover:border-${tier.color}-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-${tier.color}-500/20`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "jsx-b70905ebec6d0998" + " " + `text-2xl font-bold mb-4 text-${tier.color}-400 font-orbitron`,
                                            children: tier.tier
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b70905ebec6d0998" + " " + "text-4xl font-bold mb-6 font-orbitron",
                                            children: tier.price
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-b70905ebec6d0998" + " " + "space-y-3",
                                            children: tier.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-b70905ebec6d0998" + " " + "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            className: "jsx-b70905ebec6d0998" + " " + `h-5 w-5 text-${tier.color}-400 mt-1 flex-shrink-0`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                clipRule: "evenodd",
                                                                className: "jsx-b70905ebec6d0998"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-b70905ebec6d0998" + " " + "text-gray-300",
                                                            children: feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-b70905ebec6d0998" + " " + `w-full mt-8 bg-gradient-to-r from-${tier.color}-600 to-${tier.color}-700 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-${tier.color}-500/30 transition-all`,
                                            children: "Choose Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-center mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b70905ebec6d0998" + " " + "text-xl mb-8 text-gray-300",
                                    children: "Ready to make an impact? Let's build the future together."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-b70905ebec6d0998" + " " + "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-b70905ebec6d0998" + " " + "bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105",
                                            children: "Become a Sponsor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "jsx-b70905ebec6d0998" + " " + "border border-purple-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500/10 transition-all",
                                            children: "Download Sponsorship Kit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 356,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "jsx-b70905ebec6d0998" + " " + "py-12 bg-black/50 border-t border-purple-500/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b70905ebec6d0998" + " " + "container mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-3xl font-bold font-orbitron mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                            children: "HackFixity"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-gray-400 mb-6",
                            children: "Where infinite creativity meets limitless possibilities"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 478,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b70905ebec6d0998" + " " + "flex justify-center space-x-6 mb-8",
                            children: [
                                'Twitter',
                                'LinkedIn',
                                'Discord',
                                'Instagram'
                            ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "jsx-b70905ebec6d0998" + " " + "text-gray-400 hover:text-purple-400 transition-colors",
                                    children: social
                                }, social, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-b70905ebec6d0998" + " " + "text-gray-500 text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " HackFixity. All rights reserved. Made with ❤️ for builders, creators, and hackers."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 474,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b70905ebec6d0998",
                children: ".font-poppins.jsx-b70905ebec6d0998{font-family:Poppins,sans-serif}.font-orbitron.jsx-b70905ebec6d0998{font-family:Orbitron,monospace}.particles-bg.jsx-b70905ebec6d0998{width:100%;height:100%;position:absolute;overflow:hidden}.particle.jsx-b70905ebec6d0998{background:radial-gradient(circle,#8b5cf6,#0000);border-radius:50%;width:4px;height:4px;animation:linear infinite float;position:absolute}@keyframes float{0%{opacity:0;transform:translateY(100vh)rotate(0)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(-100px)rotate(360deg)}}.bg-gradient-to-br.jsx-b70905ebec6d0998{background-attachment:fixed}.hover\\\\.jsx-b70905ebec6d0998:shadow-xl:hover{animation:2s infinite glow}@keyframes glow{0%,to{box-shadow:0 0 20px #8b5cf64d}50%{box-shadow:0 0 30px #8b5cf699}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
__turbopack_context__.r("[project]/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect(function() {
        registry.add(props);
        return function() {
            registry.remove(props);
        };
    // props.children can be string[], will be striped since id is identical
    }, [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}}),
"[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8e396776._.js.map