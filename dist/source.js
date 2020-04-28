(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(6);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(3);

// CONCATENATED MODULE: ./src/app.jsx



class app_App extends react["Component"] {
    render() {
        return this.props.firstStore.callme()
    }
}

const app = Object(mobxreact_esm["b" /* inject */])('firstStore')(app_App)
/* harmony default export */ var src_app = (app);
// CONCATENATED MODULE: ./src/root.store.ts
class RootStore {
    constructor() {
        this.stores = {};
        this.setChildStore = (name, store) => {
            this.stores[name] = store;
        };
    }
}
const Root = new RootStore();
class RootInitiator {
    constructor() {
        this.root = Root;
        Root.setChildStore(this.constructor.name.toLowerCase(), this);
    }
}

// CONCATENATED MODULE: ./src/first.store.ts

class first_store_FirstStore extends RootInitiator {
    constructor() {
        super();
        this.callme = () => {
            debugger;
            // An error there will be at next line
            const secondStore = this.root.stores.second;
            return secondStore.getHello();
        };
    }
}
const firstStore = new first_store_FirstStore();
/* harmony default export */ var first_store = (firstStore);

// CONCATENATED MODULE: ./src/second.store.ts

class second_store_SecondStore extends RootInitiator {
    constructor() {
        super();
        this.getHello = () => `Hello world`;
    }
}
const secondStore = new second_store_SecondStore();
/* harmony default export */ var second_store = (secondStore);

// CONCATENATED MODULE: ./src/index.tsx






const stores = {
    firstStore: first_store,
    secondStore: second_store
};
react_dom_default.a.render(react_default.a.createElement(mobxreact_esm["a" /* Provider */], Object.assign({}, stores),
    react_default.a.createElement(src_app, null)), document.getElementById('root'));


/***/ })

}]);