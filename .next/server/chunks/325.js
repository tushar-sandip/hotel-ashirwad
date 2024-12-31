"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 58276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CounterUp)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/Counter.js


function Counter({ end, duration }) {
    const [count, setCount] = (0,react_.useState)(0);
    const countRef = (0,react_.useRef)(null);
    const increment = end / duration;
    (0,react_.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                startCount();
                observer.disconnect();
            }
        }, {
            threshold: 0
        });
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, []);
    (0,react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=>{
                const newCount = prevCount + increment;
                if (newCount >= end) {
                    clearInterval(interval);
                    return end;
                } else {
                    return newCount;
                }
            });
        }, 1000 / duration);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        end,
        increment
    ]);
    const startCount = ()=>{
        setCount(0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ref: countRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            children: Math.round(count)
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/CounterUp.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CounterUp({ end }) {
    const [inViewport, setInViewport] = (0,react_.useState)(false);
    const handleScroll = ()=>{
        const elements = document.getElementsByClassName("count-text");
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) {
                setInViewport(true);
            }
        }
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "count-text",
            children: inViewport && /*#__PURE__*/ jsx_runtime_.jsx(Counter, {
                end: end,
                duration: 20
            })
        })
    });
}


/***/ }),

/***/ 53407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\as-hotel-24-feature-develop\components\elements\CounterUp.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;