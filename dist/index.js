"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("react-app-polyfill/ie11");
require("react-app-polyfill/stable");
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
require("bootstrap/dist/css/bootstrap.min.css");
const container = document.getElementById("root");
const root = (0, client_1.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
