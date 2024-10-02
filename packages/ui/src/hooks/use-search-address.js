"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearchAddress = void 0;
const react_1 = require("react");
const leaflet_geosearch_1 = require("leaflet-geosearch");
const use_debounce_1 = require("./use-debounce");
const useSearchAddress = () => {
    const [query, setQuery] = (0, react_1.useState)("");
    const [results, setResults] = (0, react_1.useState)({});
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [selectedItem, setSelectedItem] = (0, react_1.useState)(null);
    const debouncedQuery = (0, use_debounce_1.useDebounce)(query, 500);
    const groupByType = (0, react_1.useCallback)((data) => {
        return data.reduce((acc, item) => {
            const { raw } = item;
            const rawData = raw;
            const type = rawData.class;
            if (!acc[type]) {
                acc[type] = [];
            }
            acc[type]?.push(item);
            return acc;
        }, {});
    }, []);
    const handleSearch = (value) => {
        setQuery(value);
    };
    (0, react_1.useEffect)(() => {
        const fetchResults = async () => {
            if (debouncedQuery.length > 2) {
                setLoading(true);
                const provider = new leaflet_geosearch_1.OpenStreetMapProvider();
                const results = await provider.search({ query: debouncedQuery });
                setResults(groupByType(results));
                setLoading(false);
            }
            else {
                setResults({});
            }
        };
        fetchResults();
    }, [debouncedQuery, groupByType]);
    return {
        query,
        results,
        loading,
        handleSearch,
        selectedItem,
        setSelectedItem,
    };
};
exports.useSearchAddress = useSearchAddress;
