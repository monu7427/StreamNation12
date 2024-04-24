"use strict";
exports.id = 440;
exports.ids = [440];
exports.modules = {

/***/ 4440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AllPlatforms)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ProductCard.js



const ProductCard = ({ product  })=>{
    const [NewBadge, setNewBadge] = (0,external_react_.useState)(false);
    const newItems = [
        "netflix-premium-account",
        "amazon-prime",
        "youtube-premium"
    ];
    (0,external_react_.useEffect)(()=>{
        for(let i = 0; i < newItems.length; i++){
            if (product.slug === newItems[i]) {
                setNewBadge(true);
            }
        }
        return ()=>{
            setNewBadge(false);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: `/product/${product.slug}`,
        className: "card",
        id: "ProductCard",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    NewBadge ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/new1.png",
                        className: "new-badge",
                        alt: "new"
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: product.img,
                        alt: "netflix"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "card-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Starting from"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            "₹",
                            product.items[0].price,
                            "/",
                            product.items[0].count > 1 ? product.items[0].count + product.items[0].period : product.items[0].count + product.items[0].period.slice(0, -1)
                        ]
                    }),
                    product.items.length > 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        children: [
                            "+",
                            product.items.length - 1,
                            " ",
                            product.items.length > 2 ? "more plans" : "another plan"
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "and more"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProductCard = (ProductCard);

;// CONCATENATED MODULE: ./src/components/AllPlatforms.js



const AllPlatforms = ({ Products  })=>{
    const [CategorySelected, setCategorySelected] = (0,external_react_.useState)("all");
    const filterProducts = ()=>{
        if (CategorySelected === "all") {
            return Products.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProductCard, {
                    product: product
                }, index));
        } else {
            const filteredProducts = Products.filter((product)=>product.category === CategorySelected);
            return filteredProducts.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProductCard, {
                    product: product
                }, index));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "all-platforms",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl font-black text-center",
                children: "All Platforms"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "filters flex justify-center mt-4 p-10 rounded-lg bg-black",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `filter-item cursor-pointer ${CategorySelected === "all" && "active"}`,
                        onClick: ()=>setCategorySelected("all"),
                        children: "All"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `filter-item cursor-pointer ${CategorySelected === "ott" && "active"}`,
                        onClick: ()=>setCategorySelected("ott"),
                        children: "OTT"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `filter-item cursor-pointer ${CategorySelected === "music" && "active"}`,
                        onClick: ()=>setCategorySelected("music"),
                        children: "Music"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `filter-item cursor-pointer ${CategorySelected === "professional" && "active"}`,
                        onClick: ()=>setCategorySelected("professional"),
                        children: "Professional"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `filter-item cursor-pointer ${CategorySelected === "oyn" && "active"}`,
                        onClick: ()=>setCategorySelected("oyn"),
                        children: "On Your Number"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4",
                children: filterProducts()
            })
        ]
    });
};
/* harmony default export */ const components_AllPlatforms = (AllPlatforms);


/***/ })

};
;