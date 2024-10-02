"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrollable = exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Select,
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.Select {...args}>
      <_1.SelectTrigger className="w-[180px]">
        <_1.SelectValue placeholder="Select a fruit"/>
      </_1.SelectTrigger>
      <_1.SelectContent>
        <_1.SelectGroup>
          <_1.SelectLabel>Fruits</_1.SelectLabel>
          <_1.SelectItem value="apple">Apple</_1.SelectItem>
          <_1.SelectItem value="banana">Banana</_1.SelectItem>
          <_1.SelectItem value="blueberry">Blueberry</_1.SelectItem>
          <_1.SelectItem value="grapes">Grapes</_1.SelectItem>
          <_1.SelectItem value="pineapple">Pineapple</_1.SelectItem>
        </_1.SelectGroup>
      </_1.SelectContent>
    </_1.Select>),
};
exports.Scrollable = {
    render: (args) => (<_1.Select {...args}>
      <_1.SelectTrigger className="w-[280px]">
        <_1.SelectValue placeholder="Select a timezone"/>
      </_1.SelectTrigger>
      <_1.SelectContent>
        <_1.SelectGroup>
          <_1.SelectLabel>North America</_1.SelectLabel>
          <_1.SelectItem value="est">Eastern Standard Time (EST)</_1.SelectItem>
          <_1.SelectItem value="cst">Central Standard Time (CST)</_1.SelectItem>
          <_1.SelectItem value="mst">Mountain Standard Time (MST)</_1.SelectItem>
          <_1.SelectItem value="pst">Pacific Standard Time (PST)</_1.SelectItem>
          <_1.SelectItem value="akst">Alaska Standard Time (AKST)</_1.SelectItem>
          <_1.SelectItem value="hst">Hawaii Standard Time (HST)</_1.SelectItem>
        </_1.SelectGroup>
        <_1.SelectGroup>
          <_1.SelectLabel>Europe & Africa</_1.SelectLabel>
          <_1.SelectItem value="gmt">Greenwich Mean Time (GMT)</_1.SelectItem>
          <_1.SelectItem value="cet">Central European Time (CET)</_1.SelectItem>
          <_1.SelectItem value="eet">Eastern European Time (EET)</_1.SelectItem>
          <_1.SelectItem value="west">
            Western European Summer Time (WEST)
          </_1.SelectItem>
          <_1.SelectItem value="cat">Central Africa Time (CAT)</_1.SelectItem>
          <_1.SelectItem value="eat">East Africa Time (EAT)</_1.SelectItem>
        </_1.SelectGroup>
        <_1.SelectGroup>
          <_1.SelectLabel>Asia</_1.SelectLabel>
          <_1.SelectItem value="msk">Moscow Time (MSK)</_1.SelectItem>
          <_1.SelectItem value="ist">India Standard Time (IST)</_1.SelectItem>
          <_1.SelectItem value="cst_china">China Standard Time (CST)</_1.SelectItem>
          <_1.SelectItem value="jst">Japan Standard Time (JST)</_1.SelectItem>
          <_1.SelectItem value="kst">Korea Standard Time (KST)</_1.SelectItem>
          <_1.SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </_1.SelectItem>
        </_1.SelectGroup>
        <_1.SelectGroup>
          <_1.SelectLabel>Australia & Pacific</_1.SelectLabel>
          <_1.SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </_1.SelectItem>
          <_1.SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </_1.SelectItem>
          <_1.SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </_1.SelectItem>
          <_1.SelectItem value="nzst">New Zealand Standard Time (NZST)</_1.SelectItem>
          <_1.SelectItem value="fjt">Fiji Time (FJT)</_1.SelectItem>
        </_1.SelectGroup>
        <_1.SelectGroup>
          <_1.SelectLabel>South America</_1.SelectLabel>
          <_1.SelectItem value="art">Argentina Time (ART)</_1.SelectItem>
          <_1.SelectItem value="bot">Bolivia Time (BOT)</_1.SelectItem>
          <_1.SelectItem value="brt">Brasilia Time (BRT)</_1.SelectItem>
          <_1.SelectItem value="clt">Chile Standard Time (CLT)</_1.SelectItem>
        </_1.SelectGroup>
      </_1.SelectContent>
    </_1.Select>),
};
