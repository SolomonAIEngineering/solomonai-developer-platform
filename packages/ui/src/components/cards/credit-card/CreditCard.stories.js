"use strict";
// CreditCard.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoverCard = exports.AmexCard = exports.MasterCardExample = exports.VisaCard = exports.DefaultCard = void 0;
const react_1 = __importDefault(require("react"));
const CreditCard_1 = require("./CreditCard");
const meta = {
    component: CreditCard_1.CreditCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        cardType: {
            control: {
                type: "select",
                options: ["Visa", "MasterCard", "Amex", "Discover"],
            },
        },
    },
    decorators: [(Story) => <Story />],
};
exports.default = meta;
exports.DefaultCard = {
    args: {
        cardholderName: "John Doe",
        cardNumber: "1234 5678 9012 3456",
        expiryDate: "12/24",
        cvv: "123",
    },
};
exports.VisaCard = {
    args: {
        cardholderName: "Jane Smith",
        cardNumber: "4111 1111 1111 1111",
        expiryDate: "06/25",
        cvv: "456",
        cardType: "Visa",
    },
};
exports.MasterCardExample = {
    args: {
        cardholderName: "Samuel Jackson",
        cardNumber: "5555 5555 5555 4444",
        expiryDate: "09/23",
        cvv: "789",
        cardType: "MasterCard",
    },
};
exports.AmexCard = {
    args: {
        cardholderName: "Emma Watson",
        cardNumber: "3782 822463 10005",
        expiryDate: "10/26",
        cvv: "1122",
        cardType: "Amex",
    },
};
exports.DiscoverCard = {
    args: {
        cardholderName: "Robert Downey Jr.",
        cardNumber: "6011 1111 1111 1117",
        expiryDate: "02/28",
        cvv: "333",
        cardType: "Discover",
    },
};
