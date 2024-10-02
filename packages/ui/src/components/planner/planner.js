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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const adapter_1 = require("@atlaskit/pragmatic-drag-and-drop/element/adapter");
const planner_context_1 = require("../../contexts/planner-context");
const planner_data_context_1 = require("../../contexts/planner-data-context");
const utils_1 = require("../../lib/utils");
const table_1 = require("../table");
const appointment_1 = __importDefault(require("./appointment"));
const drop_table_cell_1 = __importDefault(require("./drop-table-cell"));
const planner_toolbar_1 = __importDefault(require("./planner-toolbar"));
const resource_table_cell_1 = __importDefault(require("./resource-table-cell"));
const timeline_1 = require("./timeline");
const Planner = ({ initialResources, initialAppointments, ...props }) => {
    return (<planner_data_context_1.PlannerDataContextProvider initialAppointments={initialAppointments} initialResources={initialResources}>
      <planner_context_1.PlannerProvider>
        <PlannerMainComponent {...props}/>
      </planner_context_1.PlannerProvider>
    </planner_data_context_1.PlannerDataContextProvider>);
};
const PlannerMainComponent = ({ ...props }) => {
    return (<div className="flex flex-col gap-2">
      <planner_toolbar_1.default />
      <CalendarContent {...props}/>
    </div>);
};
const CalendarContent = ({ ...props }) => {
    const { viewMode, dateRange, timeLabels } = (0, planner_context_1.useCalendar)();
    const { resources, appointments, updateAppointment } = (0, planner_data_context_1.useData)();
    (0, react_1.useEffect)(() => {
        return (0, adapter_1.monitorForElements)({
            onDrop({ source, location }) {
                const destination = location.current.dropTargets[0]?.data;
                const sourceData = source.data;
                if (!destination || !sourceData)
                    return;
                const appointment = appointments.find((appt) => appt.id === sourceData.appointmentId);
                if (!appointment)
                    return;
                const newResource = resources.find((res) => res.id === destination.resourceId);
                if (!newResource)
                    return;
                const newDates = (0, utils_1.calculateNewDates)(viewMode, destination.columnIndex, sourceData.columnIndex, {
                    from: appointment.start,
                    to: appointment.end,
                });
                updateAppointment({
                    ...appointment,
                    start: newDates.start,
                    end: newDates.end,
                    resourceId: newResource.id,
                });
            },
        });
    }, [appointments]);
    return (<div className="flex max-h-[calc(80vh_-_theme(spacing.16))] flex-col">
      <div className="calendar-scroll flex-grow overflow-auto">
        <table_1.Table>
          <timeline_1.Timeline />
          <table_1.TableBody>
            {resources.map((resource) => (<table_1.TableRow key={resource.id}>
                <resource_table_cell_1.default resourceItem={resource}/>
                {timeLabels?.map((label, index) => (<drop_table_cell_1.default resourceId={resource.id} columnIndex={index} key={index}>
                    {appointments
                    .filter((appt) => (0, utils_1.filterAppointments)(appt, index, dateRange, viewMode) && appt.resourceId === resource.id)
                    .sort((a, b) => a.start.getTime() - b.start.getTime())
                    .map((appt) => (<appointment_1.default appointment={appt} columnIndex={index} resourceId={resource.id} key={appt.id}/>))}
                  </drop_table_cell_1.default>))}
              </table_1.TableRow>))}
          </table_1.TableBody>
        </table_1.Table>
      </div>
    </div>);
};
exports.default = Planner;
