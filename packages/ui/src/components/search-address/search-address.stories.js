"use strict";
// SearchAddress.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithResults = exports.NoResults = exports.LoadingState = exports.Default = void 0;
const search_address_1 = __importDefault(require("./search-address"));
const meta = {
    component: search_address_1.default,
    tags: ["autodocs"],
    argTypes: {
        onSelectLocation: { action: "locationSelected" },
    },
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.LoadingState = {
    args: {},
    parameters: {
        mockData: [
            {
                url: "https://api.example.com/search",
                method: "GET",
                status: 200,
                response: {},
                delay: 2000, // Simulate a 2-second delay
            },
        ],
    },
};
exports.NoResults = {
    args: {},
    parameters: {
        mockData: [
            {
                url: "https://api.example.com/search",
                method: "GET",
                status: 200,
                response: { results: {} },
            },
        ],
    },
};
exports.WithResults = {
    args: {},
    parameters: {
        mockData: [
            {
                url: "https://api.example.com/search",
                method: "GET",
                status: 200,
                response: {
                    results: {
                        address: [
                            {
                                label: "123 Main St, Anytown, USA",
                                raw: { entityType: "Address" },
                            },
                            {
                                label: "456 Elm St, Othertown, USA",
                                raw: { entityType: "Address" },
                            },
                        ],
                        poi: [
                            {
                                label: "Central Park, New York, USA",
                                raw: { entityType: "POI" },
                            },
                        ],
                    },
                },
            },
        ],
    },
};
