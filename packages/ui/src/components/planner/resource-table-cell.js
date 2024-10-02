"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const table_1 = require("../table");
const ResourceTableCell = ({ className, resourceItem, ...props }) => {
    return (<table_1.TableCell className={(0, utils_1.cn)(className, "sticky left-0 z-10 border-y bg-background")} {...props}>
      <div className="flex items-center space-x-4">
        <div className="relative h-10 w-10">
          <img className="rounded-full object-fill" src={resourceItem.details.image} alt={resourceItem.name}/>
        </div>
        <h2>{resourceItem.name}</h2>
      </div>
    </table_1.TableCell>);
};
exports.default = ResourceTableCell;
