"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];
const meta = {
    component: _1.Table,
    render: (args) => (<_1.Table {...args}>
      <_1.TableCaption>A list of your recent invoices.</_1.TableCaption>
      <_1.TableHeader>
        <_1.TableRow>
          <_1.TableHead className="w-[100px]">Invoice</_1.TableHead>
          <_1.TableHead>Status</_1.TableHead>
          <_1.TableHead>Method</_1.TableHead>
          <_1.TableHead className="text-right">Amount</_1.TableHead>
        </_1.TableRow>
      </_1.TableHeader>
      <_1.TableBody>
        {invoices.map((invoice) => (<_1.TableRow key={invoice.invoice}>
            <_1.TableCell className="font-medium">{invoice.invoice}</_1.TableCell>
            <_1.TableCell>{invoice.paymentStatus}</_1.TableCell>
            <_1.TableCell>{invoice.paymentMethod}</_1.TableCell>
            <_1.TableCell className="text-right">{invoice.totalAmount}</_1.TableCell>
          </_1.TableRow>))}
      </_1.TableBody>
      <_1.TableFooter>
        <_1.TableRow>
          <_1.TableCell colSpan={3}>Total</_1.TableCell>
          <_1.TableCell className="text-right">$2,500.00</_1.TableCell>
        </_1.TableRow>
      </_1.TableFooter>
    </_1.Table>),
};
exports.default = meta;
exports.Default = {};
