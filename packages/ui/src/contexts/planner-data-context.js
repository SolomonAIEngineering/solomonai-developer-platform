"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useData = exports.PlannerDataContextProvider = void 0;
const react_1 = __importStar(require("react"));
const appointment_utils_1 = require("../lib/appointment-utils");
const resource_utils_1 = require("../lib/resource-utils");
const DataContext = (0, react_1.createContext)(undefined);
const PlannerDataContextProvider = ({ children, initialAppointments, initialResources }) => {
    const appointmentService = (0, react_1.useState)(new appointment_utils_1.AppointmentService(initialAppointments))[0];
    const resourceService = (0, react_1.useState)(new resource_utils_1.ResourceService(initialResources))[0];
    // Create a state that will re-render the context when updated
    const [trigger, setTrigger] = (0, react_1.useState)(false);
    const handleUpdate = () => setTrigger(!trigger); // simple state toggle to trigger re-render
    const contextValue = {
        appointments: appointmentService.getAppointments(),
        resources: resourceService.getResources(),
        addAppointment: (appointment) => {
            appointmentService.createAppointment(appointment);
            handleUpdate();
        },
        updateAppointment: (appointment) => {
            appointmentService.updateAppointment(appointment);
            handleUpdate();
        },
        removeAppointment: (id) => {
            appointmentService.deleteAppointment(id);
            handleUpdate();
        },
        addResource: (resource) => {
            resourceService.addResource(resource);
            handleUpdate();
        },
        updateResource: (resource) => {
            resourceService.updateResource(resource);
            handleUpdate();
        },
        removeResource: (id) => {
            resourceService.removeResource(id);
            handleUpdate();
        },
    };
    return (<DataContext.Provider value={contextValue}>{children}</DataContext.Provider>);
};
exports.PlannerDataContextProvider = PlannerDataContextProvider;
const useData = () => {
    const context = (0, react_1.useContext)(DataContext);
    if (!context) {
        throw new Error("useData must be used within a PlannerDataContextProvider");
    }
    return context;
};
exports.useData = useData;
