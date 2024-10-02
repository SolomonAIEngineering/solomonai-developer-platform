"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const random_data_1 = require("../../lib/random-data");
const planner_1 = __importDefault(require("./planner"));
const meta = {
    component: planner_1.default,
    parameters: {
        controls: { expanded: true },
    },
};
exports.default = meta;
const Template = () => {
    const resources = (0, random_data_1.generateResources)(4); // Generate 4 resources
    const appointments = (0, random_data_1.generateAppointments)(100, resources); // Generate 100 appointments linked to the resources
    return (<planner_1.default initialResources={resources} initialAppointments={appointments}/>);
};
exports.Default = Template.bind({});
exports.Default.args = {};
