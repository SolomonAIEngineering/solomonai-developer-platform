"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = void 0;
const react_1 = require("react");
const useStore = (store, callback) => {
    const result = store(callback);
    const [data, setData] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setData(result);
    }, [result]);
    return data;
};
exports.useStore = useStore;
