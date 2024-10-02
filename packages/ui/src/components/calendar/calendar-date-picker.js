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
exports.CalendarDatePicker = void 0;
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const calendar_1 = require("../calendar");
const popover_1 = require("../popover");
const select_1 = require("../select");
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const multiSelectVariants = (0, class_variance_authority_1.cva)("flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground text-background",
            link: "text-primary underline-offset-4 hover:underline text-background",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.CalendarDatePicker = React.forwardRef(({ id = "calendar-date-picker", className, date, closeOnSelect = false, numberOfMonths = 2, yearsRange = 10, onDateSelect, isOpen, variant, ...props }, ref) => {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(isOpen ?? false);
    const [selectedRange, setSelectedRange] = React.useState(numberOfMonths === 2 ? "This Year" : "Today");
    const [monthFrom, setMonthFrom] = React.useState(date?.from);
    const [yearFrom, setYearFrom] = React.useState(date?.from?.getFullYear());
    const [monthTo, setMonthTo] = React.useState(numberOfMonths === 2 ? date?.to : date?.from);
    const [yearTo, setYearTo] = React.useState(numberOfMonths === 2
        ? date?.to?.getFullYear()
        : date?.from?.getFullYear());
    const [highlightedPart, setHighlightedPart] = React.useState(null);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const handleClose = () => setIsPopoverOpen(false);
    const handleTogglePopover = () => setIsPopoverOpen((prev) => !prev);
    const selectDateRange = (from, to, range) => {
        const startDate = (0, date_fns_1.startOfDay)((0, date_fns_tz_1.toDate)(from, { timeZone }));
        const endDate = numberOfMonths === 2 ? (0, date_fns_1.endOfDay)((0, date_fns_tz_1.toDate)(to, { timeZone })) : startDate;
        onDateSelect({ from: startDate, to: endDate });
        setSelectedRange(range);
        setMonthFrom(from);
        setYearFrom(from.getFullYear());
        setMonthTo(to);
        setYearTo(to.getFullYear());
        closeOnSelect && setIsPopoverOpen(false);
    };
    const handleDateSelect = (range) => {
        if (range) {
            let from = (0, date_fns_1.startOfDay)((0, date_fns_tz_1.toDate)(range.from, { timeZone }));
            let to = range.to ? (0, date_fns_1.endOfDay)((0, date_fns_tz_1.toDate)(range.to, { timeZone })) : from;
            if (numberOfMonths === 1) {
                if (range.from !== date.from) {
                    to = from;
                }
                else {
                    from = (0, date_fns_1.startOfDay)((0, date_fns_tz_1.toDate)(range.to, { timeZone }));
                }
            }
            onDateSelect({ from, to });
            setMonthFrom(from);
            setYearFrom(from.getFullYear());
            setMonthTo(to);
            setYearTo(to.getFullYear());
        }
        setSelectedRange(null);
    };
    const handleMonthChange = (newMonthIndex, part) => {
        setSelectedRange(null);
        if (part === "from") {
            if (yearFrom !== undefined) {
                if (newMonthIndex < 0 || newMonthIndex > yearsRange + 1)
                    return;
                const newMonth = new Date(yearFrom, newMonthIndex, 1);
                const from = numberOfMonths === 2
                    ? (0, date_fns_1.startOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : date?.from
                        ? new Date(date.from.getFullYear(), newMonth.getMonth(), date.from.getDate())
                        : newMonth;
                const to = numberOfMonths === 2
                    ? date.to
                        ? (0, date_fns_1.endOfDay)((0, date_fns_tz_1.toDate)(date.to, { timeZone }))
                        : (0, date_fns_1.endOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : from;
                if (from <= to) {
                    onDateSelect({ from, to });
                    setMonthFrom(newMonth);
                    setMonthTo(date.to);
                }
            }
        }
        else {
            if (yearTo !== undefined) {
                if (newMonthIndex < 0 || newMonthIndex > yearsRange + 1)
                    return;
                const newMonth = new Date(yearTo, newMonthIndex, 1);
                const from = date.from
                    ? (0, date_fns_1.startOfDay)((0, date_fns_tz_1.toDate)(date.from, { timeZone }))
                    : (0, date_fns_1.startOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }));
                const to = numberOfMonths === 2
                    ? (0, date_fns_1.endOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : from;
                if (from <= to) {
                    onDateSelect({ from, to });
                    setMonthTo(newMonth);
                    setMonthFrom(date.from);
                }
            }
        }
    };
    const handleYearChange = (newYear, part) => {
        setSelectedRange(null);
        if (part === "from") {
            if (years.includes(newYear)) {
                const newMonth = monthFrom
                    ? new Date(newYear, monthFrom ? monthFrom.getMonth() : 0, 1)
                    : new Date(newYear, 0, 1);
                const from = numberOfMonths === 2
                    ? (0, date_fns_1.startOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : date.from
                        ? new Date(newYear, newMonth.getMonth(), date.from.getDate())
                        : newMonth;
                const to = numberOfMonths === 2
                    ? date.to
                        ? (0, date_fns_1.endOfDay)((0, date_fns_tz_1.toDate)(date.to, { timeZone }))
                        : (0, date_fns_1.endOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : from;
                if (from <= to) {
                    onDateSelect({ from, to });
                    setYearFrom(newYear);
                    setMonthFrom(newMonth);
                    setYearTo(date.to?.getFullYear());
                    setMonthTo(date.to);
                }
            }
        }
        else {
            if (years.includes(newYear)) {
                const newMonth = monthTo
                    ? new Date(newYear, monthTo.getMonth(), 1)
                    : new Date(newYear, 0, 1);
                const from = date.from
                    ? (0, date_fns_1.startOfDay)((0, date_fns_tz_1.toDate)(date.from, { timeZone }))
                    : (0, date_fns_1.startOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }));
                const to = numberOfMonths === 2
                    ? (0, date_fns_1.endOfMonth)((0, date_fns_tz_1.toDate)(newMonth, { timeZone }))
                    : from;
                if (from <= to) {
                    onDateSelect({ from, to });
                    setYearTo(newYear);
                    setMonthTo(newMonth);
                    setYearFrom(date.from?.getFullYear());
                    setMonthFrom(date.from);
                }
            }
        }
    };
    const today = new Date();
    const years = Array.from({ length: yearsRange + 1 }, (_, i) => today.getFullYear() - yearsRange / 2 + i);
    const dateRanges = [
        { label: "Today", start: today, end: today },
        { label: "Yesterday", start: (0, date_fns_1.subDays)(today, 1), end: (0, date_fns_1.subDays)(today, 1) },
        {
            label: "This Week",
            start: (0, date_fns_1.startOfWeek)(today, { weekStartsOn: 1 }),
            end: (0, date_fns_1.endOfWeek)(today, { weekStartsOn: 1 }),
        },
        {
            label: "Last Week",
            start: (0, date_fns_1.subDays)((0, date_fns_1.startOfWeek)(today, { weekStartsOn: 1 }), 7),
            end: (0, date_fns_1.subDays)((0, date_fns_1.endOfWeek)(today, { weekStartsOn: 1 }), 7),
        },
        { label: "Last 7 Days", start: (0, date_fns_1.subDays)(today, 6), end: today },
        {
            label: "This Month",
            start: (0, date_fns_1.startOfMonth)(today),
            end: (0, date_fns_1.endOfMonth)(today),
        },
        {
            label: "Last Month",
            start: (0, date_fns_1.startOfMonth)((0, date_fns_1.subDays)(today, today.getDate())),
            end: (0, date_fns_1.endOfMonth)((0, date_fns_1.subDays)(today, today.getDate())),
        },
        { label: "This Year", start: (0, date_fns_1.startOfYear)(today), end: (0, date_fns_1.endOfYear)(today) },
        {
            label: "Last Year",
            start: (0, date_fns_1.startOfYear)((0, date_fns_1.subDays)(today, 365)),
            end: (0, date_fns_1.endOfYear)((0, date_fns_1.subDays)(today, 365)),
        },
    ];
    const handleMouseOver = (part) => {
        setHighlightedPart(part);
    };
    const handleMouseLeave = () => {
        setHighlightedPart(null);
    };
    const handleWheel = (event, part) => {
        event.preventDefault();
        setSelectedRange(null);
        if (highlightedPart === "firstDay") {
            const newDate = new Date(date.from);
            const increment = event.deltaY > 0 ? -1 : 1;
            newDate.setDate(newDate.getDate() + increment);
            if (newDate <= date.to) {
                numberOfMonths === 2
                    ? onDateSelect({ from: newDate, to: new Date(date.to) })
                    : onDateSelect({ from: newDate, to: newDate });
                setMonthFrom(newDate);
            }
            else if (newDate > date.to && numberOfMonths === 1) {
                onDateSelect({ from: newDate, to: newDate });
                setMonthFrom(newDate);
            }
        }
        else if (highlightedPart === "firstMonth") {
            const currentMonth = monthFrom ? monthFrom.getMonth() : 0;
            const newMonthIndex = currentMonth + (event.deltaY > 0 ? -1 : 1);
            handleMonthChange(newMonthIndex, "from");
        }
        else if (highlightedPart === "firstYear" && yearFrom !== undefined) {
            const newYear = yearFrom + (event.deltaY > 0 ? -1 : 1);
            handleYearChange(newYear, "from");
        }
        else if (highlightedPart === "secondDay") {
            const newDate = new Date(date.to);
            const increment = event.deltaY > 0 ? -1 : 1;
            newDate.setDate(newDate.getDate() + increment);
            if (newDate >= date.from) {
                onDateSelect({ from: new Date(date.from), to: newDate });
                setMonthTo(newDate);
            }
        }
        else if (highlightedPart === "secondMonth") {
            const currentMonth = monthTo ? monthTo.getMonth() : 0;
            const newMonthIndex = currentMonth + (event.deltaY > 0 ? -1 : 1);
            handleMonthChange(newMonthIndex, "to");
        }
        else if (highlightedPart === "secondYear" && yearTo !== undefined) {
            const newYear = yearTo + (event.deltaY > 0 ? -1 : 1);
            handleYearChange(newYear, "to");
        }
    };
    React.useEffect(() => {
        const firstDayElement = document.getElementById(`firstDay-${id}`);
        const firstMonthElement = document.getElementById(`firstMonth-${id}`);
        const firstYearElement = document.getElementById(`firstYear-${id}`);
        const secondDayElement = document.getElementById(`secondDay-${id}`);
        const secondMonthElement = document.getElementById(`secondMonth-${id}`);
        const secondYearElement = document.getElementById(`secondYear-${id}`);
        const elements = [
            firstDayElement,
            firstMonthElement,
            firstYearElement,
            secondDayElement,
            secondMonthElement,
            secondYearElement,
        ];
        const addPassiveEventListener = (element) => {
            if (element) {
                element.addEventListener("wheel", handleWheel, {
                    passive: false,
                });
            }
        };
        elements.forEach(addPassiveEventListener);
        return () => {
            elements.forEach((element) => {
                if (element) {
                    element.removeEventListener("wheel", handleWheel);
                }
            });
        };
    }, [highlightedPart, date]);
    const formatWithTz = (date, fmt) => (0, date_fns_tz_1.formatInTimeZone)(date, timeZone, fmt);
    return (<>
        <style>
          {`
            .date-part {
              touch-action: none;
            }
          `}
        </style>
        <popover_1.Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <popover_1.PopoverTrigger asChild>
            <button_1.Button id="date" ref={ref} {...props} className={(0, cn_1.cn)("w-auto", multiSelectVariants({ variant, className }))} onClick={handleTogglePopover} suppressHydrationWarning>
              <lucide_react_1.CalendarIcon className="mr-2 h-4 w-4"/>
              <span>
                {date?.from ? (date.to ? (<>
                      <span id={`firstDay-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "firstDay" &&
                "font-bold underline")} onMouseOver={() => handleMouseOver("firstDay")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "dd")}
                      </span>{" "}
                      <span id={`firstMonth-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "firstMonth" &&
                "font-bold underline")} onMouseOver={() => handleMouseOver("firstMonth")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "LLL")}
                      </span>
                      ,{" "}
                      <span id={`firstYear-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "firstYear" &&
                "font-bold underline")} onMouseOver={() => handleMouseOver("firstYear")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "y")}
                      </span>
                      {numberOfMonths === 2 && (<>
                          {" - "}
                          <span id={`secondDay-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "secondDay" &&
                    "font-bold underline")} onMouseOver={() => handleMouseOver("secondDay")} onMouseLeave={handleMouseLeave}>
                            {formatWithTz(date.to, "dd")}
                          </span>{" "}
                          <span id={`secondMonth-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "secondMonth" &&
                    "font-bold underline")} onMouseOver={() => handleMouseOver("secondMonth")} onMouseLeave={handleMouseLeave}>
                            {formatWithTz(date.to, "LLL")}
                          </span>
                          ,{" "}
                          <span id={`secondYear-${id}`} className={(0, cn_1.cn)("date-part", highlightedPart === "secondYear" &&
                    "font-bold underline")} onMouseOver={() => handleMouseOver("secondYear")} onMouseLeave={handleMouseLeave}>
                            {formatWithTz(date.to, "y")}
                          </span>
                        </>)}
                    </>) : (<>
                      <span id="day" className={(0, cn_1.cn)("date-part", highlightedPart === "day" && "font-bold underline")} onMouseOver={() => handleMouseOver("day")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "dd")}
                      </span>{" "}
                      <span id="month" className={(0, cn_1.cn)("date-part", highlightedPart === "month" && "font-bold underline")} onMouseOver={() => handleMouseOver("month")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "LLL")}
                      </span>
                      ,{" "}
                      <span id="year" className={(0, cn_1.cn)("date-part", highlightedPart === "year" && "font-bold underline")} onMouseOver={() => handleMouseOver("year")} onMouseLeave={handleMouseLeave}>
                        {formatWithTz(date.from, "y")}
                      </span>
                    </>)) : (<span>Pick a date</span>)}
              </span>
            </button_1.Button>
          </popover_1.PopoverTrigger>
          {isPopoverOpen && (<popover_1.PopoverContent className="w-auto" align="start" avoidCollisions={false} onInteractOutside={handleClose} onEscapeKeyDown={handleClose} style={{
                maxHeight: "var(--radix-popover-content-available-height)",
                overflowY: "auto",
            }}>
              <div className="flex">
                {numberOfMonths === 2 && (<div className="flex flex-col gap-1 border-r border-foreground/10 pr-4 text-left">
                    {dateRanges.map(({ label, start, end }) => (<button_1.Button key={label} variant="ghost" size="sm" className={(0, cn_1.cn)("justify-start hover:bg-primary/90 hover:text-background", selectedRange === label &&
                        "bg-primary text-background hover:bg-primary/90 hover:text-background")} onClick={() => {
                        selectDateRange(start, end, label);
                        setMonthFrom(start);
                        setYearFrom(start.getFullYear());
                        setMonthTo(end);
                        setYearTo(end.getFullYear());
                    }}>
                        {label}
                      </button_1.Button>))}
                  </div>)}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="ml-3 flex gap-2">
                      <select_1.Select onValueChange={(value) => {
                handleMonthChange(months.indexOf(value), "from");
                setSelectedRange(null);
            }} value={monthFrom ? months[monthFrom.getMonth()] : undefined}>
                        <select_1.SelectTrigger className="w-[122px] font-medium hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0">
                          <select_1.SelectValue placeholder="Month"/>
                        </select_1.SelectTrigger>
                        <select_1.SelectContent>
                          {months.map((month, idx) => (<select_1.SelectItem key={idx} value={month}>
                              {month}
                            </select_1.SelectItem>))}
                        </select_1.SelectContent>
                      </select_1.Select>
                      <select_1.Select onValueChange={(value) => {
                handleYearChange(Number(value), "from");
                setSelectedRange(null);
            }} value={yearFrom ? yearFrom.toString() : undefined}>
                        <select_1.SelectTrigger className="w-[122px] font-medium hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0">
                          <select_1.SelectValue placeholder="Year"/>
                        </select_1.SelectTrigger>
                        <select_1.SelectContent>
                          {years.map((year, idx) => (<select_1.SelectItem key={idx} value={year.toString()}>
                              {year}
                            </select_1.SelectItem>))}
                        </select_1.SelectContent>
                      </select_1.Select>
                    </div>
                    {numberOfMonths === 2 && (<div className="flex gap-2">
                        <select_1.Select onValueChange={(value) => {
                    handleMonthChange(months.indexOf(value), "to");
                    setSelectedRange(null);
                }} value={monthTo ? months[monthTo.getMonth()] : undefined}>
                          <select_1.SelectTrigger className="w-[122px] font-medium hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0">
                            <select_1.SelectValue placeholder="Month"/>
                          </select_1.SelectTrigger>
                          <select_1.SelectContent>
                            {months.map((month, idx) => (<select_1.SelectItem key={idx} value={month}>
                                {month}
                              </select_1.SelectItem>))}
                          </select_1.SelectContent>
                        </select_1.Select>
                        <select_1.Select onValueChange={(value) => {
                    handleYearChange(Number(value), "to");
                    setSelectedRange(null);
                }} value={yearTo ? yearTo.toString() : undefined}>
                          <select_1.SelectTrigger className="w-[122px] font-medium hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0">
                            <select_1.SelectValue placeholder="Year"/>
                          </select_1.SelectTrigger>
                          <select_1.SelectContent>
                            {years.map((year, idx) => (<select_1.SelectItem key={idx} value={year.toString()}>
                                {year}
                              </select_1.SelectItem>))}
                          </select_1.SelectContent>
                        </select_1.Select>
                      </div>)}
                  </div>
                  <div className="flex">
                    <calendar_1.Calendar mode="range" defaultMonth={monthFrom} month={monthFrom} onMonthChange={setMonthFrom} selected={date} onSelect={handleDateSelect} numberOfMonths={numberOfMonths} showOutsideDays={false} className={className}/>
                  </div>
                </div>
              </div>
            </popover_1.PopoverContent>)}
        </popover_1.Popover>
      </>);
});
exports.CalendarDatePicker.displayName = "CalendarDatePicker";
