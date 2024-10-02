"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.track = exports.Provider = void 0;
const nextjs_1 = require("@openpanel/nextjs");
const isProd = process.env.NODE_ENV === 'production';
const Provider = () => (<nextjs_1.OpenPanelComponent clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID} trackAttributes={true} trackScreenViews={isProd} trackOutgoingLinks={isProd}/>);
exports.Provider = Provider;
const track = (options) => {
    const { track: openTrack } = (0, nextjs_1.useOpenPanel)();
    if (!isProd) {
        console.log('Track', options);
        return;
    }
    const { event, ...rest } = options;
    openTrack(event, rest);
};
exports.track = track;
