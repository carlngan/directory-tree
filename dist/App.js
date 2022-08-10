"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const DirectoryManager_1 = require("./components/DirectoryManager");
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/*", element: (0, jsx_runtime_1.jsx)(DirectoryManager_1.DirectoryManager, {}) }) }));
};
exports.default = App;
