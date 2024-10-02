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
exports.BankAccountCardContent = void 0;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const lucide_react_1 = require("lucide-react");
const financial_data_processor_1 = require("../../../lib/financial-data-processor");
const cn_1 = require("../../../utils/cn");
const badge_1 = require("../../badge");
const button_1 = require("../../button");
const card_1 = require("../../card");
const collapsible_1 = require("../../collapsible");
const command_1 = require("../../command");
const label_1 = require("../../label");
const tabs_1 = require("../../tabs");
const BankAccountCard_1 = require("./BankAccountCard");
/**
 * The `BankAccountCardContent` component is responsible for displaying the content section of a bank account card within a user interface.
 *
 * Features:
 * - Showcases the number of pockets and goals associated with the bank account.
 * - Presents each count within its respective badge for clarity and aesthetics.
 * - Can be styled further through its `className` prop.
 *
 * @remarks
 * The component fetches its bank account data from the `BankAccountContext`. If there are pockets associated with the account,
 * the component will display badges indicating the number of pockets and goals.
 *
 * It's worth noting that the bank account context should ideally provide methods `getNumberOfPockets` and `getNumberOfGoals` to
 * fetch the desired counts.
 *
 * @example Basic Usage:
 * ```tsx
 * import { BankAccountCardContent } from './path-to-component';
import { BankAccount as BankAccountInstance } from 'src/types/financial/bank-account';
 *
 * function BankAccountContentView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardContent />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Applying custom styles using `className` prop:
 * ```tsx
 * <BankAccountCardContent className="bg-gray-100 rounded-md" />
 * ```
 *
 * @param props - Component properties conforming to `IBankAccountCardContent`.
 * @returns {React.FC<BankAccountCardContentProps>} - Returns a React Functional Component.
 */
const BankAccountCardContent = (props) => {
    const { className } = props;
    const bankAccount = (0, react_1.useContext)(BankAccountCard_1.BankAccountContext);
    if (bankAccount === undefined) {
        return null;
    }
    if (bankAccount.pockets === undefined || bankAccount.pockets.length === 0) {
        return null;
    }
    // get all goals from pockets
    const goals = bankAccount.pockets.flatMap((pocket) => pocket.goals);
    if (goals === undefined || goals.length === 0) {
        return null;
    }
    return (<card_1.CardContent className={(0, cn_1.cn)("", className)}>
      <tabs_1.Tabs defaultValue="pockets" className="w-full">
        <tabs_1.TabsList className="grid w-full grid-cols-2">
          <tabs_1.TabsTrigger value="pockets">Pockets</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="goals">Goals</tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="pockets">
          <AccountPockets />
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="goals">
          <card_1.Card>
            <AccountGoalsCommandSearch />
          </card_1.Card>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>
      {/* if the historical account balance is not empty, we display a graph of the balance history */}
    </card_1.CardContent>);
};
exports.BankAccountCardContent = BankAccountCardContent;
const AccountGoalsCommandSearch = () => {
    const ref = react_1.default.useRef(null);
    const [inputValue, setInputValue] = react_1.default.useState("");
    const [pages, setPages] = react_1.default.useState(["home"]);
    const popPage = react_1.default.useCallback(() => {
        setPages((pages) => {
            const x = [...pages];
            x.splice(-1, 1);
            return x;
        });
    }, []);
    const bankAccount = (0, react_1.useContext)(BankAccountCard_1.BankAccountContext);
    if (bankAccount === undefined) {
        return null;
    }
    const goals = financial_data_processor_1.FinancialDataProcessor.getGoals(bankAccount);
    // get milestones from pockets
    const milestones = financial_data_processor_1.FinancialDataProcessor.getMilestones(bankAccount);
    const activePage = pages[pages.length - 1];
    const isHome = activePage === "home";
    function bounce() {
        if (ref.current) {
            ref.current.style.transform = "scale(0.96)";
            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.transform = "";
                }
            }, 100);
            setInputValue("");
        }
    }
    return (<command_1.Command className="shadow-0 rounded-lg border" ref={ref} onKeyDown={(e) => {
            if (e.key === "Enter") {
                bounce();
            }
            if (isHome || inputValue.length) {
                return;
            }
            if (e.key === "Backspace") {
                e.preventDefault();
                popPage();
                bounce();
            }
        }}>
      <div className="p-2">
        {pages.map((p) => (<badge_1.Badge key={p} cmdk-vercel-badge="" variant={"outline"}>
            {p}
          </badge_1.Badge>))}
      </div>
      <command_1.CommandInput placeholder="Search across your goals ..." onValueChange={(value) => {
            setInputValue(value);
        }} className="border-none"/>
      <command_1.CommandList>
        <command_1.CommandEmpty>No results found.</command_1.CommandEmpty>
        {activePage === "home" && (<command_1.CommandGroup heading="Suggestions">
            <command_1.CommandItem onSelect={() => {
                setPages([...pages, "smart-goals"]);
            }}>
              <lucide_react_1.Goal className="mr-2 h-4 w-4"/>
              <span>Goals</span>
            </command_1.CommandItem>
            <command_1.CommandItem onSelect={() => {
                setPages([...pages, "milestones"]);
            }}>
              <react_icons_1.FaceIcon className="mr-2 h-4 w-4"/>
              <span>Milestones</span>
            </command_1.CommandItem>
            <command_1.CommandItem onSelect={() => {
                setPages([...pages, "target"]);
            }}>
              <lucide_react_1.RocketIcon className="mr-2 h-4 w-4"/>
              <span>Target</span>
            </command_1.CommandItem>
          </command_1.CommandGroup>)}
        <command_1.CommandSeparator />
        {activePage === "smart-goals" && (<>
            <GoalsCommandItems goals={goals}/>
          </>)}
        {activePage === "milestones" && (<div className="py-4">
            <GoalMilestones milestones={milestones}/>
          </div>)}
      </command_1.CommandList>
    </command_1.Command>);
};
const GoalMilestones = ({ milestones }) => {
    return (<>
      {milestones.map((milestone) => (<command_1.CommandItem key={milestone.id}>
          <div className="flex justify-between gap-4 px-2">
            <label_1.Label className="font-bold">{milestone.name}</label_1.Label>
            <label_1.Label className="rounded-2xl border px-3 text-xs font-bold">
              {" "}
              {milestone.isCompleted ? "Completed" : "Active"}
            </label_1.Label>
            <label_1.Label>{milestone.targetAmount} Target</label_1.Label>
          </div>
        </command_1.CommandItem>))}
    </>);
};
const GoalsCommandItems = ({ goals }) => {
    return (<>
      {goals.map((goal) => (<command_1.CommandItem key={goal.id}>
          <div className="flex justify-between gap-5 px-2">
            <lucide_react_1.GoalIcon className="mr-2 h-4 w-4"/>
            <label_1.Label className="font-bold">{goal.name}</label_1.Label>
            <label_1.Label className="font-bold">
              {" "}
              {goal.isCompleted ? "Completed" : "Active"}
            </label_1.Label>
            <p>{goal.targetAmount} Target</p>
            <div className="flex flex-row items-center">
              <lucide_react_1.CalendarIcon className="mr-2 h-4 w-4"/>
              <span className="text-xs">{goal.endDate}</span>
            </div>
          </div>
        </command_1.CommandItem>))}
    </>);
};
const AccountPockets = () => {
    const [isOpen, setIsOpen] = react_1.default.useState(false);
    const bankAccount = (0, react_1.useContext)(BankAccountCard_1.BankAccountContext);
    if (bankAccount === undefined) {
        return null;
    }
    // Check if there are pockets associated with the bank account.
    if (bankAccount.pockets == undefined || bankAccount.pockets?.length === 0) {
        return null;
    }
    // get the first pocket name
    const pocketName = bankAccount.pockets[0]?.type !== undefined
        ? bankAccount.pockets[0].type.toString()
        : "";
    return (<collapsible_1.Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2 p-4">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          {bankAccount.name} has {bankAccount.pockets?.length} pockets
        </h4>
        <collapsible_1.CollapsibleTrigger asChild>
          <button_1.Button variant="ghost" size="sm">
            <react_icons_1.CaretSortIcon className="h-4 w-4"/>
            <span className="sr-only">Toggle</span>
          </button_1.Button>
        </collapsible_1.CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        {financial_data_processor_1.FinancialDataProcessor.formatPocketName(pocketName.toString())}
      </div>
      {bankAccount.pockets && bankAccount.pockets.length > 1 && (<collapsible_1.CollapsibleContent className="space-y-2">
          {bankAccount.pockets.slice(1).map((pocket) => {
                return (<div key={pocket.id} className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                {pocket.type &&
                        financial_data_processor_1.FinancialDataProcessor.formatPocketName(pocket.type.toString())}
              </div>);
            })}
        </collapsible_1.CollapsibleContent>)}
    </collapsible_1.Collapsible>);
};
