"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryManager = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const CommandReader_1 = require("../classes/CommandReader");
const exampleCommands_1 = require("./exampleCommands");
const DirectoryManager = () => {
    const [commandReader, setCommandReader] = (0, react_1.useState)(new CommandReader_1.CommandReader());
    const [commands, setCommands] = (0, react_1.useState)(exampleCommands_1.defaultCommands);
    const [output, setOutput] = (0, react_1.useState)([]);
    const executeCommands = () => {
        const newCommandReader = new CommandReader_1.CommandReader();
        newCommandReader.parseCommands(commands);
        setCommandReader(newCommandReader);
    };
    const listToString = (arr) => {
        return arr.join("\n");
    };
    (0, react_1.useEffect)(() => {
        setOutput(commandReader.getOutput());
    }, [commandReader]);
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Container, Object.assign({ fluid: true, style: { fontFamily: "Inter, sans-serif", color: "rgb(13, 20, 43)" } }, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, Object.assign({ style: { paddingTop: "25px", textAlign: "center" } }, { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ style: { fontSize: "45px", fontWeight: "700" } }, { children: "Endpoint Directory Manager" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("h5", { children: "The only directory tool you'll ever need" })] })), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, Object.assign({ style: { padding: "25px" } }, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Input" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card, { children: (0, jsx_runtime_1.jsx)("textarea", { style: { height: "70vh" }, defaultValue: listToString(commands), onChange: e => {
                                        setCommands(e.target.value.split("\n"));
                                    } }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, Object.assign({ style: {
                                    float: "right",
                                    marginTop: "10px",
                                    borderColor: "#1794c2",
                                    backgroundColor: "#1794c2",
                                    color: "#fff"
                                }, onClick: () => {
                                    executeCommands();
                                } }, { children: "Do Magic" }))] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Output" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card, { children: (0, jsx_runtime_1.jsx)("textarea", { style: { height: "70vh" }, value: listToString(output), readOnly: true }) })] })] }))] })));
};
exports.DirectoryManager = DirectoryManager;
