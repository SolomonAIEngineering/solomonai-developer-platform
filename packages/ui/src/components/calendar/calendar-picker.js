"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarPicker = void 0;
const react_1 = __importDefault(require("react"));
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const sonner_1 = require("sonner");
const zod_2 = require("zod");
const button_1 = require("../button");
const card_1 = require("../card");
const form_1 = require("../form");
const calendar_date_picker_1 = require("./calendar-date-picker");
const FormSchema = zod_2.z.object({
    calendar: zod_2.z.object({
        from: zod_2.z.date(),
        to: zod_2.z.date(),
    }),
});
const CalendarPicker = ({ className, onClick, initialFrom = new Date(new Date().getFullYear(), 0, 1), initialTo = new Date(), onDateChange, ...props }) => {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(FormSchema),
        defaultValues: {
            calendar: {
                from: initialFrom,
                to: initialTo,
            },
        },
    });
    const onSubmit = (data) => {
        (0, sonner_1.toast)(`Date range: ${data.calendar.from.toDateString()} - ${data.calendar.to.toDateString()}`);
        if (onDateChange) {
            onDateChange(data.calendar.from, data.calendar.to);
        }
    };
    return (<div className={className} onClick={onClick} {...props}>
      <card_1.Card className="w-full max-w-xl p-4">
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <form_1.FormField control={form.control} name="calendar" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Date Range</form_1.FormLabel>
                    <form_1.FormControl>
                      <calendar_date_picker_1.CalendarDatePicker date={field.value} onDateSelect={({ from, to, }) => {
                form.setValue("calendar", { from, to });
                if (onDateChange) {
                    onDateChange(from, to);
                }
            }} variant="ghost"/>
                    </form_1.FormControl>
                    <form_1.FormDescription>
                      Select a date range from the calendar
                    </form_1.FormDescription>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>
            <button_1.Button variant="outline" type="submit">
              Submit
            </button_1.Button>
          </form>
        </form_1.Form>
      </card_1.Card>
    </div>);
};
exports.CalendarPicker = CalendarPicker;
