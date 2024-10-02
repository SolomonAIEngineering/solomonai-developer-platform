"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHoverCard = void 0;
const avatar_1 = require("../avatar");
const badge_1 = require("../badge");
const button_1 = require("../button");
const hover_card_1 = require("../hover-card");
const DataHoverCard = ({ triggerLabel, title, items, avatarSrc, avatarFallbackText = "Default", }) => {
    return (<hover_card_1.HoverCard>
      <hover_card_1.HoverCardTrigger asChild>
        <button_1.Button variant="link">{triggerLabel}</button_1.Button>
      </hover_card_1.HoverCardTrigger>
      <hover_card_1.HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <avatar_1.Avatar>
            <avatar_1.AvatarImage src={avatarSrc || "default_avatar_url.png"}/>
            <avatar_1.AvatarFallback>{avatarFallbackText}</avatar_1.AvatarFallback>
          </avatar_1.Avatar>
          <div className="flex flex-col gap-2 p-2 space-y-1 border-l">
            <h4 className="text-xs font-semibold">{title}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (<badge_1.Badge variant="outline" key={index}>
                  {item}
                </badge_1.Badge>))}
            </div>
          </div>
        </div>
      </hover_card_1.HoverCardContent>
    </hover_card_1.HoverCard>);
};
exports.DataHoverCard = DataHoverCard;
