"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AvatarCircles;
const utils_1 = require("@/lib/utils");
function AvatarCircles({ numPeople, avatarUrls, className, }) {
    return (<div className={(0, utils_1.cn)("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (<img key={index} className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800" src={url} width={40} height={40} alt={`Avatar ${index + 1}`}/>))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </div>
    </div>);
}
