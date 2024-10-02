"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const utils_1 = require("../../lib/utils");
const checkbox_1 = require("../checkbox");
const data_table_column_header_1 = require("./data-table-column-header");
const data_table_filters_1 = require("./data-table-filters");
const data_table_row_actions_1 = require("./data-table-row-actions");
exports.columns = [
    {
        id: "select",
        header: ({ table }) => (<checkbox_1.Checkbox checked={table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" className="translate-y-[2px]"/>),
        cell: ({ row }) => (<checkbox_1.Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" className="translate-y-[2px]"/>),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "accountId",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Account"/>),
        cell: ({ row }) => (<div className="w-[80px]">{row.getValue("accountId")}</div>),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "merchantName",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Merchant"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("merchantName")}
          </span>
        </div>);
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Transaction"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>);
        },
    },
    {
        accessorKey: "personalFinanceCategoryPrimary",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Category"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {(0, utils_1.removeUnderScores)(row.getValue("personalFinanceCategoryPrimary"))}
          </span>
        </div>);
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        },
    },
    {
        accessorKey: "authorizedDate",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Authorized"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {new Date(row.getValue("authorizedDate")).toString().slice(0, 10)}
          </span>
        </div>);
        },
    },
    {
        accessorKey: "amount",
        header: ({ column, table }) => (
        // <DataTableColumnHeader column={column} title="Amount" />
        <div className="flex flex-row items-center justify-center gap-2">
        <span>Amount</span>
        <data_table_filters_1.DataTableFilter column={column} table={table}/>
      </div>),
        cell: ({ row }) => {
            return (<div className="flex items-center justify-center space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            ${Math.abs(Number(row.getValue("amount"))).toFixed(2)}
          </span>
        </div>);
        },
    },
    {
        accessorKey: "locationCity",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="City"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("locationCity")}
          </span>
        </div>);
        },
    },
    {
        accessorKey: "paymentChannel",
        header: ({ column }) => (<data_table_column_header_1.DataTableColumnHeader column={column} title="Payment Channel"/>),
        cell: ({ row }) => {
            return (<div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("paymentChannel")}
          </span>
        </div>);
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <data_table_row_actions_1.DataTableRowActions row={row}/>,
    },
];
