"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Pagination,
    render: (args) => (<_1.Pagination {...args}>
      <_1.PaginationContent>
        <_1.PaginationItem>
          <_1.PaginationPrevious href="#"/>
        </_1.PaginationItem>
        <_1.PaginationItem>
          <_1.PaginationLink href="#">1</_1.PaginationLink>
        </_1.PaginationItem>
        <_1.PaginationItem>
          <_1.PaginationLink href="#" isActive>
            2
          </_1.PaginationLink>
        </_1.PaginationItem>
        <_1.PaginationItem>
          <_1.PaginationLink href="#">3</_1.PaginationLink>
        </_1.PaginationItem>
        <_1.PaginationItem>
          <_1.PaginationEllipsis />
        </_1.PaginationItem>
        <_1.PaginationItem>
          <_1.PaginationNext href="#"/>
        </_1.PaginationItem>
      </_1.PaginationContent>
    </_1.Pagination>),
};
exports.default = meta;
exports.Default = {};
