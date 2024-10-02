"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsOverview = void 0;
const react_1 = __importDefault(require("react"));
const StatsOverview = ({ stats }) => (<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
    {stats.map((stat) => (<div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
        <dt className="text-sm font-semibold leading-6 text-foreground/3">
          {stat.name}
        </dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
          {stat.value}
        </dd>
      </div>))}
  </dl>);
exports.StatsOverview = StatsOverview;
