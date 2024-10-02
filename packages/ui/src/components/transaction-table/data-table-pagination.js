"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTablePagination = DataTablePagination;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../button");
const select_1 = require("../select");
function DataTablePagination({ table, }) {
    return (<div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <select_1.Select value={`${table.getState().pagination.pageSize}`} onValueChange={(value) => {
            table.setPageSize(Number(value));
        }}>
            <select_1.SelectTrigger className="h-8 w-[70px]">
              <select_1.SelectValue placeholder={table.getState().pagination.pageSize}/>
            </select_1.SelectTrigger>
            <select_1.SelectContent side="top">
              {[10, 20, 30, 40, 50, 100, 200].map((pageSize) => (<select_1.SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </select_1.SelectItem>))}
            </select_1.SelectContent>
          </select_1.Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <button_1.Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
            <span className="sr-only">Go to first page</span>
            <react_icons_1.DoubleArrowLeftIcon className="h-4 w-4"/>
          </button_1.Button>
          <button_1.Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            <span className="sr-only">Go to previous page</span>
            <react_icons_1.ChevronLeftIcon className="h-4 w-4"/>
          </button_1.Button>
          <button_1.Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            <span className="sr-only">Go to next page</span>
            <react_icons_1.ChevronRightIcon className="h-4 w-4"/>
          </button_1.Button>
          <button_1.Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
            <span className="sr-only">Go to last page</span>
            <react_icons_1.DoubleArrowRightIcon className="h-4 w-4"/>
          </button_1.Button>
        </div>
      </div>
    </div>);
}
