"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 4774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Navbar = ()=>{
    const [NavbarStatus, setNavbarStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [NavbarHeight, setNavbarHeight] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [NavbarPosition, setNavbarPosition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("static");
    const [PageScrolled, setPageScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    if (PageScrolled > NavbarHeight && NavbarPosition !== "fixed") {
        setNavbarPosition("fixed");
    } else if (PageScrolled < NavbarHeight && NavbarPosition !== "static") {
        setNavbarPosition("static");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        try {
            const NavbarHeight = document.querySelector("#Navbar").clientHeight;
            setNavbarHeight(NavbarHeight);
        } catch (e) {}
        return ()=>{};
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [CurrentURL, setCurrentURL] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (router.isReady) {
            setCurrentURL(router.pathname);
        }
        return ()=>{};
    }, [
        router.isReady
    ]);
    const Urls = [
        {
            name: "Home",
            url: "/",
            context: "/"
        },
        {
            name: "About Us",
            url: "/about",
            context: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact",
            context: "/contact"
        }
    ];
    const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{
        const { pageYOffset , scrollY  } = window;
        setPageScrolled(pageYOffset);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        //add eventlistener to window
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        // remove event on unmount to prevent a memory leak with the cleanup
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "Navbar",
        style: {
            position: NavbarPosition
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main-bar",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.png",
                                alt: "logo",
                                className: "w-20 h-13"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setNavbarStatus(!NavbarStatus),
                        className: "md:hidden",
                        children: NavbarStatus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "text-2xl bx bx-x"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "text-2xl bx bx-menu"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "items-center hidden gap-4 md:flex",
                        children: Urls.map((url, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `${CurrentURL === url.context ? "active" : null}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: url.url,
                                    children: url.name
                                })
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `mobile-menu ${NavbarStatus ? "active" : null}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: Urls.map((url, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${CurrentURL === url.context ? "active" : null}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: url.url,
                                children: url.name
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;