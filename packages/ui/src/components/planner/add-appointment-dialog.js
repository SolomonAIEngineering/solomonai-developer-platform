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
const zod_1 = require("@hookform/resolvers/zod");
const date_fns_1 = require("date-fns");
const lucide_react_1 = require("lucide-react");
const react_hook_form_1 = require("react-hook-form");
const sonner_1 = require("sonner");
const planner_data_context_1 = require("../../contexts/planner-data-context");
const appointment_1 = require("../../types/appointment");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const calendar_1 = require("../calendar");
const dialog_1 = require("../dialog");
const form_1 = require("../form");
const input_1 = require("../input");
const popover_1 = require("../popover");
const select_1 = require("../select");
const time_picker_1 = require("../time-picker");
const AddAppointmentDialog = () => {
    const { addAppointment, resources } = (0, planner_data_context_1.useData)();
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const [isPending, startAddAppointmentTransition] = (0, react_1.useTransition)();
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(appointment_1.createAppointmentSchema),
        defaultValues: {
            title: "",
            start: new Date(),
            end: new Date(new Date().getTime() + 60 * 60 * 1000),
            resourceId: "",
        },
    });
    function onSubmit(values) {
        const id = crypto.randomUUID();
        const newAppointment = {
            details: {
                service: "Music",
            },
            order: 0,
            id: id,
            title: values.title,
            start: values.start,
            end: values.end,
            resourceId: values.resourceId,
        };
        startAddAppointmentTransition(() => {
            sonner_1.toast.promise(() => new Promise((resolve) => {
                resolve(addAppointment(newAppointment));
            }), {
                loading: "Adding appointment",
                success: "Appointment added",
                error: "Failed to add appointment",
            });
            form.reset();
        });
        setTimeout(() => {
            setIsOpened(false);
        }, 1000);
    }
    return (<dialog_1.Dialog open={isOpened} onOpenChange={setIsOpened}>
      <dialog_1.DialogTrigger asChild>
        <button_1.Button variant="outline">Add Appointment</button_1.Button>
      </dialog_1.DialogTrigger>
      <dialog_1.DialogContent className="rounded-2xl p-[2%]">
        <dialog_1.DialogHeader>
          <dialog_1.DialogTitle>Add Appointment</dialog_1.DialogTitle>
        </dialog_1.DialogHeader>
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <form_1.FormField control={form.control} name="title" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Title</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="Appointment title" {...field}/>
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
                    <form_1.FormMessage />
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
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>
            <form_1.FormField control={form.control} name="resourceId" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Resource</form_1.FormLabel>
                  <form_1.FormControl>
                    <select_1.Select onValueChange={field.onChange} defaultValue={field.value}>
                      <select_1.SelectTrigger>
                        <select_1.SelectValue>
                          {field.value
                ? resources.find((resource) => resource.id === field.value)?.name
                : "Select a resource"}
                        </select_1.SelectValue>
                      </select_1.SelectTrigger>
                      <select_1.SelectContent>
                        {resources.map((resource) => (<select_1.SelectItem key={resource.id} value={resource.id}>
                            {resource.name}
                          </select_1.SelectItem>))}
                      </select_1.SelectContent>
                    </select_1.Select>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <dialog_1.DialogFooter>
              <button_1.Button type="submit">Save changes</button_1.Button>
            </dialog_1.DialogFooter>
          </form>
        </form_1.Form>
      </dialog_1.DialogContent>
    </dialog_1.Dialog>);
};
exports.default = AddAppointmentDialog;
