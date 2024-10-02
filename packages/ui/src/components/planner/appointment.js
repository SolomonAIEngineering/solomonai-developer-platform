"use client";
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
const react_1 = __importStar(require("react"));
const adapter_1 = require("@atlaskit/pragmatic-drag-and-drop/element/adapter");
const zod_1 = require("@hookform/resolvers/zod");
const date_fns_1 = require("date-fns");
const lucide_react_1 = require("lucide-react");
const react_hook_form_1 = require("react-hook-form");
const planner_data_context_1 = require("../../contexts/planner-data-context");
const appointment_1 = require("../../types/appointment");
const cn_1 = require("../../utils/cn");
const badge_1 = require("../badge");
const button_1 = require("../button");
const calendar_1 = require("../calendar");
const card_1 = require("../card");
const form_1 = require("../form");
const input_1 = require("../input");
const popover_1 = require("../popover");
const time_picker_1 = require("../time-picker");
const Appointment = ({ appointment, resourceId, columnIndex, }) => {
    const { updateAppointment } = (0, planner_data_context_1.useData)();
    const ref = (0, react_1.useRef)(null);
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const element = ref.current;
        return (0, adapter_1.draggable)({
            element,
            getInitialData: () => ({
                appointmentId: appointment.id,
                columnIndex: columnIndex,
                resourceId: resourceId,
            }),
            onDragStart: () => setIsDragging(true),
            onDrop: () => setIsDragging(false),
        });
    }, []);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(appointment_1.updateAppointmentSchema),
        defaultValues: {
            title: appointment.title,
            start: new Date(appointment.start) ?? new Date(),
            end: new Date(appointment.end) ?? new Date(),
        },
    });
    function onSubmit(values) {
        updateAppointment({
            ...appointment,
            ...values,
        });
    }
    return (<card_1.Card ref={ref} className="hover:cursor-grab">
      <card_1.CardHeader className="flex flex-row items-center justify-between p-1">
        <badge_1.Badge variant={"outline"} className="truncate pl-2 text-xs">
          {appointment.details.service}
        </badge_1.Badge>
        <popover_1.Popover>
          <popover_1.PopoverTrigger>
            <div className="text-xs">
              <lucide_react_1.EllipsisVertical className="h-4 w-4"/>
            </div>
          </popover_1.PopoverTrigger>
          <popover_1.PopoverContent className="w-fit">
            <card_1.Card className="w-fit border-none p-0 shadow-none">
              <card_1.CardHeader className="p-0">
                <card_1.CardTitle className="text-xs">{appointment.title}</card_1.CardTitle>
                <card_1.CardDescription className="text-xs">
                  {(0, date_fns_1.format)(new Date(appointment.start), "MMM dd yyyy HH:mm")} -{" "}
                  {(0, date_fns_1.format)(new Date(appointment.end), "MMM dd yyyy HH:mm")}
                </card_1.CardDescription>
              </card_1.CardHeader>
              <card_1.CardContent className="w-fit">
                <form_1.Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <form_1.FormField control={form.control} name="title" render={({ field }) => (<form_1.FormItem>
                          <form_1.FormLabel>Title</form_1.FormLabel>
                          <form_1.FormControl>
                            <input_1.Input placeholder="Title" {...field}/>
                          </form_1.FormControl>
                          <form_1.FormMessage />
                        </form_1.FormItem>)}/>
                    <form_1.FormField control={form.control} name="start" render={({ field }) => (<form_1.FormItem className="flex flex-col">
                          <form_1.FormLabel className="text-left">Start</form_1.FormLabel>
                          <popover_1.Popover>
                            <form_1.FormControl>
                              <popover_1.PopoverTrigger asChild>
                                <button_1.Button variant="outline" className={(0, cn_1.cn)("w-[280px] justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                  <lucide_react_1.CalendarIcon className="mr-2 h-4 w-4"/>
                                  {field.value ? ((0, date_fns_1.format)(field.value, "PPP HH:mm:ss")) : (<span>Pick a date</span>)}
                                </button_1.Button>
                              </popover_1.PopoverTrigger>
                            </form_1.FormControl>
                            <popover_1.PopoverContent className="w-auto p-0">
                              <calendar_1.Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus/>
                              <div className="border-t border-border p-3">
                                <time_picker_1.TimePicker setDate={field.onChange} date={field.value}/>
                              </div>
                            </popover_1.PopoverContent>
                          </popover_1.Popover>
                        </form_1.FormItem>)}/>
                    <form_1.FormField control={form.control} name="end" render={({ field }) => (<form_1.FormItem className="flex flex-col">
                          <form_1.FormLabel className="text-left">End</form_1.FormLabel>
                          <popover_1.Popover>
                            <form_1.FormControl>
                              <popover_1.PopoverTrigger asChild>
                                <button_1.Button variant="outline" className={(0, cn_1.cn)("w-[280px] justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
                                  <lucide_react_1.CalendarIcon className="mr-2 h-4 w-4"/>
                                  {field.value ? ((0, date_fns_1.format)(field.value, "PPP HH:mm:ss")) : (<span>Pick a date</span>)}
                                </button_1.Button>
                              </popover_1.PopoverTrigger>
                            </form_1.FormControl>
                            <popover_1.PopoverContent className="w-auto p-0">
                              <calendar_1.Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus/>
                              <div className="border-t border-border p-3">
                                <time_picker_1.TimePicker setDate={field.onChange} date={field.value}/>
                              </div>
                            </popover_1.PopoverContent>
                          </popover_1.Popover>
                        </form_1.FormItem>)}/>
                    <button_1.Button type="submit">Submit</button_1.Button>
                  </form>
                </form_1.Form>
              </card_1.CardContent>
            </card_1.Card>
          </popover_1.PopoverContent>
        </popover_1.Popover>
      </card_1.CardHeader>
      <card_1.CardContent className={(0, cn_1.cn)("px-2 py-2", {
            "cursor-grabbing bg-muted opacity-50": isDragging,
        })}>
        <div className="flex flex-col items-center gap-2 text-xs">
          <div>{appointment.title}</div>
          <div>
            {(0, date_fns_1.format)(new Date(appointment.start), "kk:mm")} -{" "}
            {(0, date_fns_1.format)(new Date(appointment.end), "kk:mm")}
          </div>
        </div>
      </card_1.CardContent>
    </card_1.Card>);
};
exports.default = Appointment;
