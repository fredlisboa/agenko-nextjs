(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/Components/Contact/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Contact = ()=>{
    _s();
    // --- Refs for the map interaction ---
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- State for the contact form ---
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: '',
        whatsapp: '',
        email: ''
    });
    const [formStatus, setFormStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [formMessage, setFormMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Form input change handler ---
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'whatsapp') {
            const numericValue = value.replace(/\D/g, '').slice(0, 11);
            setFormData((prevData)=>({
                    ...prevData,
                    [name]: numericValue
                }));
        } else {
            setFormData((prevData)=>({
                    ...prevData,
                    [name]: value
                }));
        }
    };
    // --- Client-side form validation ---
    const validateForm = ()=>{
        const { nome, whatsapp, email } = formData;
        if (!nome || nome.trim().length < 2) {
            setFormMessage({
                type: 'client-error',
                text: '❌ Por favor, digite seu nome completo.'
            });
            return false;
        }
        if (!email || !email.includes('@') || !email.includes('.')) {
            setFormMessage({
                type: 'client-error',
                text: '❌ Por favor, digite um email válido.'
            });
            return false;
        }
        if (!whatsapp || whatsapp.trim().length < 11) {
            setFormMessage({
                type: 'client-error',
                text: '❌ Por favor, digite um WhatsApp válido (mín. 11 dígitos).'
            });
            return false;
        }
        return true;
    };
    // --- Form submission handler ---
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormMessage(null);
        if (!validateForm()) {
            return;
        }
        setFormStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                setFormStatus('success');
                setFormMessage({
                    type: 'success',
                    text: result.message
                });
                try {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'sd_landing_page_nextjs',
                        lead_name: formData.nome,
                        lead_email: formData.email,
                        lead_whatsapp: formData.whatsapp,
                        form_source: 'nextjs_contact_form_v1',
                        page_url: window.location.href
                    });
                    console.log('📊 DataLayer push successful.');
                    if (window.KTracking && typeof window.KTracking.reportConversion === 'function') {
                        window.KTracking.reportConversion();
                        console.log('✅ Keitaro conversion reported.');
                    }
                } catch (trackingError) {
                    console.warn('⚠️ Error during tracking:', trackingError);
                }
                setTimeout(()=>{
                    setFormData({
                        nome: '',
                        whatsapp: '',
                        email: ''
                    });
                }, 500);
            } else {
                setFormStatus('error');
                setFormMessage({
                    type: 'error',
                    text: result.message || '⚠️ Houve um problema temporário. Tente novamente.'
                });
            }
        } catch (error) {
            setFormStatus('error');
            setFormMessage({
                type: 'error',
                text: '⚠️ Houve um problema temporário. Tente novamente em alguns segundos.'
            });
        }
    };
    // --- Map Interaction Logic ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const container = mapContainerRef.current;
            const overlay = overlayRef.current;
            const handleFirstTouch = {
                "Contact.useEffect.handleFirstTouch": ()=>{
                    if (container && overlay) {
                        const iframe = container.querySelector('.bw-map');
                        if (iframe) {
                            iframe.classList.add('is-active');
                        }
                        // Physically remove the overlay from the DOM to allow map interaction
                        overlay.remove();
                    }
                }
            }["Contact.useEffect.handleFirstTouch"];
            if (overlay) {
                overlay.addEventListener('touchstart', handleFirstTouch, {
                    passive: true
                });
            }
            // Cleanup function for when the component unmounts
            return ({
                "Contact.useEffect": ()=>{
                // The overlay might already be removed, so a simple check is enough
                }
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    // --- Helper function to render form messages ---
    const renderFormMessage = ()=>{
        if (!formMessage) return null;
        if (formStatus === 'success') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "message success",
                style: {
                    textAlign: 'center',
                    lineHeight: 1.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.2em',
                            marginBottom: '15px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "✅ Tudo certo! Recebemos seu contato."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                            lineNumber: 177,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                        lineNumber: 176,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '15px'
                        },
                        children: "Nossa equipe entrará em contato com você em breve."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                        lineNumber: 179,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginBottom: '15px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Continue sua jornada:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                lineNumber: 183,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Clique abaixo para falar diretamente conosco!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                        lineNumber: 182,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento.",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "whatsapp-button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "📱"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Abrir WhatsApp Agora"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                        lineNumber: 185,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                lineNumber: 175,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "message ".concat(formMessage.type === 'client-error' ? 'error' : 'server-error'),
            children: formMessage.text
        }, void 0, false, {
            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
            lineNumber: 198,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    };
    const requiredMark = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            color: 'red',
            fontWeight: 'bold'
        },
        children: "*"
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
        lineNumber: 204,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "agenko-contact pt-80 pb-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-info-wrapper mb-50 pf_fadeup",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shape",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/images/pages/shape/world.png",
                                                    alt: "img",
                                                    width: 306,
                                                    height: 647
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 64
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                lineNumber: 213,
                                                columnNumber: 58
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 213,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "phone",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento.",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: "+55 (62) 9 8243-3773"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 66
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "agenko-info-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    children: "Endereço"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Rua 5, 691, Térreo"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Ed. The Prime Tam. Office"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Praça Tamandaré, Setor Oeste"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Goiânia-GO, Brasil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "CEP 74.115-060"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "agenko-info-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "mailto:contato@studiodental.dental",
                                                                        children: "contato@studiodental.dental"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 54
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "agenko-info-box",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    children: "Siga-nos"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "social-link",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://www.instagram.com/dragabriellalisboa/",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-instagram"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                                lineNumber: 244,
                                                                                columnNumber: 55
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 55
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://share.google/pcuCYJHPmM1pRPwpc",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-google"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                                lineNumber: 245,
                                                                                columnNumber: 146
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                            lineNumber: 245,
                                                                            columnNumber: 55
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://tiktok.com/@studiodental.dental",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-tiktok"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 147
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 55
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento.",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "bi bi-whatsapp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                                lineNumber: 247,
                                                                                columnNumber: 272
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 55
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 51
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 214,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                    lineNumber: 212,
                                    columnNumber: 31
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                lineNumber: 211,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "agenko-content-box mb-50 pf_fadeup",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "section-title mb-20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sub-title",
                                                    children: "Agende Sua Avaliação"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 40
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Seu sorriso ideal começa com um plano."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 40
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 257,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-20",
                                            style: {
                                                textAlign: 'justify',
                                                hyphens: 'auto'
                                            },
                                            children: [
                                                "Preencha o formulário para agendar sua avaliação gratuita. Nossa equipe de gestão de pacientes entrará em contato em breve para confirmar o ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "melhor horário"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 245
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " para você."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 261,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        formStatus !== 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "agenko-contact-form style-one",
                                            id: "contact-form",
                                            onSubmit: handleSubmit,
                                            noValidate: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "nome",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Nome Completo ",
                                                                        requiredMark
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "nome",
                                                                    type: "text",
                                                                    className: "form_control",
                                                                    placeholder: "Digite seu nome",
                                                                    name: "nome",
                                                                    required: true,
                                                                    value: formData.nome,
                                                                    onChange: handleInputChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 48
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "whatsapp",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "WhatsApp ",
                                                                        requiredMark
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "whatsapp",
                                                                    type: "tel",
                                                                    className: "form_control",
                                                                    placeholder: "Apenas números com DDD",
                                                                    name: "whatsapp",
                                                                    required: true,
                                                                    value: formData.whatsapp,
                                                                    onChange: handleInputChange,
                                                                    inputMode: "numeric"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 48
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-md-12",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "email",
                                                                    className: "form-label",
                                                                    children: [
                                                                        "Email ",
                                                                        requiredMark
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    id: "email",
                                                                    type: "email",
                                                                    className: "form_control",
                                                                    placeholder: "seumelhor@email.com",
                                                                    name: "email",
                                                                    required: true,
                                                                    value: formData.email,
                                                                    onChange: handleInputChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 52
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 48
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-lg-12",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "theme-btn",
                                                                disabled: formStatus === 'loading',
                                                                children: formStatus === 'loading' ? 'ENVIANDO...' : 'Agendar Avaliação Gratuita'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 52
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 48
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 44
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                                lineNumber: 265,
                                                columnNumber: 40
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 264,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0)) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-lg-12",
                                            children: renderFormMessage()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                            lineNumber: 295,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                    lineNumber: 256,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                                lineNumber: 255,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                        lineNumber: 210,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                    lineNumber: 209,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "agenko-map",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: mapContainerRef,
                    className: "map-container map-box",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: overlayRef,
                            className: "map-overlay"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            className: "bw-map",
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.899805988117!2d-49.26127262417757!3d-16.68172744040439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19313a51669%3A0x2f32b8a73543864d!2sStudio%20Dental%20Odontologia!5e0!3m2!1sen!2sbr!4v1726510769351!5m2!1sen!2sbr",
                            width: "100%",
                            height: "450",
                            style: {
                                border: 0,
                                position: 'relative',
                                zIndex: 0
                            },
                            allowFullScreen: true,
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                            lineNumber: 312,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                    lineNumber: 305,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Contact/Contact.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Contact/Contact.tsx",
        lineNumber: 207,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "My4LMjAN5jMi/gr6mZMdeNomOkA=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_Components_Contact_Contact_tsx_8edc7061._.js.map